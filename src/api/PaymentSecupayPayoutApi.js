
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SecupayPayoutDTO from '../model/SecupayPayoutDTO';
import SecupayPayoutProductModel from '../model/SecupayPayoutProductModel';

/**
* PaymentSecupayPayout service.
* @module api/PaymentSecupayPayoutApi
*/
export default class PaymentSecupayPayoutApi {

    /**
    * Constructs a new PaymentSecupayPayoutApi. 
    * @alias module:api/PaymentSecupayPayoutApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET Payment/Secupaypayout/{paymentPayoutId}
     * Get the details of a payment transaction
     * @param {String} paymentPayoutId Payment payout id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayPayoutProductModel} and HTTP response
     */
    getSecupaypayoutWithHttpInfo(paymentPayoutId) {
      let postBody = null;

      // verify the required parameter 'paymentPayoutId' is set
      if (paymentPayoutId === undefined || paymentPayoutId === null) {
        throw new Error("Missing the required parameter 'paymentPayoutId' when calling getSecupaypayout");
      }


      let pathParams = {
        'paymentPayoutId': paymentPayoutId
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
      let returnType = SecupayPayoutProductModel;

      return this.apiClient.callApi(
        '/Payment/Secupaypayout/{paymentPayoutId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Secupaypayout/{paymentPayoutId}
     * Get the details of a payment transaction
     * @param {String} paymentPayoutId Payment payout id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayPayoutProductModel}
     */
    getSecupaypayout(paymentPayoutId) {
      return this.getSecupaypayoutWithHttpInfo(paymentPayoutId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Secupaypayout
     * Start a payout transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayPayoutDTO} opts.body Payout payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayPayoutProductModel} and HTTP response
     */
    paymentSecupaypayoutPostWithHttpInfo(opts) {
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
      let returnType = SecupayPayoutProductModel;

      return this.apiClient.callApi(
        '/Payment/Secupaypayout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupaypayout
     * Start a payout transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayPayoutDTO} opts.body Payout payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayPayoutProductModel}
     */
    paymentSecupaypayoutPost(opts) {
      return this.paymentSecupaypayoutPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
