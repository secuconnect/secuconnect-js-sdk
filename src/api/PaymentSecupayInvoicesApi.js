
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SecupayTransactionProductDTO from '../model/SecupayTransactionProductDTO';
import SecupayTransactionProductModel from '../model/SecupayTransactionProductModel';

/**
* PaymentSecupayInvoices service.
* @module api/PaymentSecupayInvoicesApi
*/
export default class PaymentSecupayInvoicesApi {

    /**
    * Constructs a new PaymentSecupayInvoicesApi. 
    * @alias module:api/PaymentSecupayInvoicesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Payment/Secupayinvoices/{paymentInvoiceId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentInvoiceId Payment invoice id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    paymentSecupayInvoicesCancelByIdWithHttpInfo(paymentInvoiceId) {
      let postBody = null;

      // verify the required parameter 'paymentInvoiceId' is set
      if (paymentInvoiceId === undefined || paymentInvoiceId === null) {
        throw new Error("Missing the required parameter 'paymentInvoiceId' when calling paymentSecupayInvoicesCancelById");
      }


      let pathParams = {
        'paymentInvoiceId': paymentInvoiceId
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
        '/Payment/Secupayinvoices/{paymentInvoiceId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupayinvoices/{paymentInvoiceId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentInvoiceId Payment invoice id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    paymentSecupayInvoicesCancelById(paymentInvoiceId) {
      return this.paymentSecupayInvoicesCancelByIdWithHttpInfo(paymentInvoiceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Secupayinvoices/{paymentInvoiceId}
     * Get the details of a payment transaction
     * @param {String} paymentInvoiceId Payment transaction ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayInvoicesGetByIdWithHttpInfo(paymentInvoiceId) {
      let postBody = null;

      // verify the required parameter 'paymentInvoiceId' is set
      if (paymentInvoiceId === undefined || paymentInvoiceId === null) {
        throw new Error("Missing the required parameter 'paymentInvoiceId' when calling paymentSecupayInvoicesGetById");
      }


      let pathParams = {
        'paymentInvoiceId': paymentInvoiceId
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
        '/Payment/Secupayinvoices/{paymentInvoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Secupayinvoices/{paymentInvoiceId}
     * Get the details of a payment transaction
     * @param {String} paymentInvoiceId Payment transaction ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayInvoicesGetById(paymentInvoiceId) {
      return this.paymentSecupayInvoicesGetByIdWithHttpInfo(paymentInvoiceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Secupayinvoices
     * Start a invoice payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Invoice payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayinvoicesPostWithHttpInfo(opts) {
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
        '/Payment/Secupayinvoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupayinvoices
     * Start a invoice payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Invoice payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayinvoicesPost(opts) {
      return this.paymentSecupayinvoicesPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
