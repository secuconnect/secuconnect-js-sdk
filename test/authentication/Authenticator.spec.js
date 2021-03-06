
import { OAuthClientCredentials, OAuthApplicationUserCredentials, OAuthDeviceCredentials } from '../Globals';
import FileCache from "../../src/cache/FileCache";

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['../../src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('../../src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.SecuConnectApi);
    }
}(this, function(SecuConnectApi) {
    'use strict';

    // var instance;

    beforeEach(function() {
        // instance = new SecuConnectApi.PaymentCustomersApi();
        // instance.apiClient.authentications.oauth_token.accessToken = '8j18va3hhinc9i5fbg50f059j7';
    });

    var getProperty = function(object, getter, property) {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]();
        else
            return object[property];
    }

    var setProperty = function(object, setter, property, value) {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value);
        else
            object[property] = value;
    }

    describe('Authenticator', function() {
        describe('OAuthApplicationUserCredentials', function() {
            it('should allow acquiring token', function() {
                var authenticator = new SecuConnectApi.Authenticator(
                    SecuConnectApi.OAuthApplicationUserCredentials.from(
                        OAuthApplicationUserCredentials.clientId,
                        OAuthApplicationUserCredentials.clientSecret,
                        OAuthApplicationUserCredentials.username,
                        OAuthApplicationUserCredentials.password,
                        OAuthApplicationUserCredentials.device,
                        OAuthApplicationUserCredentials.deviceName
                    ));

                let fileCache = new FileCache();
                authenticator.getApiClient().setCachePool(fileCache);

                return authenticator.getToken()
                    .then((token) => {
                        expect(typeof token).toBe('object');
                        expect(token).toHaveProperty('expires_in');
                        expect(typeof token.expires_in).toBe('number');
                    });
            });
        });
        describe('OAuthClientCredentials', function() {
            it('should allow acquiring token', function() {
                var authenticator = new SecuConnectApi.Authenticator(
                    SecuConnectApi.OAuthClientCredentials.from(
                        OAuthClientCredentials.clientId,
                        OAuthClientCredentials.clientSecret
                    ));

                let fileCache = new FileCache();
                authenticator.getApiClient().setCachePool(fileCache);

                return authenticator.getToken()
                    .then((token) => {
                        expect(typeof token).toBe('object');
                        expect(token).toHaveProperty('expires_in');
                        expect(typeof token.expires_in).toBe('number');
                    });
            });
        });
        describe.skip('OAuthDeviceCredentials', function() {
            it('should allow acquiring token', function() {
                var authenticator = new SecuConnectApi.Authenticator(
                    SecuConnectApi.OAuthDeviceCredentials.from(
                        OAuthDeviceCredentials.clientId,
                        OAuthDeviceCredentials.clientSecret,
                        OAuthDeviceCredentials.deviceUuid
                    ));

                let fileCache = new FileCache();
                authenticator.getApiClient().setCachePool(fileCache);

                return authenticator.getToken()
                    .then((token) => {
                        expect(typeof token).toBe('object');
                        expect(token).toHaveProperty('expires_in');
                        expect(typeof token.expires_in).toBe('number');
                    });
            });
        });
    });
}));
