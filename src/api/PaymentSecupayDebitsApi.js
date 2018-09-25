
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SecupayTransactionProductDTO from '../model/SecupayTransactionProductDTO';
import SecupayTransactionProductModel from '../model/SecupayTransactionProductModel';

/**
* PaymentSecupayDebits service.
* @module api/PaymentSecupayDebitsApi
*/
export default class PaymentSecupayDebitsApi {

    /**
    * Constructs a new PaymentSecupayDebitsApi. 
    * @alias module:api/PaymentSecupayDebitsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Payment/Secupaydebits/{paymentDebitId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    paymentSecupayDebitsCancelByIdWithHttpInfo(paymentDebitId) {
      let postBody = null;

      // verify the required parameter 'paymentDebitId' is set
      if (paymentDebitId === undefined || paymentDebitId === null) {
        throw new Error("Missing the required parameter 'paymentDebitId' when calling paymentSecupayDebitsCancelById");
      }


      let pathParams = {
        'paymentDebitId': paymentDebitId
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
        '/Payment/Secupaydebits/{paymentDebitId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupaydebits/{paymentDebitId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    paymentSecupayDebitsCancelById(paymentDebitId) {
      return this.paymentSecupayDebitsCancelByIdWithHttpInfo(paymentDebitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Secupaydebits/{paymentDebitId}
     * Get the details of a payment transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayDebitsGetByIdWithHttpInfo(paymentDebitId) {
      let postBody = null;

      // verify the required parameter 'paymentDebitId' is set
      if (paymentDebitId === undefined || paymentDebitId === null) {
        throw new Error("Missing the required parameter 'paymentDebitId' when calling paymentSecupayDebitsGetById");
      }


      let pathParams = {
        'paymentDebitId': paymentDebitId
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
        '/Payment/Secupaydebits/{paymentDebitId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Secupaydebits/{paymentDebitId}
     * Get the details of a payment transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayDebitsGetById(paymentDebitId) {
      return this.paymentSecupayDebitsGetByIdWithHttpInfo(paymentDebitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Secupaydebits
     * Start a debit payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Debit payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupaydebitsPostWithHttpInfo(opts) {
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
        '/Payment/Secupaydebits', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupaydebits
     * Start a debit payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Debit payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupaydebitsPost(opts) {
      return this.paymentSecupaydebitsPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
