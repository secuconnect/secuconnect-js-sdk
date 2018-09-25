
import ApiClient from "../ApiClient";
import LoyaltyCardgroupsProductModel from '../model/LoyaltyCardgroupsProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* LoyaltySales service.
* @module api/LoyaltySalesApi
* @version 2.0.0
*/
export default class LoyaltySalesApi {

    /**
    * Constructs a new LoyaltySalesApi. 
    * @alias module:api/LoyaltySalesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID
     * Get cardgroups by merchant id
     * @param {String} generalMerchantId Search by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoyaltyCardgroupsProductModel>} and HTTP response
     */
    getCardgroupsByMerchantIdWithHttpInfo(generalMerchantId) {
      let postBody = null;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling getCardgroupsByMerchantId");
      }


      let pathParams = {
        'generalMerchantId': generalMerchantId
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
      let returnType = [LoyaltyCardgroupsProductModel];

      return this.apiClient.callApi(
        '/Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID
     * Get cardgroups by merchant id
     * @param {String} generalMerchantId Search by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoyaltyCardgroupsProductModel>}
     */
    getCardgroupsByMerchantId(generalMerchantId) {
      return this.getCardgroupsByMerchantIdWithHttpInfo(generalMerchantId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore
     * Get DECODED virtual terminal id by DECODED store id
     * @param {String} generalStoresId DECODED store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getVirtualTerminalIdByStoreIdWithHttpInfo(generalStoresId) {
      let postBody = null;

      // verify the required parameter 'generalStoresId' is set
      if (generalStoresId === undefined || generalStoresId === null) {
        throw new Error("Missing the required parameter 'generalStoresId' when calling getVirtualTerminalIdByStoreId");
      }


      let pathParams = {
        'generalStoresId': generalStoresId
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore
     * Get DECODED virtual terminal id by DECODED store id
     * @param {String} generalStoresId DECODED store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getVirtualTerminalIdByStoreId(generalStoresId) {
      return this.getVirtualTerminalIdByStoreIdWithHttpInfo(generalStoresId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
