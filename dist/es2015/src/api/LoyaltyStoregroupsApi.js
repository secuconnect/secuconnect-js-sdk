'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyStoregroupsDTO = require('../model/LoyaltyStoregroupsDTO');

var _LoyaltyStoregroupsDTO2 = _interopRequireDefault(_LoyaltyStoregroupsDTO);

var _LoyaltyStoregroupsList = require('../model/LoyaltyStoregroupsList');

var _LoyaltyStoregroupsList2 = _interopRequireDefault(_LoyaltyStoregroupsList);

var _LoyaltyStoregroupsProductModel = require('../model/LoyaltyStoregroupsProductModel');

var _LoyaltyStoregroupsProductModel2 = _interopRequireDefault(_LoyaltyStoregroupsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* LoyaltyStoregroups service.
* @module api/LoyaltyStoregroupsApi
*/
var LoyaltyStoregroupsApi = function () {

  /**
  * Constructs a new LoyaltyStoregroupsApi. 
  * @alias module:api/LoyaltyStoregroupsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoyaltyStoregroupsApi(apiClient) {
    _classCallCheck(this, LoyaltyStoregroupsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Loyalty/Storegroups
   * Add new loyalty store group
   * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsProductModel} and HTTP response
   */


  _createClass(LoyaltyStoregroupsApi, [{
    key: 'addStoreGroupWithHttpInfo',
    value: function addStoreGroupWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addStoreGroup");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyStoregroupsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Storegroups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Storegroups
     * Add new loyalty store group
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsProductModel}
     */

  }, {
    key: 'addStoreGroup',
    value: function addStoreGroup(body) {
      return this.addStoreGroupWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/StoreGroups
     * Get a list of loyalty store groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsList} and HTTP response
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
      var returnType = _LoyaltyStoregroupsList2.default;

      return this.apiClient.callApi('/Loyalty/StoreGroups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/StoreGroups
     * Get a list of loyalty store groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Get loyalty store group for a specific id
     * @param {String} loyaltyStoreGroupId loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(loyaltyStoreGroupId) {
      var postBody = null;

      // verify the required parameter 'loyaltyStoreGroupId' is set
      if (loyaltyStoreGroupId === undefined || loyaltyStoreGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyStoreGroupId' when calling getOne");
      }

      var pathParams = {
        'loyaltyStoreGroupId': loyaltyStoreGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyStoregroupsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/StoreGroups/{loyaltyStoreGroupId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Get loyalty store group for a specific id
     * @param {String} loyaltyStoreGroupId loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(loyaltyStoreGroupId) {
      return this.getOneWithHttpInfo(loyaltyStoreGroupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Remove loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoyaltyStoregroupsProductModel>} and HTTP response
     */

  }, {
    key: 'removeStoreGroupWithHttpInfo',
    value: function removeStoreGroupWithHttpInfo(loyaltyStoreGroupId) {
      var postBody = null;

      // verify the required parameter 'loyaltyStoreGroupId' is set
      if (loyaltyStoreGroupId === undefined || loyaltyStoreGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyStoreGroupId' when calling removeStoreGroup");
      }

      var pathParams = {
        'loyaltyStoreGroupId': loyaltyStoreGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_LoyaltyStoregroupsProductModel2.default];

      return this.apiClient.callApi('/Loyalty/StoreGroups/{loyaltyStoreGroupId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Remove loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoyaltyStoregroupsProductModel>}
     */

  }, {
    key: 'removeStoreGroup',
    value: function removeStoreGroup(loyaltyStoreGroupId) {
      return this.removeStoreGroupWithHttpInfo(loyaltyStoreGroupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Update loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsProductModel} and HTTP response
     */

  }, {
    key: 'updateStoreGroupWithHttpInfo',
    value: function updateStoreGroupWithHttpInfo(loyaltyStoreGroupId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyStoreGroupId' is set
      if (loyaltyStoreGroupId === undefined || loyaltyStoreGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyStoreGroupId' when calling updateStoreGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStoreGroup");
      }

      var pathParams = {
        'loyaltyStoreGroupId': loyaltyStoreGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyStoregroupsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/StoreGroups/{loyaltyStoreGroupId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Update loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsProductModel}
     */

  }, {
    key: 'updateStoreGroup',
    value: function updateStoreGroup(loyaltyStoreGroupId, body) {
      return this.updateStoreGroupWithHttpInfo(loyaltyStoreGroupId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoyaltyStoregroupsApi;
}();

exports.default = LoyaltyStoregroupsApi;