import * as fs from 'fs';
import { OAuthClientCredentials, OAuthApplicationUserCredentials, OAuthDeviceCredentials } from '../Globals';

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
  jest.setTimeout(8000);

  let authenticatorAppUser;
  let authenticatorClientCred;
  let authenticatorDeviceCred;
  let appUserUniqueKey;
  let clientCredUniqueKey;
  let deviceCredUniqueKey;
  let appUserFilePath;
  let clientCredFilePath;
  let deviceCredFilePath;
  let tokenFromApiAppUser;
  let tokenFromFileAppUser;
  let tokenFromApiClientCred;
  let tokenFromFileClientCred;
  let tokenFromApiDeviceCred;
  let tokenFromFileDeviceCred;

  beforeAll(() => {
    let tempDir = 'tmp/';

    authenticatorAppUser = new SecuConnectApi.Authenticator(
      SecuConnectApi.OAuthApplicationUserCredentials.from(
        OAuthApplicationUserCredentials.clientId,
        OAuthApplicationUserCredentials.clientSecret,
        OAuthApplicationUserCredentials.username,
        OAuthApplicationUserCredentials.password,
        OAuthApplicationUserCredentials.device,
        OAuthApplicationUserCredentials.deviceName
      )
    );
    appUserUniqueKey = authenticatorAppUser.credentials.getUniqueKey() + 'Testing';
    appUserFilePath = tempDir + appUserUniqueKey;

    authenticatorClientCred = new SecuConnectApi.Authenticator(
      SecuConnectApi.OAuthClientCredentials.from(
        OAuthClientCredentials.clientId,
        OAuthClientCredentials.clientSecret
      )
    );
    clientCredUniqueKey = authenticatorClientCred.credentials.getUniqueKey() + 'Testing';
    clientCredFilePath = tempDir + clientCredUniqueKey;

    authenticatorDeviceCred = new SecuConnectApi.Authenticator(
      SecuConnectApi.OAuthDeviceCredentials.from(
        OAuthDeviceCredentials.clientId,
        OAuthDeviceCredentials.clientSecret,
        OAuthDeviceCredentials.deviceUuid
      )
    );
    deviceCredUniqueKey = authenticatorDeviceCred.credentials.getUniqueKey() + 'Testing';
    deviceCredFilePath = tempDir + deviceCredUniqueKey;
  });

  afterAll(() => {
    fs.exists(appUserFilePath, (exists) => {
      if (exists) {
        fs.unlinkSync(appUserFilePath, (err) => {
          throw err;
        });
      }
    });

    fs.exists(clientCredFilePath, (exists) => {
      if (exists) {
        fs.unlinkSync(clientCredFilePath, (err) => {
          throw err;
        });
      }
    });

    fs.exists(deviceCredFilePath, (exists) => {
      if (exists) {
        fs.unlinkSync(deviceCredFilePath, (err) => {
          throw err;
        });
      }
    });
  });

  describe('Cache', () => {
    describe('FileCache', () => {
      it('should save application user token to file cache', () => {
          authenticatorAppUser.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
          return authenticatorAppUser.apiClient.callApi(
            'oauth/token',//path
            'POST',//httpMethod
            {},//pathParams
            {},//queryParams
            {'Content-Type':'application/json'},//headerParams
            {},//formParams
            authenticatorAppUser.credentials.getCredentials(),//bodyParam
            [],//authNames
            [],//contentTypes
            []//accepts

            //returnType
          )
            .then((response) => response.response.body)
            .then((token) => {
              authenticatorAppUser.apiClient.cachePool.setItem(
                appUserUniqueKey,
                token
              );

              tokenFromApiAppUser = token;
            })
            .catch((err) => {
              console.log(err);
            });
      });



      it('should save client credentials token to file cache', () => {
        authenticatorClientCred.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
        return authenticatorClientCred.apiClient.callApi(
          'oauth/token',//path
          'POST',//httpMethod
          {},//pathParams
          {},//queryParams
          {'Content-Type':'application/json'},//headerParams
          {},//formParams
          authenticatorClientCred.credentials.getCredentials(),//bodyParam
          [],//authNames
          [],//contentTypes
          []//accepts

          //returnType
        )
          .then((response) => response.response.body)
          .then((token) => {
            authenticatorClientCred.apiClient.cachePool.setItem(
              clientCredUniqueKey,
              token
            );

            tokenFromApiClientCred = token;
          })
          .catch((err) => {
            console.log(err);
          });
      });

      it('should save device credentials token to file cache', () => {
        authenticatorDeviceCred.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
        return authenticatorDeviceCred.apiClient.callApi(
          'oauth/token',//path
          'POST',//httpMethod
          {},//pathParams
          {},//queryParams
          {'Content-Type':'application/json'},//headerParams
          {},//formParams
          authenticatorDeviceCred.credentials.getCredentials(),//bodyParam
          [],//authNames
          [],//contentTypes
          []//accepts

          //returnType
        )
          .then((response) => response.response.body)
          .then((token) => {
            authenticatorDeviceCred.apiClient.cachePool.setItem(
              deviceCredUniqueKey,
              token
            );

            tokenFromApiDeviceCred = token;
          })
          .catch((err) => {
            console.log(err);
          });
      });

    it('should get application user token from file cache', () => {
      return authenticatorAppUser.apiClient.cachePool.getItem(appUserUniqueKey)
        .then((token) => {
          tokenFromFileAppUser = token;

          expect(tokenFromFileAppUser.access_token).toBe(tokenFromApiAppUser.access_token);
          expect(tokenFromFileAppUser.expires_in).toBe(tokenFromApiAppUser.expires_in);
          expect(tokenFromFileAppUser.token_type).toBe(tokenFromApiAppUser.token_type);
          expect(tokenFromFileAppUser.scope).toBe(tokenFromApiAppUser.scope);
          expect(tokenFromFileAppUser.refresh_token).toBe(tokenFromApiAppUser.refresh_token);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    it('should get client credentials token from file cache', () => {
      return authenticatorClientCred.apiClient.cachePool.getItem(clientCredUniqueKey)
        .then((token) => {
          tokenFromFileClientCred = token;

          expect(tokenFromFileClientCred.access_token).toBe(tokenFromApiClientCred.access_token);
          expect(tokenFromFileClientCred.expires_in).toBe(tokenFromApiClientCred.expires_in);
          expect(tokenFromFileClientCred.token_type).toBe(tokenFromApiClientCred.token_type);
          expect(tokenFromFileClientCred.scope).toBe(tokenFromApiClientCred.scope);
          expect(tokenFromFileClientCred.refresh_token).toBe(tokenFromApiClientCred.refresh_token);
        })
        .catch((err) => {
          console.log(err);
        });
    });

      it('should get device credentials token from file cache', () => {
        return authenticatorDeviceCred.apiClient.cachePool.getItem(deviceCredUniqueKey)
          .then((token) => {
            tokenFromFileDeviceCred = token;

            expect(tokenFromFileDeviceCred.device_code).toBe(tokenFromApiDeviceCred.device_code);
            expect(tokenFromFileDeviceCred.user_code).toBe(tokenFromApiDeviceCred.user_code);
            expect(tokenFromFileDeviceCred.verification_url).toBe(tokenFromApiDeviceCred.verification_url);
            expect(tokenFromFileDeviceCred.expires_in).toBe(tokenFromApiDeviceCred.expires_in);
            expect(tokenFromFileDeviceCred.interval).toBe(tokenFromApiDeviceCred.interval);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });
}));
