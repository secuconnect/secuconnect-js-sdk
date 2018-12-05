import ApiClient from "../ApiClient";
import OAuthDeviceCredentials from "./OAuthDeviceCredentials";
import OAuthRefreshCredentials from "./OAuthRefreshCredentials";

/**
 * Authenticator service.
 * @module authentication/Authenticator
 */
export default class Authenticator {
    AUTH_HOST = 'https://connect-testing.secupay-ag.de';

    constructor (credentials, apiClient) {
        this.credentials = credentials;
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Function to getting token for every type of grant -
     * (client, application user and device).
     *
     * @returns {Promise<T | never>}
     */
    getToken() {
        return this.getTokenDependingOnExistence()
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * Function to getting a token depending on its existence.
     *
     * @returns {Request|PromiseLike<T | never>|Promise<T | never>}
     */
    getTokenDependingOnExistence() {
        return this.apiClient.cachePool.exists(this.credentials.getUniqueKey())
            .then(exists => exists ? this.getSpecificToken() : this.getNewToken());
    }

    /**
     * Function to getting specific token depending on grant type.
     *
     * @returns {*}
     */
    getSpecificToken() {
        return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey())
            .then(token => this.credentials instanceof OAuthDeviceCredentials ? this.getDeviceToken(token) : this.getTokenDependingOnExpiration(token));
    }

    /**
     * Function to getting token for device grant.
     *
     * @param token
     */
    getDeviceToken(token) {
        this.apiClient.basePath = this.AUTH_HOST;
        this.changeCredentialsBeforeObtainingTokenForDevice(token);

        return this.apiClient.cachePool.exists(this.credentials.getUniqueKey())
            .then(exists => exists ? this.obtainDeviceToken() : this.getNewDeviceTokenFromApi(token));
    }

    /**
     * Function to changing credentials before obtaining token for device grant.
     *
     * @param token
     */
    changeCredentialsBeforeObtainingTokenForDevice(token) {
        let credentials = this.credentials.getCredentials();
        delete credentials.uuid;
        credentials.code = token.device_code;
        this.credentials.setCredentials(credentials);
    }

    /**
     * Function to obtaining device token.
     * If the token wasn't expired function returns token,
     * in other case function gets new device token from refresh token.
     *
     * @returns {Request|PromiseLike<T | never>|Promise<T | never>}
     */
    obtainDeviceToken() {
        return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey())
            .then(token => this.apiClient.cachePool.isExpired(token) ? this.getNewDeviceTokenFromRefreshToken() : token);
    }

    /**
     * Function to getting new device token from refresh token.
     *
     * @returns {Request|PromiseLike<T | never>|Promise<T | never>}
     */
    getNewDeviceTokenFromRefreshToken() {
        return this.apiClient.cachePool.exists(this.credentials.getUniqueKey())
            .then(exists => exists ? this.getTokenFromRefreshToken() : (() => { throw 'Token not exists' })());
    }

    /**
     * Function to getting a token from given refresh token.
     *
     * @returns {*}
     */
    getTokenFromRefreshToken() {
        return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey())
            .then((refreshToken) => {
                this.changeCredentialsToRefreshCredentials(refreshToken);

                return this.getTokenDependingOnExistence();
            });
    }

    /**
     * Function to changing credentials to refresh credentials.
     *
     * @param refresh_token
     */
    changeCredentialsToRefreshCredentials({ refresh_token }) {
        this.credentials = OAuthRefreshCredentials.from(
            this.credentials.credentials.client_id,
            this.credentials.credentials.client_secret,
            refresh_token
        );
    }

    /**
     * Function to getting new device token from API.
     *
     * @param token
     * @returns {Promise<any | never>}
     */
    getNewDeviceTokenFromApi(token) {
        return this.getTokenFromApi()
            .then((response) => {
                return this.setObtainedToken(response);
            })
            .catch((error) => {
                error = JSON.parse(error.response.text);
                error = error.error;

                if (error === 'authorization_pending') {
                    return this.authenticateFirstTime(token);
                }
            });
    }

    /**
     * Function to getting token from API.
     *
     * @returns {Promise}
     */
    getTokenFromApi() {
        return this.apiClient.callApi(
            'oauth/token',//path
            'POST',//httpMethod
            {},//pathParams
            {},//queryParams
            {'Content-Type':'application/json'},//headerParams
            {},//formParams
            this.credentials.getCredentials(),//bodyParam
            [],//authNames
            [],//contentTypes
            []//accepts
            //returnType
        );
    }

    /**
     * Function to setting obtained token in cache.
     *
     * @param response
     * @returns {*}
     */
    setObtainedToken(response) {
        let token = response.response.body;
        this.apiClient.cachePool.setItem(this.credentials.getUniqueKey(), token);

        return token;
    }

    /**
     * Function to authenticating as a device grant first time.
     *
     * @param codeToken
     * @returns {Promise<any | never | never>}
     */
    authenticateFirstTime(codeToken) {
        this.apiClient.getPrinter().printUserCode(codeToken);

        if (codeToken.device_code === undefined) {
            throw 'device_code not found in token';
        } else if (codeToken.expires_in === undefined) {
            throw 'expires_in not found in token';
        } else if (codeToken.interval === undefined) {
            throw 'interval not found in token';
        } else {
            return this.tryToObtainTokenForDevice(codeToken.expires_in, codeToken.interval);
        }
    }

    /**
     * Function to trying to obtain a token for a device.
     *
     * @param expiresIn
     * @param interval
     * @returns {Promise<any | never>}
     */
    tryToObtainTokenForDevice(expiresIn, interval) {
        return new Promise((resolve, reject) => {
            let tryObtainToken = setInterval(() => {
                return this.getTokenFromApi()
                    .then((response) => {
                        clearInterval(tryObtainToken);
                        resolve(this.setObtainedToken(response));
                    })
                    .catch(() => {
                        if (expiresIn > 0) {
                            expiresIn = expiresIn - interval;
                        } else {
                            clearInterval(tryObtainToken);
                            reject('Unfortunately, the access token could not be obtained.');
                        }
                    });
            }, interval * 1000);
        });
    }

    /**
     * Function to getting token depending on an expiration.
     *
     * @param token
     * @returns {*}
     */
    getTokenDependingOnExpiration(token) {
        return this.apiClient.cachePool.isExpired(token) ? this.getNewToken() : token;
    }

    /**
     * Function to getting new token using API call.
     *
     * @returns {Promise<any | never>}
     */
    getNewToken() {
        this.apiClient.basePath = this.AUTH_HOST + '/';

        return this.getTokenFromApi()
            .then((response)=> {
                let token = this.setObtainedToken(response);

                return this.credentials instanceof OAuthDeviceCredentials ? this.getDeviceToken(token) : token;
            });
    }

    /**
     * Getter for API client, which allows making requests.
     *
     * @returns {*|(function(): obj)|{default?: ApiClient}|module:ApiClient}
     */
    getApiClient() {
        return this.apiClient;
    }

    /**
     * Setter for API client, which allows making requests.
     *
     * @param apiClient
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
}
