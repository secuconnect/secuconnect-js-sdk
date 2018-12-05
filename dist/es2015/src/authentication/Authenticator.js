"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _OAuthDeviceCredentials = require("./OAuthDeviceCredentials");

var _OAuthDeviceCredentials2 = _interopRequireDefault(_OAuthDeviceCredentials);

var _OAuthRefreshCredentials = require("./OAuthRefreshCredentials");

var _OAuthRefreshCredentials2 = _interopRequireDefault(_OAuthRefreshCredentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Authenticator service.
 * @module authentication/Authenticator
 */
var Authenticator = function () {
    function Authenticator(credentials, apiClient) {
        _classCallCheck(this, Authenticator);

        this.AUTH_HOST = 'https://connect-testing.secupay-ag.de';

        this.credentials = credentials;
        this.apiClient = apiClient || _ApiClient2.default.instance;
    }

    /**
     * Function to getting token for every type of grant -
     * (client, application user and device).
     *
     * @returns {Promise<T | never>}
     */


    _createClass(Authenticator, [{
        key: "getToken",
        value: function getToken() {
            return this.getTokenDependingOnExistence().catch(function (error) {
                console.error(error);
            });
        }

        /**
         * Function to getting a token depending on its existence.
         *
         * @returns {Request|PromiseLike<T | never>|Promise<T | never>}
         */

    }, {
        key: "getTokenDependingOnExistence",
        value: function getTokenDependingOnExistence() {
            var _this = this;

            return this.apiClient.cachePool.exists(this.credentials.getUniqueKey()).then(function (exists) {
                return exists ? _this.getSpecificToken() : _this.getNewToken();
            });
        }

        /**
         * Function to getting specific token depending on grant type.
         *
         * @returns {*}
         */

    }, {
        key: "getSpecificToken",
        value: function getSpecificToken() {
            var _this2 = this;

            return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey()).then(function (token) {
                return _this2.credentials instanceof _OAuthDeviceCredentials2.default ? _this2.getDeviceToken(token) : _this2.getTokenDependingOnExpiration(token);
            });
        }

        /**
         * Function to getting token for device grant.
         *
         * @param token
         */

    }, {
        key: "getDeviceToken",
        value: function getDeviceToken(token) {
            var _this3 = this;

            this.apiClient.basePath = this.AUTH_HOST;
            this.changeCredentialsBeforeObtainingTokenForDevice(token);

            return this.apiClient.cachePool.exists(this.credentials.getUniqueKey()).then(function (exists) {
                return exists ? _this3.obtainDeviceToken() : _this3.getNewDeviceTokenFromApi(token);
            });
        }

        /**
         * Function to changing credentials before obtaining token for device grant.
         *
         * @param token
         */

    }, {
        key: "changeCredentialsBeforeObtainingTokenForDevice",
        value: function changeCredentialsBeforeObtainingTokenForDevice(token) {
            var credentials = this.credentials.getCredentials();
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

    }, {
        key: "obtainDeviceToken",
        value: function obtainDeviceToken() {
            var _this4 = this;

            return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey()).then(function (token) {
                return _this4.apiClient.cachePool.isExpired(token) ? _this4.getNewDeviceTokenFromRefreshToken() : token;
            });
        }

        /**
         * Function to getting new device token from refresh token.
         *
         * @returns {Request|PromiseLike<T | never>|Promise<T | never>}
         */

    }, {
        key: "getNewDeviceTokenFromRefreshToken",
        value: function getNewDeviceTokenFromRefreshToken() {
            var _this5 = this;

            return this.apiClient.cachePool.exists(this.credentials.getUniqueKey()).then(function (exists) {
                return exists ? _this5.getTokenFromRefreshToken() : function () {
                    throw 'Token not exists';
                }();
            });
        }

        /**
         * Function to getting a token from given refresh token.
         *
         * @returns {*}
         */

    }, {
        key: "getTokenFromRefreshToken",
        value: function getTokenFromRefreshToken() {
            var _this6 = this;

            return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey()).then(function (refreshToken) {
                _this6.changeCredentialsToRefreshCredentials(refreshToken);

                return _this6.getTokenDependingOnExistence();
            });
        }

        /**
         * Function to changing credentials to refresh credentials.
         *
         * @param refresh_token
         */

    }, {
        key: "changeCredentialsToRefreshCredentials",
        value: function changeCredentialsToRefreshCredentials(_ref) {
            var refresh_token = _ref.refresh_token;

            this.credentials = _OAuthRefreshCredentials2.default.from(this.credentials.credentials.client_id, this.credentials.credentials.client_secret, refresh_token);
        }

        /**
         * Function to getting new device token from API.
         *
         * @param token
         * @returns {Promise<any | never>}
         */

    }, {
        key: "getNewDeviceTokenFromApi",
        value: function getNewDeviceTokenFromApi(token) {
            var _this7 = this;

            return this.getTokenFromApi().then(function (response) {
                return _this7.setObtainedToken(response);
            }).catch(function (error) {
                error = JSON.parse(error.response.text);
                error = error.error;

                if (error === 'authorization_pending') {
                    return _this7.authenticateFirstTime(token);
                }
            });
        }

        /**
         * Function to getting token from API.
         *
         * @returns {Promise}
         */

    }, {
        key: "getTokenFromApi",
        value: function getTokenFromApi() {
            return this.apiClient.callApi('oauth/token', //path
            'POST', //httpMethod
            {}, //pathParams
            {}, //queryParams
            { 'Content-Type': 'application/json' }, //headerParams
            {}, //formParams
            this.credentials.getCredentials(), //bodyParam
            [], //authNames
            [], //contentTypes
            [] //accepts
            //returnType
            );
        }

        /**
         * Function to setting obtained token in cache.
         *
         * @param response
         * @returns {*}
         */

    }, {
        key: "setObtainedToken",
        value: function setObtainedToken(response) {
            var token = response.response.body;
            this.apiClient.cachePool.setItem(this.credentials.getUniqueKey(), token);

            return token;
        }

        /**
         * Function to authenticating as a device grant first time.
         *
         * @param codeToken
         * @returns {Promise<any | never | never>}
         */

    }, {
        key: "authenticateFirstTime",
        value: function authenticateFirstTime(codeToken) {
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

    }, {
        key: "tryToObtainTokenForDevice",
        value: function tryToObtainTokenForDevice(expiresIn, interval) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
                var tryObtainToken = setInterval(function () {
                    return _this8.getTokenFromApi().then(function (response) {
                        clearInterval(tryObtainToken);
                        resolve(_this8.setObtainedToken(response));
                    }).catch(function () {
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

    }, {
        key: "getTokenDependingOnExpiration",
        value: function getTokenDependingOnExpiration(token) {
            return this.apiClient.cachePool.isExpired(token) ? this.getNewToken() : token;
        }

        /**
         * Function to getting new token using API call.
         *
         * @returns {Promise<any | never>}
         */

    }, {
        key: "getNewToken",
        value: function getNewToken() {
            var _this9 = this;

            this.apiClient.basePath = this.AUTH_HOST + '/';

            return this.getTokenFromApi().then(function (response) {
                var token = _this9.setObtainedToken(response);

                return _this9.credentials instanceof _OAuthDeviceCredentials2.default ? _this9.getDeviceToken(token) : token;
            });
        }

        /**
         * Getter for API client, which allows making requests.
         *
         * @returns {*|(function(): obj)|{default?: ApiClient}|module:ApiClient}
         */

    }, {
        key: "getApiClient",
        value: function getApiClient() {
            return this.apiClient;
        }

        /**
         * Setter for API client, which allows making requests.
         *
         * @param apiClient
         */

    }, {
        key: "setApiClient",
        value: function setApiClient(apiClient) {
            this.apiClient = apiClient;
        }
    }]);

    return Authenticator;
}();

exports.default = Authenticator;