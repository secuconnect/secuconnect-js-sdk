import md5 from "md5";
import AuthenticationCredentials from './AuthenticationCredentials';

/**
 * OAuthApplicationUserCredentials service.
 * @module authentication/OAuthApplicationUserCredentials
 */

export default class OAuthApplicationUserCredentials extends AuthenticationCredentials {
    static from(clientId, clientSecret, username, password, device, deviceName) {
        let credentials = new OAuthApplicationUserCredentials();
        credentials.credentials = {
            'grant_type': 'appuser',
            'client_id': clientId,
            'client_secret': clientSecret,
            'username': username,
            'password': password,
            'device': device,
            'deviceinfo[name]': deviceName
        };

        return credentials;
    }

    getUniqueKey() {
        return md5(this.credentials.grant_type
            + this.credentials.client_id
            + this.credentials.username
            + this.credentials.device
            + this.credentials['deviceinfo[name]']);
    }
}