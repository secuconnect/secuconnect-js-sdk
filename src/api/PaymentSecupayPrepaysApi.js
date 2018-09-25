
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SecupayTransactionProductDTO from '../model/SecupayTransactionProductDTO';
import SecupayTransactionProductModel from '../model/SecupayTransactionProductModel';

/**
* PaymentSecupayPrepays service.
* @module api/PaymentSecupayPrepaysApi
*/
export default class PaymentSecupayPrepaysApi {

    /**
    * Constructs a new PaymentSecupayPrepaysApi. 
    * @alias module:api/PaymentSecupayPrepaysApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    paymentSecupayPrepaysCancelByIdWithHttpInfo(paymentPrepayId) {
      let postBody = null;

      // verify the required parameter 'paymentPrepayId' is set
      if (paymentPrepayId === undefined || paymentPrepayId === null) {
        throw new Error("Missing the required parameter 'paymentPrepayId' when calling paymentSecupayPrepaysCancelById");
      }


      let pathParams = {
        'paymentPrepayId': paymentPrepayId
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
        '/Payment/Secupayprepays/{paymentPrepayId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    paymentSecupayPrepaysCancelById(paymentPrepayId) {
      return this.paymentSecupayPrepaysCancelByIdWithHttpInfo(paymentPrepayId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Secupayprepays/{paymentPrepayId}
     * Get the details of a payment transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayPrepaysGetByIdWithHttpInfo(paymentPrepayId) {
      let postBody = null;

      // verify the required parameter 'paymentPrepayId' is set
      if (paymentPrepayId === undefined || paymentPrepayId === null) {
        throw new Error("Missing the required parameter 'paymentPrepayId' when calling paymentSecupayPrepaysGetById");
      }


      let pathParams = {
        'paymentPrepayId': paymentPrepayId
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/Secupayprepays/{paymentPrepayId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Secupayprepays/{paymentPrepayId}
     * Get the details of a payment transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayPrepaysGetById(paymentPrepayId) {
      return this.paymentSecupayPrepaysGetByIdWithHttpInfo(paymentPrepayId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Secupayprepays
     * Start a prepay payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Prepay payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayprepaysPostWithHttpInfo(opts) {
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/Secupayprepays', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupayprepays
     * Start a prepay payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Prepay payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayprepaysPost(opts) {
      return this.paymentSecupayprepaysPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
