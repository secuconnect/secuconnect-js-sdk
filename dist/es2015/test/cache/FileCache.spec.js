'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _Globals = require('../Globals');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

  jest.setTimeout(8000);

  var authenticatorAppUser = void 0;
  var authenticatorClientCred = void 0;
  var authenticatorDeviceCred = void 0;
  var appUserUniqueKey = void 0;
  var clientCredUniqueKey = void 0;
  var deviceCredUniqueKey = void 0;
  var appUserFilePath = void 0;
  var clientCredFilePath = void 0;
  var deviceCredFilePath = void 0;
  var tokenFromApiAppUser = void 0;
  var tokenFromFileAppUser = void 0;
  var tokenFromApiClientCred = void 0;
  var tokenFromFileClientCred = void 0;
  var tokenFromApiDeviceCred = void 0;
  var tokenFromFileDeviceCred = void 0;

  beforeAll(function () {
    var tempDir = 'tmp/';

    authenticatorAppUser = new SecuConnectApi.Authenticator(SecuConnectApi.OAuthApplicationUserCredentials.from(_Globals.OAuthApplicationUserCredentials.clientId, _Globals.OAuthApplicationUserCredentials.clientSecret, _Globals.OAuthApplicationUserCredentials.username, _Globals.OAuthApplicationUserCredentials.password, _Globals.OAuthApplicationUserCredentials.device, _Globals.OAuthApplicationUserCredentials.deviceName));
    appUserUniqueKey = authenticatorAppUser.credentials.getUniqueKey() + 'Testing';
    appUserFilePath = tempDir + appUserUniqueKey;

    authenticatorClientCred = new SecuConnectApi.Authenticator(SecuConnectApi.OAuthClientCredentials.from(_Globals.OAuthClientCredentials.clientId, _Globals.OAuthClientCredentials.clientSecret));
    clientCredUniqueKey = authenticatorClientCred.credentials.getUniqueKey() + 'Testing';
    clientCredFilePath = tempDir + clientCredUniqueKey;

    authenticatorDeviceCred = new SecuConnectApi.Authenticator(SecuConnectApi.OAuthDeviceCredentials.from(_Globals.OAuthDeviceCredentials.clientId, _Globals.OAuthDeviceCredentials.clientSecret, _Globals.OAuthDeviceCredentials.deviceUuid));
    deviceCredUniqueKey = authenticatorDeviceCred.credentials.getUniqueKey() + 'Testing';
    deviceCredFilePath = tempDir + deviceCredUniqueKey;
  });

  afterAll(function () {
    fs.exists(appUserFilePath, function (exists) {
      if (exists) {
        fs.unlinkSync(appUserFilePath, function (err) {
          throw err;
        });
      }
    });

    fs.exists(clientCredFilePath, function (exists) {
      if (exists) {
        fs.unlinkSync(clientCredFilePath, function (err) {
          throw err;
        });
      }
    });

    fs.exists(deviceCredFilePath, function (exists) {
      if (exists) {
        fs.unlinkSync(deviceCredFilePath, function (err) {
          throw err;
        });
      }
    });
  });

  describe('Cache', function () {
    describe('FileCache', function () {
      it('should save application user token to file cache', function () {
        authenticatorAppUser.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
        return authenticatorAppUser.apiClient.callApi('oauth/token', //path
        'POST', //httpMethod
        {}, //pathParams
        {}, //queryParams
        { 'Content-Type': 'application/json' }, //headerParams
        {}, //formParams
        authenticatorAppUser.credentials.getCredentials(), //bodyParam
        [], //authNames
        [], //contentTypes
        [] //accepts

        //returnType
        ).then(function (response) {
          return response.response.body;
        }).then(function (token) {
          authenticatorAppUser.apiClient.cachePool.setItem(appUserUniqueKey, token);

          tokenFromApiAppUser = token;
        }).catch(function (err) {
          console.log(err);
        });
      });

      it('should save client credentials token to file cache', function () {
        authenticatorClientCred.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
        return authenticatorClientCred.apiClient.callApi('oauth/token', //path
        'POST', //httpMethod
        {}, //pathParams
        {}, //queryParams
        { 'Content-Type': 'application/json' }, //headerParams
        {}, //formParams
        authenticatorClientCred.credentials.getCredentials(), //bodyParam
        [], //authNames
        [], //contentTypes
        [] //accepts

        //returnType
        ).then(function (response) {
          return response.response.body;
        }).then(function (token) {
          authenticatorClientCred.apiClient.cachePool.setItem(clientCredUniqueKey, token);

          tokenFromApiClientCred = token;
        }).catch(function (err) {
          console.log(err);
        });
      });

      it('should save device credentials token to file cache', function () {
        authenticatorDeviceCred.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
        return authenticatorDeviceCred.apiClient.callApi('oauth/token', //path
        'POST', //httpMethod
        {}, //pathParams
        {}, //queryParams
        { 'Content-Type': 'application/json' }, //headerParams
        {}, //formParams
        authenticatorDeviceCred.credentials.getCredentials(), //bodyParam
        [], //authNames
        [], //contentTypes
        [] //accepts

        //returnType
        ).then(function (response) {
          return response.response.body;
        }).then(function (token) {
          authenticatorDeviceCred.apiClient.cachePool.setItem(deviceCredUniqueKey, token);

          tokenFromApiDeviceCred = token;
        }).catch(function (err) {
          console.log(err);
        });
      });

      it('should get application user token from file cache', function () {
        return authenticatorAppUser.apiClient.cachePool.getItem(appUserUniqueKey).then(function (token) {
          tokenFromFileAppUser = token;

          expect(tokenFromFileAppUser.access_token).toBe(tokenFromApiAppUser.access_token);
          expect(tokenFromFileAppUser.expires_in).toBe(tokenFromApiAppUser.expires_in);
          expect(tokenFromFileAppUser.token_type).toBe(tokenFromApiAppUser.token_type);
          expect(tokenFromFileAppUser.scope).toBe(tokenFromApiAppUser.scope);
          expect(tokenFromFileAppUser.refresh_token).toBe(tokenFromApiAppUser.refresh_token);
        }).catch(function (err) {
          console.log(err);
        });
      });

      it('should get client credentials token from file cache', function () {
        return authenticatorClientCred.apiClient.cachePool.getItem(clientCredUniqueKey).then(function (token) {
          tokenFromFileClientCred = token;

          expect(tokenFromFileClientCred.access_token).toBe(tokenFromApiClientCred.access_token);
          expect(tokenFromFileClientCred.expires_in).toBe(tokenFromApiClientCred.expires_in);
          expect(tokenFromFileClientCred.token_type).toBe(tokenFromApiClientCred.token_type);
          expect(tokenFromFileClientCred.scope).toBe(tokenFromApiClientCred.scope);
          expect(tokenFromFileClientCred.refresh_token).toBe(tokenFromApiClientCred.refresh_token);
        }).catch(function (err) {
          console.log(err);
        });
      });

      it('should get device credentials token from file cache', function () {
        return authenticatorDeviceCred.apiClient.cachePool.getItem(deviceCredUniqueKey).then(function (token) {
          tokenFromFileDeviceCred = token;

          expect(tokenFromFileDeviceCred.device_code).toBe(tokenFromApiDeviceCred.device_code);
          expect(tokenFromFileDeviceCred.user_code).toBe(tokenFromApiDeviceCred.user_code);
          expect(tokenFromFileDeviceCred.verification_url).toBe(tokenFromApiDeviceCred.verification_url);
          expect(tokenFromFileDeviceCred.expires_in).toBe(tokenFromApiDeviceCred.expires_in);
          expect(tokenFromFileDeviceCred.interval).toBe(tokenFromApiDeviceCred.interval);
        }).catch(function (err) {
          console.log(err);
        });
      });
    });
  });
});