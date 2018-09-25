import md5 from "md5";
import AuthenticationCredentials from './AuthenticationCredentials';

/**
 * OAuthClientCredentials service.
 * @module authentication/OAuthClientCredentials
 */

export default class OAuthClientCredentials extends AuthenticationCredentials {
    static from(clientId, clientSecret) {
        var credentials = new OAuthClientCredentials();
        credentials.credentials = {
            'grant_type': 'client_credentials',
            'client_id': clientId,
            'client_secret': clientSecret
        };

        return credentials;
    }

    getUniqueKey() {
        return md5(this.credentials.grant_type + this.credentials.client_id);
    }
}