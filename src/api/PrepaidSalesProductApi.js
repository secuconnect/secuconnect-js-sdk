
import ApiClient from "../ApiClient";
import PrepaidSalesProductDTO from '../model/PrepaidSalesProductDTO';
import PrepaidSalesProductModel from '../model/PrepaidSalesProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* PrepaidSalesProduct service.
* @module api/PrepaidSalesProductApi
*/
export default class PrepaidSalesProductApi {

    /**
    * Constructs a new PrepaidSalesProductApi. 
    * @alias module:api/PrepaidSalesProductApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Prepaid/Sales
     * Create new prepaid transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/PrepaidSalesProductDTO} opts.body Prepaid transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaidSalesProductModel} and HTTP response
     */
    addSaleWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];


      let pathParams = {
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
      let returnType = PrepaidSalesProductModel;

      return this.apiClient.callApi(
        '/Prepaid/Sales', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Prepaid/Sales
     * Create new prepaid transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/PrepaidSalesProductDTO} opts.body Prepaid transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaidSalesProductModel}
     */
    addSale(opts) {
      return this.addSaleWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
