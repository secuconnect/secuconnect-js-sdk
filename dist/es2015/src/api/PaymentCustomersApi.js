'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentCustomersDTO = require('../model/PaymentCustomersDTO');

var _PaymentCustomersDTO2 = _interopRequireDefault(_PaymentCustomersDTO);

var _PaymentCustomersList = require('../model/PaymentCustomersList');

var _PaymentCustomersList2 = _interopRequireDefault(_PaymentCustomersList);

var _PaymentCustomersProductModel = require('../model/PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PaymentCustomers service.
* @module api/PaymentCustomersApi
*/
var PaymentCustomersApi = function () {

  /**
  * Constructs a new PaymentCustomersApi. 
  * @alias module:api/PaymentCustomersApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentCustomersApi(apiClient) {
    _classCallCheck(this, PaymentCustomersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
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


  _createClass(PaymentCustomersApi, [{
    key: 'paymentCustomersGetWithHttpInfo',
    value: function paymentCustomersGetWithHttpInfo(opts) {
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
      var returnType = _PaymentCustomersList2.default;

      return this.apiClient.callApi('/Payment/Customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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

  }, {
    key: 'paymentCustomersGet',
    value: function paymentCustomersGet(opts) {
      return this.paymentCustomersGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Customers/{paymentCustomerId}
     * Get all payment customers
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentCustomersProductModel} and HTTP response
     */

  }, {
    key: 'paymentCustomersGetByIdWithHttpInfo',
    value: function paymentCustomersGetByIdWithHttpInfo(paymentCustomerId) {
      var postBody = null;

      // verify the required parameter 'paymentCustomerId' is set
      if (paymentCustomerId === undefined || paymentCustomerId === null) {
        throw new Error("Missing the required parameter 'paymentCustomerId' when calling paymentCustomersGetById");
      }

      var pathParams = {
        'paymentCustomerId': paymentCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentCustomersProductModel2.default;

      return this.apiClient.callApi('/Payment/Customers/{paymentCustomerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Customers/{paymentCustomerId}
     * Get all payment customers
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersProductModel}
     */

  }, {
    key: 'paymentCustomersGetById',
    value: function paymentCustomersGetById(paymentCustomerId) {
      return this.paymentCustomersGetByIdWithHttpInfo(paymentCustomerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Payment/Customers/{paymentCustomerId}
     * Delete payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentCustomersProductModel>} and HTTP response
     */

  }, {
    key: 'paymentCustomersIdDeleteWithHttpInfo',
    value: function paymentCustomersIdDeleteWithHttpInfo(paymentCustomerId) {
      var postBody = null;

      // verify the required parameter 'paymentCustomerId' is set
      if (paymentCustomerId === undefined || paymentCustomerId === null) {
        throw new Error("Missing the required parameter 'paymentCustomerId' when calling paymentCustomersIdDelete");
      }

      var pathParams = {
        'paymentCustomerId': paymentCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_PaymentCustomersProductModel2.default];

      return this.apiClient.callApi('/Payment/Customers/{paymentCustomerId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Payment/Customers/{paymentCustomerId}
     * Delete payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentCustomersProductModel>}
     */

  }, {
    key: 'paymentCustomersIdDelete',
    value: function paymentCustomersIdDelete(paymentCustomerId) {
      return this.paymentCustomersIdDeleteWithHttpInfo(paymentCustomerId).then(function (response_and_data) {
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

  }, {
    key: 'paymentCustomersIdPutWithHttpInfo',
    value: function paymentCustomersIdPutWithHttpInfo(paymentCustomerId, body) {
      var postBody = body;

      // verify the required parameter 'paymentCustomerId' is set
      if (paymentCustomerId === undefined || paymentCustomerId === null) {
        throw new Error("Missing the required parameter 'paymentCustomerId' when calling paymentCustomersIdPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentCustomersIdPut");
      }

      var pathParams = {
        'paymentCustomerId': paymentCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentCustomersProductModel2.default;

      return this.apiClient.callApi('/Payment/Customers/{paymentCustomerId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Payment/Customers/{paymentCustomerId}
     * Update payment customer
     * @param {String} paymentCustomerId Payment customer id
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersProductModel}
     */

  }, {
    key: 'paymentCustomersIdPut',
    value: function paymentCustomersIdPut(paymentCustomerId, body) {
      return this.paymentCustomersIdPutWithHttpInfo(paymentCustomerId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Customers
     * Add new customer
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentCustomersProductModel} and HTTP response
     */

  }, {
    key: 'paymentCustomersPostWithHttpInfo',
    value: function paymentCustomersPostWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentCustomersPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentCustomersProductModel2.default;

      return this.apiClient.callApi('/Payment/Customers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Customers
     * Add new customer
     * @param {module:model/PaymentCustomersDTO} body Payment customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentCustomersProductModel}
     */

  }, {
    key: 'paymentCustomersPost',
    value: function paymentCustomersPost(body) {
      return this.paymentCustomersPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentCustomersApi;
}();

exports.default = PaymentCustomersApi;