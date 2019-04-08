
import ApiClient from "../ApiClient";
import PrepaidMappingZvt from '../model/PrepaidMappingZvt';
import PrepaidZvtDTO from '../model/PrepaidZvtDTO';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* PrepaidContractsProduct service.
* @module api/PrepaidContractsProductApi
*/
export default class PrepaidContractsProductApi {

    /**
    * Constructs a new PrepaidContractsProductApi. 
    * @alias module:api/PrepaidContractsProductApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Prepaid/Contracts/null/mappingZvt
     * Gets prepaid item id from product id which is configured in prepaid contracts
     * @param {String} prepaidContractId Prepaid contract id
     * @param {Object} opts Optional parameters
     * @param {module:model/PrepaidZvtDTO} opts.body Prepaid transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaidMappingZvt} and HTTP response
     */
    mappingZvtWithHttpInfo(prepaidContractId, opts) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'prepaidContractId' is set
      if (prepaidContractId === undefined || prepaidContractId === null) {
        throw new Error("Missing the required parameter 'prepaidContractId' when calling mappingZvt");
      }


      let pathParams = {
        'prepaidContractId': prepaidContractId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = PrepaidMappingZvt;

      return this.apiClient.callApi(
        '/Prepaid/Contracts/{prepaidContractId}/mappingZvt', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Prepaid/Contracts/null/mappingZvt
     * Gets prepaid item id from product id which is configured in prepaid contracts
     * @param {String} prepaidContractId Prepaid contract id
     * @param {Object} opts Optional parameters
     * @param {module:model/PrepaidZvtDTO} opts.body Prepaid transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaidMappingZvt}
     */
    mappingZvt(prepaidContractId, opts) {
      return this.mappingZvtWithHttpInfo(prepaidContractId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
