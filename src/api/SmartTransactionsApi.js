
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SmartTransactionsDTO from '../model/SmartTransactionsDTO';
import SmartTransactionsList from '../model/SmartTransactionsList';
import SmartTransactionsPreTransactionModel from '../model/SmartTransactionsPreTransactionModel';
import SmartTransactionsProductModel from '../model/SmartTransactionsProductModel';

/**
* SmartTransactions service.
* @module api/SmartTransactionsApi
* @version 2.0.0
*/
export default class SmartTransactionsApi {

    /**
    * Constructs a new SmartTransactionsApi. 
    * @alias module:api/SmartTransactionsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Smart/Transactions
     * Create new smart transaction
     * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    addTransactionWithHttpInfo(smartTransactionProperties) {
      let postBody = smartTransactionProperties;

      // verify the required parameter 'smartTransactionProperties' is set
      if (smartTransactionProperties === undefined || smartTransactionProperties === null) {
        throw new Error("Missing the required parameter 'smartTransactionProperties' when calling addTransaction");
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions
     * Create new smart transaction
     * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    addTransaction(smartTransactionProperties) {
      return this.addTransactionWithHttpInfo(smartTransactionProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Transactions/{smartTransactionId}/cancel
     * Method to cancel the transaction with given idn
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    cancelTransactionWithHttpInfo(smartTransactionId) {
      let postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling cancelTransaction");
      }


      let pathParams = {
        'smartTransactionId': smartTransactionId
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartTransactionId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/cancel
     * Method to cancel the transaction with given idn
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    cancelTransaction(smartTransactionId) {
      return this.cancelTransactionWithHttpInfo(smartTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Transactions/{smartTransactionId}/canceltrx
     * Starts Cancel &#39;Cash&#39; transaction on Terminal with &#39;receipt_number&#39; (&#39;Beleg-Nr.&#39;)
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    cancelTrxWithHttpInfo(smartTransactionId) {
      let postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling cancelTrx");
      }


      let pathParams = {
        'smartTransactionId': smartTransactionId
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartTransactionId}/canceltrx', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/canceltrx
     * Starts Cancel &#39;Cash&#39; transaction on Terminal with &#39;receipt_number&#39; (&#39;Beleg-Nr.&#39;)
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    cancelTrx(smartTransactionId) {
      return this.cancelTrxWithHttpInfo(smartTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Transactions/{smartDeviceId}/diagnosis
     * Starts extended Diagnose on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    diagnoseWithHttpInfo(smartDeviceId) {
      let postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling diagnose");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartDeviceId}/diagnosis', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions/{smartDeviceId}/diagnosis
     * Starts extended Diagnose on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    diagnose(smartDeviceId) {
      return this.diagnoseWithHttpInfo(smartDeviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Smart/Transactions
     * Get a list of smart transactions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsList} and HTTP response
     */
    getAllWithHttpInfo(opts) {
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
      let returnType = SmartTransactionsList;

      return this.apiClient.callApi(
        '/Smart/Transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Smart/Transactions
     * Get a list of smart transactions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsList}
     */
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Smart/Transactions/{smartTransactionId}
     * Get one smart transaction for a specific id
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    getOneWithHttpInfo(smartTransactionId) {
      let postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling getOne");
      }


      let pathParams = {
        'smartTransactionId': smartTransactionId
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartTransactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Smart/Transactions/{smartTransactionId}
     * Get one smart transaction for a specific id
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    getOne(smartTransactionId) {
      return this.getOneWithHttpInfo(smartTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Transactions/{smartTransactionId}/PreTransaction
     * Function that checks balance of merchantcard from ident and if possible creates bonus product items for basket
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsPreTransactionModel} and HTTP response
     */
    preTransactionWithHttpInfo(smartTransactionId) {
      let postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling preTransaction");
      }


      let pathParams = {
        'smartTransactionId': smartTransactionId
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
      let returnType = SmartTransactionsPreTransactionModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartTransactionId}/PreTransaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/PreTransaction
     * Function that checks balance of merchantcard from ident and if possible creates bonus product items for basket
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsPreTransactionModel}
     */
    preTransaction(smartTransactionId) {
      return this.preTransactionWithHttpInfo(smartTransactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Transactions/{smartDeviceId}/endOfDay
     * Starts End of Day Report on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    startEndOfDayReportWithHttpInfo(smartDeviceId) {
      let postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling startEndOfDayReport");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartDeviceId}/endOfDay', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions/{smartDeviceId}/endOfDay
     * Starts End of Day Report on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    startEndOfDayReport(smartDeviceId) {
      return this.startEndOfDayReportWithHttpInfo(smartDeviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Transactions/{smartTransactionId}/start/{paymentMethod}
     * Start smart transaction with given payment method
     * @param {String} smartTransactionId Smart transaction id
     * @param {String} paymentMethod Payment method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    startTransactionWithHttpInfo(smartTransactionId, paymentMethod) {
      let postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling startTransaction");
      }

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling startTransaction");
      }


      let pathParams = {
        'smartTransactionId': smartTransactionId,
        'paymentMethod': paymentMethod
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartTransactionId}/start/{paymentMethod}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/start/{paymentMethod}
     * Start smart transaction with given payment method
     * @param {String} smartTransactionId Smart transaction id
     * @param {String} paymentMethod Payment method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    startTransaction(smartTransactionId, paymentMethod) {
      return this.startTransactionWithHttpInfo(smartTransactionId, paymentMethod)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Smart/Transactions/{smartTransactionId}
     * Update smart transaction
     * @param {String} smartTransactionId Smart transaction id
     * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */
    updateTransactionWithHttpInfo(smartTransactionId, smartTransactionProperties) {
      let postBody = smartTransactionProperties;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling updateTransaction");
      }

      // verify the required parameter 'smartTransactionProperties' is set
      if (smartTransactionProperties === undefined || smartTransactionProperties === null) {
        throw new Error("Missing the required parameter 'smartTransactionProperties' when calling updateTransaction");
      }


      let pathParams = {
        'smartTransactionId': smartTransactionId
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
      let returnType = SmartTransactionsProductModel;

      return this.apiClient.callApi(
        '/Smart/Transactions/{smartTransactionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Smart/Transactions/{smartTransactionId}
     * Update smart transaction
     * @param {String} smartTransactionId Smart transaction id
     * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */
    updateTransaction(smartTransactionId, smartTransactionProperties) {
      return this.updateTransactionWithHttpInfo(smartTransactionId, smartTransactionProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
