import md5 from "md5";
import AuthenticationCredentials from './AuthenticationCredentials';

/**
 * OAuthDeviceCredentials service.
 * @module authentication/OAuthDeviceCredentials
 * @version 2.0
 */

export default class OAuthDeviceCredentials extends AuthenticationCredentials {
    static from(clientId, clientSecret, deviceUuid) {
        var credentials = new OAuthDeviceCredentials();
        credentials.credentials = {
            'grant_type': 'device',
            'client_id': clientId,
            'client_secret': clientSecret,
            'uuid': deviceUuid
        };
        return credentials;
    }

    getUniqueKey() {
        return md5(this.credentials.grant_type + this.credentials.client_id + this.credentials.uuid);
    }
}