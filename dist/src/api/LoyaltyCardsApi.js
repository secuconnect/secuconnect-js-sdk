'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardsList = require('../model/LoyaltyCardsList');

var _LoyaltyCardsList2 = _interopRequireDefault(_LoyaltyCardsList);

var _LoyaltyCardsProductModel = require('../model/LoyaltyCardsProductModel');

var _LoyaltyCardsProductModel2 = _interopRequireDefault(_LoyaltyCardsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* LoyaltyCards service.
* @module api/LoyaltyCardsApi
*/
var LoyaltyCardsApi = function () {

  /**
  * Constructs a new LoyaltyCardsApi. 
  * @alias module:api/LoyaltyCardsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoyaltyCardsApi(apiClient) {
    _classCallCheck(this, LoyaltyCardsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}
   * Assign loyalty card to specific user account
   * @param {String} loyaltyCardId Loyalty card id
   * @param {String} generalAccountId General account id
   * @param {Object} opts Optional parameters
   * @param {Object} opts.loyaltyCardPin Loyalty card pin for the specific card
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(LoyaltyCardsApi, [{
    key: 'assignUserWithHttpInfo',
    value: function assignUserWithHttpInfo(loyaltyCardId, generalAccountId, opts) {
      opts = opts || {};
      var postBody = opts['loyaltyCardPin'];

      // verify the required parameter 'loyaltyCardId' is set
      if (loyaltyCardId === undefined || loyaltyCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardId' when calling assignUser");
      }

      // verify the required parameter 'generalAccountId' is set
      if (generalAccountId === undefined || generalAccountId === null) {
        throw new Error("Missing the required parameter 'generalAccountId' when calling assignUser");
      }

      var pathParams = {
        'loyaltyCardId': loyaltyCardId,
        'generalAccountId': generalAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}
     * Assign loyalty card to specific user account
     * @param {String} loyaltyCardId Loyalty card id
     * @param {String} generalAccountId General account id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.loyaltyCardPin Loyalty card pin for the specific card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'assignUser',
    value: function assignUser(loyaltyCardId, generalAccountId, opts) {
      return this.assignUserWithHttpInfo(loyaltyCardId, generalAccountId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Cards
     * Get a list of loyalty cards
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardsList} and HTTP response
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
      var returnType = _LoyaltyCardsList2.default;

      return this.apiClient.callApi('/Loyalty/Cards', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Cards
     * Get a list of loyalty cards
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardsList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Cards/{loyaltyCardId}
     * Get loyalty card for a specific id
     * @param {String} loyaltyCardId Search one loyalty card by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(loyaltyCardId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCardId' is set
      if (loyaltyCardId === undefined || loyaltyCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardId' when calling getOne");
      }

      var pathParams = {
        'loyaltyCardId': loyaltyCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Cards/{loyaltyCardId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Cards/{loyaltyCardId}
     * Get loyalty card for a specific id
     * @param {String} loyaltyCardId Search one loyalty card by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(loyaltyCardId) {
      return this.getOneWithHttpInfo(loyaltyCardId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}
     * Remove assigned loyalty card from specific user account
     * @param {String} loyaltyCardId Loyalty card id
     * @param {String} generalAccountId General account id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'removeAssignedUserWithHttpInfo',
    value: function removeAssignedUserWithHttpInfo(loyaltyCardId, generalAccountId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCardId' is set
      if (loyaltyCardId === undefined || loyaltyCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardId' when calling removeAssignedUser");
      }

      // verify the required parameter 'generalAccountId' is set
      if (generalAccountId === undefined || generalAccountId === null) {
        throw new Error("Missing the required parameter 'generalAccountId' when calling removeAssignedUser");
      }

      var pathParams = {
        'loyaltyCardId': loyaltyCardId,
        'generalAccountId': generalAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}
     * Remove assigned loyalty card from specific user account
     * @param {String} loyaltyCardId Loyalty card id
     * @param {String} generalAccountId General account id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'removeAssignedUser',
    value: function removeAssignedUser(loyaltyCardId, generalAccountId) {
      return this.removeAssignedUserWithHttpInfo(loyaltyCardId, generalAccountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoyaltyCardsApi;
}();

exports.default = LoyaltyCardsApi;