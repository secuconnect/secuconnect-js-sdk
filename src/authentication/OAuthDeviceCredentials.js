import md5 from "md5";
import AuthenticationCredentials from './AuthenticationCredentials';

/**
 * OAuthDeviceCredentials service.
 * @module authentication/OAuthDeviceCredentials
 */

export default class OAuthDeviceCredentials extends AuthenticationCredentials {
    static from(clientId, clientSecret, codeToken) {
        let credentials = this.createBasicCredentials(clientId, clientSecret);
        credentials.credentials.code = codeToken.device_code;
        credentials.credentials.codeToken = codeToken;

        return credentials;
    }

    static fromUuid(clientId, clientSecret, uuid) {
        let credentials = this.createBasicCredentials(clientId, clientSecret);
        credentials.credentials.uuid = uuid;

        return credentials;
    }

    getUniqueKey() {
        let textualKey = this.credentials.grant_type + this.credentials.client_id;

        if (this.credentials.uuid !== undefined) {
            textualKey = textualKey + this.credentials.uuid;
        }

        return md5(textualKey);
    }

    static createBasicCredentials(clientId, clientSecret) {
        let credentials = new OAuthDeviceCredentials();
        credentials.credentials = {
            'grant_type': 'device',
            'client_id': clientId,
            'client_secret': clientSecret
        };

        return credentials;
    }
}