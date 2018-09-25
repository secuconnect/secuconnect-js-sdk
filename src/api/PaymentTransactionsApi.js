
import ApiClient from "../ApiClient";
import PaymentTransactionsCancelList from '../model/PaymentTransactionsCancelList';
import PaymentTransactionsList from '../model/PaymentTransactionsList';
import PaymentTransactionsProductModel from '../model/PaymentTransactionsProductModel';
import PaymentTransactionsShippingUrl from '../model/PaymentTransactionsShippingUrl';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* PaymentTransactions service.
* @module api/PaymentTransactionsApi
* @version 2.0.0
*/
export default class PaymentTransactionsApi {

    /**
    * Constructs a new PaymentTransactionsApi. 
    * @alias module:api/PaymentTransactionsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET Payment/Transactions
     * Get a list of payment transactions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTransactionsList} and HTTP response
     */
    paymentTransactionsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'count': opts['count'],
        'offset': opts['offset'],
        'fields': opts['fields'],
        'q': opts['q'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = PaymentTransactionsList;

      return this.apiClient.callApi(
        '/Payment/Transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Transactions
     * Get a list of payment transactions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTransactionsList}
     */
    paymentTransactionsGet(opts) {
      return this.paymentTransactionsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Transactions/{paymentTransactionId}
     * Get all payment transactions
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTransactionsProductModel} and HTTP response
     */
    paymentTransactionsGetByIdWithHttpInfo(paymentTransactionId) {
      let postBody = null;

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling paymentTransactionsGetById");
      }


      let pathParams = {
        'paymentTransactionId': paymentTransactionId
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
      let returnType = PaymentTransactionsProductModel;

      return this.apiClient.callApi(
        '/Payment/Transactions/{paymentTransactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Transactions/{paymentTransactionId}
     * Get all payment transactions
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTransactionsProductModel}
     */
    paymentTransactionsGetById(paymentTransactionId) {
      return this.paymentTransactionsGetByIdWithHttpInfo(paymentTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Transactions/{paymentTransactionId}/cancel
     * Cancel a payment transaction
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentTransactionsCancelList>} and HTTP response
     */
    paymentTransactionsPaymentTransactionIdCancelPostWithHttpInfo(paymentTransactionId) {
      let postBody = null;

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling paymentTransactionsPaymentTransactionIdCancelPost");
      }


      let pathParams = {
        'paymentTransactionId': paymentTransactionId
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
      let returnType = [PaymentTransactionsCancelList];

      return this.apiClient.callApi(
        '/Payment/Transactions/{paymentTransactionId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Transactions/{paymentTransactionId}/cancel
     * Cancel a payment transaction
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentTransactionsCancelList>}
     */
    paymentTransactionsPaymentTransactionIdCancelPost(paymentTransactionId) {
      return this.paymentTransactionsPaymentTransactionIdCancelPostWithHttpInfo(paymentTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Transactions/{paymentTransactionId}/ShippingUrl
     * Get the url where you can fill the shipping information
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTransactionsShippingUrl} and HTTP response
     */
    paymentTransactionsPaymentTransactionIdShippingUrlGetWithHttpInfo(paymentTransactionId) {
      let postBody = null;

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling paymentTransactionsPaymentTransactionIdShippingUrlGet");
      }


      let pathParams = {
        'paymentTransactionId': paymentTransactionId
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
      let returnType = PaymentTransactionsShippingUrl;

      return this.apiClient.callApi(
        '/Payment/Transactions/{paymentTransactionId}/ShippingUrl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Transactions/{paymentTransactionId}/ShippingUrl
     * Get the url where you can fill the shipping information
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTransactionsShippingUrl}
     */
    paymentTransactionsPaymentTransactionIdShippingUrlGet(paymentTransactionId) {
      return this.paymentTransactionsPaymentTransactionIdShippingUrlGetWithHttpInfo(paymentTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
