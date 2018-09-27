'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Globals = require('../Globals');

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['../../src/index'], factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('../../src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.SecuConnectApi);
    }
})(undefined, function (SecuConnectApi) {
    'use strict';

    // var instance;

    beforeEach(function () {
        // instance = new SecuConnectApi.PaymentCustomersApi();
        // instance.apiClient.authentications.oauth_token.accessToken = '8j18va3hhinc9i5fbg50f059j7';
    });

    var getProperty = function getProperty(object, getter, property) {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') return object[getter]();else return object[property];
    };

    var setProperty = function setProperty(object, setter, property, value) {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
    };

    describe('Authenticator', function () {
        describe('OAuthApplicationUserCredentials', function () {
            it('should allow acquiring token', function () {
                var authenticator = new SecuConnectApi.Authenticator(SecuConnectApi.OAuthApplicationUserCredentials.from(_Globals.OAuthApplicationUserCredentials.clientId, _Globals.OAuthApplicationUserCredentials.clientSecret, _Globals.OAuthApplicationUserCredentials.username, _Globals.OAuthApplicationUserCredentials.password, _Globals.OAuthApplicationUserCredentials.device, _Globals.OAuthApplicationUserCredentials.deviceName));
                return authenticator.getToken().then(function (token) {
                    expect(typeof token === 'undefined' ? 'undefined' : _typeof(token)).toBe('object');
                    expect(token).toHaveProperty('expires_in');
                    expect(_typeof(token.expires_in)).toBe('number');
                });
            });
        });
        describe('OAuthClientCredentials', function () {
            it('should allow acquiring token', function () {
                var authenticator = new SecuConnectApi.Authenticator(SecuConnectApi.OAuthClientCredentials.from(_Globals.OAuthClientCredentials.clientId, _Globals.OAuthClientCredentials.clientSecret));
                return authenticator.getToken().then(function (token) {
                    expect(typeof token === 'undefined' ? 'undefined' : _typeof(token)).toBe('object');
                    expect(token).toHaveProperty('expires_in');
                    expect(_typeof(token.expires_in)).toBe('number');
                });
            });
        });
        describe('OAuthDeviceCredentials', function () {
            it('should allow acquiring token', function () {
                var authenticator = new SecuConnectApi.Authenticator(SecuConnectApi.OAuthDeviceCredentials.from(_Globals.OAuthDeviceCredentials.clientId, _Globals.OAuthDeviceCredentials.clientSecret, _Globals.OAuthDeviceCredentials.deviceUuid));
                return authenticator.getToken().then(function (token) {
                    expect(typeof token === 'undefined' ? 'undefined' : _typeof(token)).toBe('object');
                    expect(token).toHaveProperty('expires_in');
                    expect(_typeof(token.expires_in)).toBe('number');
                });
            });
        });
    });
});