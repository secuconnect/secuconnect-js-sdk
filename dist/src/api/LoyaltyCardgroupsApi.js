'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardgroupsDTO = require('../model/LoyaltyCardgroupsDTO');

var _LoyaltyCardgroupsDTO2 = _interopRequireDefault(_LoyaltyCardgroupsDTO);

var _LoyaltyCardgroupsDTOCheckPasscodeEnabled = require('../model/LoyaltyCardgroupsDTOCheckPasscodeEnabled');

var _LoyaltyCardgroupsDTOCheckPasscodeEnabled2 = _interopRequireDefault(_LoyaltyCardgroupsDTOCheckPasscodeEnabled);

var _LoyaltyCardgroupsList = require('../model/LoyaltyCardgroupsList');

var _LoyaltyCardgroupsList2 = _interopRequireDefault(_LoyaltyCardgroupsList);

var _LoyaltyCardgroupsProductModel = require('../model/LoyaltyCardgroupsProductModel');

var _LoyaltyCardgroupsProductModel2 = _interopRequireDefault(_LoyaltyCardgroupsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* LoyaltyCardgroups service.
* @module api/LoyaltyCardgroupsApi
*/
var LoyaltyCardgroupsApi = function () {

  /**
  * Constructs a new LoyaltyCardgroupsApi. 
  * @alias module:api/LoyaltyCardgroupsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoyaltyCardgroupsApi(apiClient) {
    _classCallCheck(this, LoyaltyCardgroupsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Loyalty/Cardgroups
   * Add loyalty card group
   * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsProductModel} and HTTP response
   */


  _createClass(LoyaltyCardgroupsApi, [{
    key: 'addCardGroupWithHttpInfo',
    value: function addCardGroupWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCardGroup");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCardgroupsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Cardgroups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Cardgroups
     * Add loyalty card group
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsProductModel}
     */

  }, {
    key: 'addCardGroup',
    value: function addCardGroup(body) {
      return this.addCardGroupWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled
     * Check whether passcode check is enabled
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {Object} opts Optional parameters
     * @param {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} opts.body Check passcode details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'checkPassCodeEnabledWithHttpInfo',
    value: function checkPassCodeEnabledWithHttpInfo(loyaltyCardGroupId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling checkPassCodeEnabled");
      }

      var pathParams = {
        'loyaltyCardGroupId': loyaltyCardGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled
     * Check whether passcode check is enabled
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {Object} opts Optional parameters
     * @param {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} opts.body Check passcode details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'checkPassCodeEnabled',
    value: function checkPassCodeEnabled(loyaltyCardGroupId, opts) {
      return this.checkPassCodeEnabledWithHttpInfo(loyaltyCardGroupId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Cardgroups
     * Get a list of loyalty card groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsList} and HTTP response
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
      var returnType = _LoyaltyCardgroupsList2.default;

      return this.apiClient.callApi('/Loyalty/Cardgroups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Cardgroups
     * Get a list of loyalty card groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Get loyalty card group for a specific id
     * @param {String} loyaltyCardGroupId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(loyaltyCardGroupId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling getOne");
      }

      var pathParams = {
        'loyaltyCardGroupId': loyaltyCardGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCardgroupsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Cardgroups/{loyaltyCardGroupId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Get loyalty card group for a specific id
     * @param {String} loyaltyCardGroupId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(loyaltyCardGroupId) {
      return this.getOneWithHttpInfo(loyaltyCardGroupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsProductModel} and HTTP response
     */

  }, {
    key: 'updateCardGroupWithHttpInfo',
    value: function updateCardGroupWithHttpInfo(loyaltyCardGroupId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling updateCardGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCardGroup");
      }

      var pathParams = {
        'loyaltyCardGroupId': loyaltyCardGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCardgroupsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Cardgroups/{loyaltyCardGroupId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsProductModel}
     */

  }, {
    key: 'updateCardGroup',
    value: function updateCardGroup(loyaltyCardGroupId, body) {
      return this.updateCardGroupWithHttpInfo(loyaltyCardGroupId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoyaltyCardgroupsApi;
}();

exports.default = LoyaltyCardgroupsApi;