import md5 from "md5";
import AuthenticationCredentials from './AuthenticationCredentials';

/**
 * OAuthRefreshCredentials class.
 * @module authentication/OAuthRefreshCredentials
 */
export default class OAuthRefreshCredentials extends AuthenticationCredentials {
    static from(clientId, clientSecret, refreshToken) {
        var credentials = new OAuthRefreshCredentials();
        credentials.credentials = {
            'grant_type': 'refresh_token',
            'client_id': clientId,
            'client_secret': clientSecret,
            'refresh_token': refreshToken
        };
        return credentials;
    }

    getUniqueKey() {
        return md5(this.credentials.grant_type + this.credentials.client_id);
    }
}
