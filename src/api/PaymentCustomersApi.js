
import ApiClient from "../ApiClient";
import PaymentCustomersDTO from '../model/PaymentCustomersDTO';
import PaymentCustomersList from '../model/PaymentCustomersList';
import PaymentCustomersProductModel from '../model/PaymentCustomersProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* PaymentCustomers service.
* @module api/PaymentCustomersApi
*/
export default class PaymentCustomersApi {

    /**
    * Constructs a new PaymentCustomersApi. 
    * @alias module:api/PaymentCustomersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET Payment/Customers
     * Get a list of payment customers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentCustomersList} and HTTP response
     */
    paymentCustomersGetWithHttpInfo(opts) {
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
      let returnType = PaymentCustomersList;

      return this.apiClient.callApi(
        '/Payment/Customers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Customers
     * Get a list of payment customers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersList}
     */
    paymentCustomersGet(opts) {
      return this.paymentCustomersGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Customers/{paymentCustomerId}
     * Get all payment customers
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentCustomersProductModel} and HTTP response
     */
    paymentCustomersGetByIdWithHttpInfo(paymentCustomerId) {
      let postBody = null;

      // verify the required parameter 'paymentCustomerId' is set
      if (paymentCustomerId === undefined || paymentCustomerId === null) {
        throw new Error("Missing the required parameter 'paymentCustomerId' when calling paymentCustomersGetById");
      }


      let pathParams = {
        'paymentCustomerId': paymentCustomerId
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
      let returnType = PaymentCustomersProductModel;

      return this.apiClient.callApi(
        '/Payment/Customers/{paymentCustomerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Customers/{paymentCustomerId}
     * Get all payment customers
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersProductModel}
     */
    paymentCustomersGetById(paymentCustomerId) {
      return this.paymentCustomersGetByIdWithHttpInfo(paymentCustomerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Payment/Customers/{paymentCustomerId}
     * Delete payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentCustomersProductModel>} and HTTP response
     */
    paymentCustomersIdDeleteWithHttpInfo(paymentCustomerId) {
      let postBody = null;

      // verify the required parameter 'paymentCustomerId' is set
      if (paymentCustomerId === undefined || paymentCustomerId === null) {
        throw new Error("Missing the required parameter 'paymentCustomerId' when calling paymentCustomersIdDelete");
      }


      let pathParams = {
        'paymentCustomerId': paymentCustomerId
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
      let returnType = [PaymentCustomersProductModel];

      return this.apiClient.callApi(
        '/Payment/Customers/{paymentCustomerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Payment/Customers/{paymentCustomerId}
     * Delete payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentCustomersProductModel>}
     */
    paymentCustomersIdDelete(paymentCustomerId) {
      return this.paymentCustomersIdDeleteWithHttpInfo(paymentCustomerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Payment/Customers/{paymentCustomerId}
     * Update payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentCustomersProductModel} and HTTP response
     */
    paymentCustomersIdPutWithHttpInfo(paymentCustomerId, body) {
      let postBody = body;

      // verify the required parameter 'paymentCustomerId' is set
      if (paymentCustomerId === undefined || paymentCustomerId === null) {
        throw new Error("Missing the required parameter 'paymentCustomerId' when calling paymentCustomersIdPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentCustomersIdPut");
      }


      let pathParams = {
        'paymentCustomerId': paymentCustomerId
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
      let returnType = PaymentCustomersProductModel;

      return this.apiClient.callApi(
        '/Payment/Customers/{paymentCustomerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Payment/Customers/{paymentCustomerId}
     * Update payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersProductModel}
     */
    paymentCustomersIdPut(paymentCustomerId, body) {
      return this.paymentCustomersIdPutWithHttpInfo(paymentCustomerId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Customers
     * Add new customer
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentCustomersProductModel} and HTTP response
     */
    paymentCustomersPostWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentCustomersPost");
      }


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
      let returnType = PaymentCustomersProductModel;

      return this.apiClient.callApi(
        '/Payment/Customers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Customers
     * Add new customer
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersProductModel}
     */
    paymentCustomersPost(body) {
      return this.paymentCustomersPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
