'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentTransactionCancelDTO = require('../model/PaymentTransactionCancelDTO');

var _PaymentTransactionCancelDTO2 = _interopRequireDefault(_PaymentTransactionCancelDTO);

var _PaymentTransactionsList = require('../model/PaymentTransactionsList');

var _PaymentTransactionsList2 = _interopRequireDefault(_PaymentTransactionsList);

var _PaymentTransactionsProductModel = require('../model/PaymentTransactionsProductModel');

var _PaymentTransactionsProductModel2 = _interopRequireDefault(_PaymentTransactionsProductModel);

var _PaymentTransactionsShippingUrl = require('../model/PaymentTransactionsShippingUrl');

var _PaymentTransactionsShippingUrl2 = _interopRequireDefault(_PaymentTransactionsShippingUrl);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PaymentTransactions service.
* @module api/PaymentTransactionsApi
*/
var PaymentTransactionsApi = function () {

  /**
  * Constructs a new PaymentTransactionsApi. 
  * @alias module:api/PaymentTransactionsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentTransactionsApi(apiClient) {
    _classCallCheck(this, PaymentTransactionsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/Transactions/{paymentTransactionId}/cancel
   * Cancel a payment transaction
   * @param {String} paymentTransactionId Payment transaction id
   * @param {Object} opts Optional parameters
   * @param {module:model/PaymentTransactionCancelDTO} opts.body Cancel payment transaction input properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentTransactionsProductModel>} and HTTP response
   */


  _createClass(PaymentTransactionsApi, [{
    key: 'cancelWithHttpInfo',
    value: function cancelWithHttpInfo(paymentTransactionId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling cancel");
      }

      var pathParams = {
        'paymentTransactionId': paymentTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_PaymentTransactionsProductModel2.default];

      return this.apiClient.callApi('/Payment/Transactions/{paymentTransactionId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Transactions/{paymentTransactionId}/cancel
     * Cancel a payment transaction
     * @param {String} paymentTransactionId Payment transaction id
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentTransactionCancelDTO} opts.body Cancel payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentTransactionsProductModel>}
     */

  }, {
    key: 'cancel',
    value: function cancel(paymentTransactionId, opts) {
      return this.cancelWithHttpInfo(paymentTransactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
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
      var returnType = _PaymentTransactionsList2.default;

      return this.apiClient.callApi('/Payment/Transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Transactions/{paymentTransactionId}
     * Get all payment transactions
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(paymentTransactionId) {
      var postBody = null;

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling getOne");
      }

      var pathParams = {
        'paymentTransactionId': paymentTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentTransactionsProductModel2.default;

      return this.apiClient.callApi('/Payment/Transactions/{paymentTransactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Transactions/{paymentTransactionId}
     * Get all payment transactions
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTransactionsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(paymentTransactionId) {
      return this.getOneWithHttpInfo(paymentTransactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Transactions/{paymentTransactionId}/shippingUrl
     * Get the url where you can fill the shipping information
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTransactionsShippingUrl} and HTTP response
     */

  }, {
    key: 'getShippingUrlWithHttpInfo',
    value: function getShippingUrlWithHttpInfo(paymentTransactionId) {
      var postBody = null;

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling getShippingUrl");
      }

      var pathParams = {
        'paymentTransactionId': paymentTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentTransactionsShippingUrl2.default;

      return this.apiClient.callApi('/Payment/Transactions/{paymentTransactionId}/shippingUrl', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Transactions/{paymentTransactionId}/shippingUrl
     * Get the url where you can fill the shipping information
     * @param {String} paymentTransactionId Payment transaction id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTransactionsShippingUrl}
     */

  }, {
    key: 'getShippingUrl',
    value: function getShippingUrl(paymentTransactionId) {
      return this.getShippingUrlWithHttpInfo(paymentTransactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Transactions/{paymentTransactionId}/revokeAccrual
     * Revoke the accrual flag of a payment transaction
     * @param {String} paymentTransactionId Payment transaction id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Reverse accrual input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTransactionsProductModel} and HTTP response
     */

  }, {
    key: 'revokeAccrualWithHttpInfo',
    value: function revokeAccrualWithHttpInfo(paymentTransactionId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'paymentTransactionId' is set
      if (paymentTransactionId === undefined || paymentTransactionId === null) {
        throw new Error("Missing the required parameter 'paymentTransactionId' when calling revokeAccrual");
      }

      var pathParams = {
        'paymentTransactionId': paymentTransactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentTransactionsProductModel2.default;

      return this.apiClient.callApi('/Payment/Transactions/{paymentTransactionId}/revokeAccrual', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Transactions/{paymentTransactionId}/revokeAccrual
     * Revoke the accrual flag of a payment transaction
     * @param {String} paymentTransactionId Payment transaction id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Reverse accrual input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTransactionsProductModel}
     */

  }, {
    key: 'revokeAccrual',
    value: function revokeAccrual(paymentTransactionId, opts) {
      return this.revokeAccrualWithHttpInfo(paymentTransactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentTransactionsApi;
}();

exports.default = PaymentTransactionsApi;