'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _SmartTransactionsDTO = require('../model/SmartTransactionsDTO');

var _SmartTransactionsDTO2 = _interopRequireDefault(_SmartTransactionsDTO);

var _SmartTransactionsList = require('../model/SmartTransactionsList');

var _SmartTransactionsList2 = _interopRequireDefault(_SmartTransactionsList);

var _SmartTransactionsPreTransactionModel = require('../model/SmartTransactionsPreTransactionModel');

var _SmartTransactionsPreTransactionModel2 = _interopRequireDefault(_SmartTransactionsPreTransactionModel);

var _SmartTransactionsPrepare = require('../model/SmartTransactionsPrepare');

var _SmartTransactionsPrepare2 = _interopRequireDefault(_SmartTransactionsPrepare);

var _SmartTransactionsProductModel = require('../model/SmartTransactionsProductModel');

var _SmartTransactionsProductModel2 = _interopRequireDefault(_SmartTransactionsProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* SmartTransactions service.
* @module api/SmartTransactionsApi
*/
var SmartTransactionsApi = function () {

  /**
  * Constructs a new SmartTransactionsApi. 
  * @alias module:api/SmartTransactionsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SmartTransactionsApi(apiClient) {
    _classCallCheck(this, SmartTransactionsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Smart/Transactions
   * Create new smart transaction
   * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
   */


  _createClass(SmartTransactionsApi, [{
    key: 'addTransactionWithHttpInfo',
    value: function addTransactionWithHttpInfo(smartTransactionProperties) {
      var postBody = smartTransactionProperties;

      // verify the required parameter 'smartTransactionProperties' is set
      if (smartTransactionProperties === undefined || smartTransactionProperties === null) {
        throw new Error("Missing the required parameter 'smartTransactionProperties' when calling addTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions
     * Create new smart transaction
     * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'addTransaction',
    value: function addTransaction(smartTransactionProperties) {
      return this.addTransactionWithHttpInfo(smartTransactionProperties).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/cancel
     * Method to cancel the transaction with given idn
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'cancelTransactionWithHttpInfo',
    value: function cancelTransactionWithHttpInfo(smartTransactionId) {
      var postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling cancelTransaction");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/cancel
     * Method to cancel the transaction with given idn
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'cancelTransaction',
    value: function cancelTransaction(smartTransactionId) {
      return this.cancelTransactionWithHttpInfo(smartTransactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/canceltrx
     * Starts Cancel &#39;Cash&#39; transaction on Terminal with &#39;receipt_number&#39; (&#39;Beleg-Nr.&#39;)
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'cancelTrxWithHttpInfo',
    value: function cancelTrxWithHttpInfo(smartTransactionId) {
      var postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling cancelTrx");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}/canceltrx', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/canceltrx
     * Starts Cancel &#39;Cash&#39; transaction on Terminal with &#39;receipt_number&#39; (&#39;Beleg-Nr.&#39;)
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'cancelTrx',
    value: function cancelTrx(smartTransactionId) {
      return this.cancelTrxWithHttpInfo(smartTransactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Transactions/{smartDeviceId}/diagnosis
     * Starts extended Diagnose on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'diagnoseWithHttpInfo',
    value: function diagnoseWithHttpInfo(smartDeviceId) {
      var postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling diagnose");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartDeviceId}/diagnosis', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/{smartDeviceId}/diagnosis
     * Starts extended Diagnose on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'diagnose',
    value: function diagnose(smartDeviceId) {
      return this.diagnoseWithHttpInfo(smartDeviceId).then(function (response_and_data) {
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

  }, {
    key: 'getAllWithHttpInfo',
    value: function getAllWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'count': opts['count'],
        'offset': opts['offset'],
        'fields': opts['fields'],
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsList2.default;

      return this.apiClient.callApi('/Smart/Transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Smart/Transactions/{smartTransactionId}
     * Get one smart transaction for a specific id
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(smartTransactionId) {
      var postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling getOne");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Smart/Transactions/{smartTransactionId}
     * Get one smart transaction for a specific id
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(smartTransactionId) {
      return this.getOneWithHttpInfo(smartTransactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/preTransaction
     * Function that checks balance of merchantcard from ident and if possible creates bonus product items for basket
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsPreTransactionModel} and HTTP response
     */

  }, {
    key: 'preTransactionWithHttpInfo',
    value: function preTransactionWithHttpInfo(smartTransactionId) {
      var postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling preTransaction");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsPreTransactionModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}/preTransaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/preTransaction
     * Function that checks balance of merchantcard from ident and if possible creates bonus product items for basket
     * @param {String} smartTransactionId Smart transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsPreTransactionModel}
     */

  }, {
    key: 'preTransaction',
    value: function preTransaction(smartTransactionId) {
      return this.preTransactionWithHttpInfo(smartTransactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Transactions/stx_xxx/prepare
     * Create and score payment transaction assigned to given smart transaction
     * @param {String} smartTransactionId Smart transaction id
     * @param {module:model/SmartTransactionsPrepare} body Information which customer and container will be used to this operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'prepareWithHttpInfo',
    value: function prepareWithHttpInfo(smartTransactionId, body) {
      var postBody = body;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling prepare");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling prepare");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}/prepare', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/stx_xxx/prepare
     * Create and score payment transaction assigned to given smart transaction
     * @param {String} smartTransactionId Smart transaction id
     * @param {module:model/SmartTransactionsPrepare} body Information which customer and container will be used to this operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'prepare',
    value: function prepare(smartTransactionId, body) {
      return this.prepareWithHttpInfo(smartTransactionId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Transactions/{smartDeviceId}/endOfDay
     * Starts End of Day Report on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'startEndOfDayReportWithHttpInfo',
    value: function startEndOfDayReportWithHttpInfo(smartDeviceId) {
      var postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling startEndOfDayReport");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartDeviceId}/endOfDay', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/{smartDeviceId}/endOfDay
     * Starts End of Day Report on Terminal, this method is normally called by SDK&#39;s from cash register
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'startEndOfDayReport',
    value: function startEndOfDayReport(smartDeviceId) {
      return this.startEndOfDayReportWithHttpInfo(smartDeviceId).then(function (response_and_data) {
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

  }, {
    key: 'startTransactionWithHttpInfo',
    value: function startTransactionWithHttpInfo(smartTransactionId, paymentMethod) {
      var postBody = null;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling startTransaction");
      }

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling startTransaction");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId,
        'paymentMethod': paymentMethod
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}/start/{paymentMethod}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Transactions/{smartTransactionId}/start/{paymentMethod}
     * Start smart transaction with given payment method
     * @param {String} smartTransactionId Smart transaction id
     * @param {String} paymentMethod Payment method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'startTransaction',
    value: function startTransaction(smartTransactionId, paymentMethod) {
      return this.startTransactionWithHttpInfo(smartTransactionId, paymentMethod).then(function (response_and_data) {
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

  }, {
    key: 'updateTransactionWithHttpInfo',
    value: function updateTransactionWithHttpInfo(smartTransactionId, smartTransactionProperties) {
      var postBody = smartTransactionProperties;

      // verify the required parameter 'smartTransactionId' is set
      if (smartTransactionId === undefined || smartTransactionId === null) {
        throw new Error("Missing the required parameter 'smartTransactionId' when calling updateTransaction");
      }

      // verify the required parameter 'smartTransactionProperties' is set
      if (smartTransactionProperties === undefined || smartTransactionProperties === null) {
        throw new Error("Missing the required parameter 'smartTransactionProperties' when calling updateTransaction");
      }

      var pathParams = {
        'smartTransactionId': smartTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartTransactionsProductModel2.default;

      return this.apiClient.callApi('/Smart/Transactions/{smartTransactionId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Smart/Transactions/{smartTransactionId}
     * Update smart transaction
     * @param {String} smartTransactionId Smart transaction id
     * @param {module:model/SmartTransactionsDTO} smartTransactionProperties Smart transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartTransactionsProductModel}
     */

  }, {
    key: 'updateTransaction',
    value: function updateTransaction(smartTransactionId, smartTransactionProperties) {
      return this.updateTransactionWithHttpInfo(smartTransactionId, smartTransactionProperties).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SmartTransactionsApi;
}();

exports.default = SmartTransactionsApi;