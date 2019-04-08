'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GeneralMerchantsDTO = require('../model/GeneralMerchantsDTO');

var _GeneralMerchantsDTO2 = _interopRequireDefault(_GeneralMerchantsDTO);

var _GeneralMerchantsList = require('../model/GeneralMerchantsList');

var _GeneralMerchantsList2 = _interopRequireDefault(_GeneralMerchantsList);

var _GeneralMerchantsProductModel = require('../model/GeneralMerchantsProductModel');

var _GeneralMerchantsProductModel2 = _interopRequireDefault(_GeneralMerchantsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* GeneralMerchants service.
* @module api/GeneralMerchantsApi
*/
var GeneralMerchantsApi = function () {

  /**
  * Constructs a new GeneralMerchantsApi. 
  * @alias module:api/GeneralMerchantsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GeneralMerchantsApi(apiClient) {
    _classCallCheck(this, GeneralMerchantsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST General/Merchants
   * Add a new merchant
   * @param {module:model/GeneralMerchantsDTO} body general Merchant container properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsProductModel} and HTTP response
   */


  _createClass(GeneralMerchantsApi, [{
    key: 'addMerchantsWithHttpInfo',
    value: function addMerchantsWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addMerchants");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _GeneralMerchantsProductModel2.default;

      return this.apiClient.callApi('/General/Merchants', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST General/Merchants
     * Add a new merchant
     * @param {module:model/GeneralMerchantsDTO} body general Merchant container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsProductModel}
     */

  }, {
    key: 'addMerchants',
    value: function addMerchants(body) {
      return this.addMerchantsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET General/Merchants
     * Get a list of general merchants
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsList} and HTTP response
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
      var returnType = _GeneralMerchantsList2.default;

      return this.apiClient.callApi('/General/Merchants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET General/Merchants
     * Get a list of general merchants
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET General/Merchants/{generalMerchantId}
     * Get one general merchant for a specific id
     * @param {String} generalMerchantId General merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(generalMerchantId) {
      var postBody = null;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling getOne");
      }

      var pathParams = {
        'generalMerchantId': generalMerchantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _GeneralMerchantsProductModel2.default;

      return this.apiClient.callApi('/General/Merchants/{generalMerchantId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET General/Merchants/{generalMerchantId}
     * Get one general merchant for a specific id
     * @param {String} generalMerchantId General merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(generalMerchantId) {
      return this.getOneWithHttpInfo(generalMerchantId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT General/Merchants/{generalMerchantId}
     * Update general merchant
     * @param {String} generalMerchantId General merchant id
     * @param {module:model/GeneralMerchantsDTO} body General merchant properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsProductModel} and HTTP response
     */

  }, {
    key: 'updateMerchantWithHttpInfo',
    value: function updateMerchantWithHttpInfo(generalMerchantId, body) {
      var postBody = body;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling updateMerchant");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMerchant");
      }

      var pathParams = {
        'generalMerchantId': generalMerchantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _GeneralMerchantsProductModel2.default;

      return this.apiClient.callApi('/General/Merchants/{generalMerchantId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT General/Merchants/{generalMerchantId}
     * Update general merchant
     * @param {String} generalMerchantId General merchant id
     * @param {module:model/GeneralMerchantsDTO} body General merchant properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsProductModel}
     */

  }, {
    key: 'updateMerchant',
    value: function updateMerchant(generalMerchantId, body) {
      return this.updateMerchantWithHttpInfo(generalMerchantId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GeneralMerchantsApi;
}();

exports.default = GeneralMerchantsApi;