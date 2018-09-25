import ApiClient from "../ApiClient";

/**
 * Authenticator service.
 * @module authentication/Authenticator
 */
export default class Authenticator {
  constructor (credentials, apiClient) {
    this.credentials = credentials;
    this.apiClient = apiClient || ApiClient.instance;
  }

  getToken() {
    return this.apiClient.cachePool.exists(this.credentials.getUniqueKey())
      .then((exists) => {
        if(exists) {
          return this.apiClient.cachePool.getItem(this.credentials.getUniqueKey());
        } else {
          this.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
          return this.apiClient.callApi(
            'oauth/token',//path
            'POST',//httpMethod
            {},//pathParams
            {},//queryParams
            {'Content-Type':'application/json'},//headerParams
            {},//formParams
            this.credentials.getCredentials(),//bodyParam
            [],//authNames
            [],//contentTypes
            []//accepts
            //returnType
        )
        .then((response)=> response.response.body)
        .then((value) => {
          this.apiClient.cachePool.setItem(
            this.credentials.getUniqueKey(),
            value
          );
          return value;
        })
        .catch((err) => {
          console.log(err);
        });
      }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
