
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SecupayTransactionProductDTO from '../model/SecupayTransactionProductDTO';
import SecupayTransactionProductModel from '../model/SecupayTransactionProductModel';

/**
* PaymentSecupayCreditcards service.
* @module api/PaymentSecupayCreditcardsApi
*/
export default class PaymentSecupayCreditcardsApi {

    /**
    * Constructs a new PaymentSecupayCreditcardsApi. 
    * @alias module:api/PaymentSecupayCreditcardsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Payment/Secupaycreditcards/{paymentCreditCardsId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    paymentSecupayCreditcardsCancelByIdWithHttpInfo(paymentCreditCardsId) {
      let postBody = null;

      // verify the required parameter 'paymentCreditCardsId' is set
      if (paymentCreditCardsId === undefined || paymentCreditCardsId === null) {
        throw new Error("Missing the required parameter 'paymentCreditCardsId' when calling paymentSecupayCreditcardsCancelById");
      }


      let pathParams = {
        'paymentCreditCardsId': paymentCreditCardsId
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
        '/Payment/Secupaycreditcards/{paymentCreditCardsId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupaycreditcards/{paymentCreditCardsId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    paymentSecupayCreditcardsCancelById(paymentCreditCardsId) {
      return this.paymentSecupayCreditcardsCancelByIdWithHttpInfo(paymentCreditCardsId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Secupaycreditcards/{paymentCreditCardsId}
     * Get the details of a payment transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayCreditcardsGetByIdWithHttpInfo(paymentCreditCardsId) {
      let postBody = null;

      // verify the required parameter 'paymentCreditCardsId' is set
      if (paymentCreditCardsId === undefined || paymentCreditCardsId === null) {
        throw new Error("Missing the required parameter 'paymentCreditCardsId' when calling paymentSecupayCreditcardsGetById");
      }


      let pathParams = {
        'paymentCreditCardsId': paymentCreditCardsId
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
        '/Payment/Secupaycreditcards/{paymentCreditCardsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Secupaycreditcards/{paymentCreditCardsId}
     * Get the details of a payment transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayCreditcardsGetById(paymentCreditCardsId) {
      return this.paymentSecupayCreditcardsGetByIdWithHttpInfo(paymentCreditCardsId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Secupaycreditcards
     * Start a credit card payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Credit card payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupaycreditcardsPostWithHttpInfo(opts) {
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
        '/Payment/Secupaycreditcards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupaycreditcards
     * Start a credit card payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Credit card payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupaycreditcardsPost(opts) {
      return this.paymentSecupaycreditcardsPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
