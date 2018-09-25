
import ApiClient from "../ApiClient";
import PaymentContractsDTO from '../model/PaymentContractsDTO';
import PaymentContractsList from '../model/PaymentContractsList';
import PaymentContractsProductModel from '../model/PaymentContractsProductModel';
import PaymentContractsRequestIdResult from '../model/PaymentContractsRequestIdResult';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* PaymentContracts service.
* @module api/PaymentContractsApi
* @version 2.0.0
*/
export default class PaymentContractsApi {

    /**
    * Constructs a new PaymentContractsApi. 
    * @alias module:api/PaymentContractsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET Payment/Contracts
     * Get a list of payment contracts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsList} and HTTP response
     */
    paymentContractsGetWithHttpInfo(opts) {
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
      let returnType = PaymentContractsList;

      return this.apiClient.callApi(
        '/Payment/Contracts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Contracts
     * Get a list of payment contracts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsList}
     */
    paymentContractsGet(opts) {
      return this.paymentContractsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Contracts/{paymentContractId}
     * Get all payment contracts
     * @param {String} paymentContractId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
     */
    paymentContractsGetByIdWithHttpInfo(paymentContractId) {
      let postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsGetById");
      }


      let pathParams = {
        'paymentContractId': paymentContractId
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
      let returnType = PaymentContractsProductModel;

      return this.apiClient.callApi(
        '/Payment/Contracts/{paymentContractId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Contracts/{paymentContractId}
     * Get all payment contracts
     * @param {String} paymentContractId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */
    paymentContractsGetById(paymentContractId) {
      return this.paymentContractsGetByIdWithHttpInfo(paymentContractId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Contracts/{paymentContractId}/clone
     * Clone an existing payment contract
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
     */
    paymentContractsPaymentContractIdClonePostWithHttpInfo(paymentContractId) {
      let postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsPaymentContractIdClonePost");
      }


      let pathParams = {
        'paymentContractId': paymentContractId
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
      let returnType = PaymentContractsProductModel;

      return this.apiClient.callApi(
        '/Payment/Contracts/{paymentContractId}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Contracts/{paymentContractId}/clone
     * Clone an existing payment contract
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */
    paymentContractsPaymentContractIdClonePost(paymentContractId) {
      return this.paymentContractsPaymentContractIdClonePostWithHttpInfo(paymentContractId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Payment/Contracts/{paymentContractId}
     * Delete payment contract
     * @param {String} paymentContractId Payment contract id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentContractsProductModel>} and HTTP response
     */
    paymentContractsPaymentContractIdDeleteWithHttpInfo(paymentContractId) {
      let postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsPaymentContractIdDelete");
      }


      let pathParams = {
        'paymentContractId': paymentContractId
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
      let returnType = [PaymentContractsProductModel];

      return this.apiClient.callApi(
        '/Payment/Contracts/{paymentContractId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Payment/Contracts/{paymentContractId}
     * Delete payment contract
     * @param {String} paymentContractId Payment contract id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentContractsProductModel>}
     */
    paymentContractsPaymentContractIdDelete(paymentContractId) {
      return this.paymentContractsPaymentContractIdDeleteWithHttpInfo(paymentContractId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Contracts/{paymentContractId}/PaymentMethods
     * Get available payment methods for given contract
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */
    paymentContractsPaymentContractIdPaymentMethodsGetWithHttpInfo(paymentContractId) {
      let postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsPaymentContractIdPaymentMethodsGet");
      }


      let pathParams = {
        'paymentContractId': paymentContractId
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
      let returnType = ['String'];

      return this.apiClient.callApi(
        '/Payment/Contracts/{paymentContractId}/PaymentMethods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Contracts/{paymentContractId}/PaymentMethods
     * Get available payment methods for given contract
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    paymentContractsPaymentContractIdPaymentMethodsGet(paymentContractId) {
      return this.paymentContractsPaymentContractIdPaymentMethodsGetWithHttpInfo(paymentContractId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Payment/Contracts/{paymentContractId}
     * Update payment contract
     * @param {String} paymentContractId Payment contract id
     * @param {module:model/PaymentContractsDTO} body Payment contract properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
     */
    paymentContractsPaymentContractIdPutWithHttpInfo(paymentContractId, body) {
      let postBody = body;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsPaymentContractIdPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentContractsPaymentContractIdPut");
      }


      let pathParams = {
        'paymentContractId': paymentContractId
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
      let returnType = PaymentContractsProductModel;

      return this.apiClient.callApi(
        '/Payment/Contracts/{paymentContractId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Payment/Contracts/{paymentContractId}
     * Update payment contract
     * @param {String} paymentContractId Payment contract id
     * @param {module:model/PaymentContractsDTO} body Payment contract properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */
    paymentContractsPaymentContractIdPut(paymentContractId, body) {
      return this.paymentContractsPaymentContractIdPutWithHttpInfo(paymentContractId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Contracts/{paymentContractId}/requestId
     * This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsRequestIdResult} and HTTP response
     */
    paymentContractsPaymentContractIdRequestIdPostWithHttpInfo(paymentContractId) {
      let postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsPaymentContractIdRequestIdPost");
      }


      let pathParams = {
        'paymentContractId': paymentContractId
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
      let returnType = PaymentContractsRequestIdResult;

      return this.apiClient.callApi(
        '/Payment/Contracts/{paymentContractId}/requestId', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Contracts/{paymentContractId}/requestId
     * This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsRequestIdResult}
     */
    paymentContractsPaymentContractIdRequestIdPost(paymentContractId) {
      return this.paymentContractsPaymentContractIdRequestIdPostWithHttpInfo(paymentContractId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Contracts
     * Add new contract
     * @param {module:model/PaymentContractsDTO} body Payment contracts properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
     */
    paymentContractsPostWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentContractsPost");
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
      let returnType = PaymentContractsProductModel;

      return this.apiClient.callApi(
        '/Payment/Contracts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Contracts
     * Add new contract
     * @param {module:model/PaymentContractsDTO} body Payment contracts properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */
    paymentContractsPost(body) {
      return this.paymentContractsPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
