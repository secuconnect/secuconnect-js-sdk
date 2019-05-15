'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentContractsDTO = require('../model/PaymentContractsDTO');

var _PaymentContractsDTO2 = _interopRequireDefault(_PaymentContractsDTO);

var _PaymentContractsDTOClone = require('../model/PaymentContractsDTOClone');

var _PaymentContractsDTOClone2 = _interopRequireDefault(_PaymentContractsDTOClone);

var _PaymentContractsDTORequestId = require('../model/PaymentContractsDTORequestId');

var _PaymentContractsDTORequestId2 = _interopRequireDefault(_PaymentContractsDTORequestId);

var _PaymentContractsList = require('../model/PaymentContractsList');

var _PaymentContractsList2 = _interopRequireDefault(_PaymentContractsList);

var _PaymentContractsProductModel = require('../model/PaymentContractsProductModel');

var _PaymentContractsProductModel2 = _interopRequireDefault(_PaymentContractsProductModel);

var _PaymentContractsRequestIdResult = require('../model/PaymentContractsRequestIdResult');

var _PaymentContractsRequestIdResult2 = _interopRequireDefault(_PaymentContractsRequestIdResult);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PaymentContracts service.
* @module api/PaymentContractsApi
*/
var PaymentContractsApi = function () {

  /**
  * Constructs a new PaymentContractsApi. 
  * @alias module:api/PaymentContractsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentContractsApi(apiClient) {
    _classCallCheck(this, PaymentContractsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/Contracts/{paymentContractId}/clone
   * Clone an existing payment contract
   * @param {String} paymentContractId Contract identifier
   * @param {module:model/PaymentContractsDTOClone} body Payment contract clone properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
   */


  _createClass(PaymentContractsApi, [{
    key: 'cloneWithHttpInfo',
    value: function cloneWithHttpInfo(paymentContractId, body) {
      var postBody = body;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling clone");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling clone");
      }

      var pathParams = {
        'paymentContractId': paymentContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContractsProductModel2.default;

      return this.apiClient.callApi('/Payment/Contracts/{paymentContractId}/clone', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Contracts/{paymentContractId}/clone
     * Clone an existing payment contract
     * @param {String} paymentContractId Contract identifier
     * @param {module:model/PaymentContractsDTOClone} body Payment contract clone properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */

  }, {
    key: 'clone',
    value: function clone(paymentContractId, body) {
      return this.cloneWithHttpInfo(paymentContractId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
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

  }, {
    key: 'paymentContractsGetWithHttpInfo',
    value: function paymentContractsGetWithHttpInfo(opts) {
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
      var returnType = _PaymentContractsList2.default;

      return this.apiClient.callApi('/Payment/Contracts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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

  }, {
    key: 'paymentContractsGet',
    value: function paymentContractsGet(opts) {
      return this.paymentContractsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Contracts/{paymentContractId}
     * Get all payment contracts
     * @param {String} paymentContractId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
     */

  }, {
    key: 'paymentContractsGetByIdWithHttpInfo',
    value: function paymentContractsGetByIdWithHttpInfo(paymentContractId) {
      var postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsGetById");
      }

      var pathParams = {
        'paymentContractId': paymentContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContractsProductModel2.default;

      return this.apiClient.callApi('/Payment/Contracts/{paymentContractId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Contracts/{paymentContractId}
     * Get all payment contracts
     * @param {String} paymentContractId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */

  }, {
    key: 'paymentContractsGetById',
    value: function paymentContractsGetById(paymentContractId) {
      return this.paymentContractsGetByIdWithHttpInfo(paymentContractId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Payment/Contracts/{paymentContractId}
     * Delete payment contract
     * @param {String} paymentContractId Payment contract id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentContractsProductModel>} and HTTP response
     */

  }, {
    key: 'paymentContractsIdDeleteWithHttpInfo',
    value: function paymentContractsIdDeleteWithHttpInfo(paymentContractId) {
      var postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsIdDelete");
      }

      var pathParams = {
        'paymentContractId': paymentContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_PaymentContractsProductModel2.default];

      return this.apiClient.callApi('/Payment/Contracts/{paymentContractId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Payment/Contracts/{paymentContractId}
     * Delete payment contract
     * @param {String} paymentContractId Payment contract id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentContractsProductModel>}
     */

  }, {
    key: 'paymentContractsIdDelete',
    value: function paymentContractsIdDelete(paymentContractId) {
      return this.paymentContractsIdDeleteWithHttpInfo(paymentContractId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Contracts/{paymentContractId}/paymentMethods
     * Get available payment methods for given contract
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */

  }, {
    key: 'paymentContractsIdPaymentMethodsGetWithHttpInfo',
    value: function paymentContractsIdPaymentMethodsGetWithHttpInfo(paymentContractId) {
      var postBody = null;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsIdPaymentMethodsGet");
      }

      var pathParams = {
        'paymentContractId': paymentContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ['String'];

      return this.apiClient.callApi('/Payment/Contracts/{paymentContractId}/paymentMethods', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Contracts/{paymentContractId}/paymentMethods
     * Get available payment methods for given contract
     * @param {String} paymentContractId Contract identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */

  }, {
    key: 'paymentContractsIdPaymentMethodsGet',
    value: function paymentContractsIdPaymentMethodsGet(paymentContractId) {
      return this.paymentContractsIdPaymentMethodsGetWithHttpInfo(paymentContractId).then(function (response_and_data) {
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

  }, {
    key: 'paymentContractsIdPutWithHttpInfo',
    value: function paymentContractsIdPutWithHttpInfo(paymentContractId, body) {
      var postBody = body;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling paymentContractsIdPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentContractsIdPut");
      }

      var pathParams = {
        'paymentContractId': paymentContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContractsProductModel2.default;

      return this.apiClient.callApi('/Payment/Contracts/{paymentContractId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Payment/Contracts/{paymentContractId}
     * Update payment contract
     * @param {String} paymentContractId Payment contract id
     * @param {module:model/PaymentContractsDTO} body Payment contract properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */

  }, {
    key: 'paymentContractsIdPut',
    value: function paymentContractsIdPut(paymentContractId, body) {
      return this.paymentContractsIdPutWithHttpInfo(paymentContractId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Contracts
     * Add new contract
     * @param {module:model/PaymentContractsDTO} body Payment contracts properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsProductModel} and HTTP response
     */

  }, {
    key: 'paymentContractsPostWithHttpInfo',
    value: function paymentContractsPostWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentContractsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContractsProductModel2.default;

      return this.apiClient.callApi('/Payment/Contracts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Contracts
     * Add new contract
     * @param {module:model/PaymentContractsDTO} body Payment contracts properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsProductModel}
     */

  }, {
    key: 'paymentContractsPost',
    value: function paymentContractsPost(body) {
      return this.paymentContractsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Contracts/{paymentContractId}/requestId
     * This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))
     * @param {String} paymentContractId Contract identifier of the parent
     * @param {module:model/PaymentContractsDTORequestId} body Payment contract request id properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContractsRequestIdResult} and HTTP response
     */

  }, {
    key: 'requestIdWithHttpInfo',
    value: function requestIdWithHttpInfo(paymentContractId, body) {
      var postBody = body;

      // verify the required parameter 'paymentContractId' is set
      if (paymentContractId === undefined || paymentContractId === null) {
        throw new Error("Missing the required parameter 'paymentContractId' when calling requestId");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling requestId");
      }

      var pathParams = {
        'paymentContractId': paymentContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContractsRequestIdResult2.default;

      return this.apiClient.callApi('/Payment/Contracts/{paymentContractId}/requestId', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Contracts/{paymentContractId}/requestId
     * This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))
     * @param {String} paymentContractId Contract identifier of the parent
     * @param {module:model/PaymentContractsDTORequestId} body Payment contract request id properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContractsRequestIdResult}
     */

  }, {
    key: 'requestId',
    value: function requestId(paymentContractId, body) {
      return this.requestIdWithHttpInfo(paymentContractId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentContractsApi;
}();

exports.default = PaymentContractsApi;