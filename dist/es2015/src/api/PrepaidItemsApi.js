'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PrepaidItemsList = require('../model/PrepaidItemsList');

var _PrepaidItemsList2 = _interopRequireDefault(_PrepaidItemsList);

var _PrepaidItemsProductModel = require('../model/PrepaidItemsProductModel');

var _PrepaidItemsProductModel2 = _interopRequireDefault(_PrepaidItemsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PrepaidItems service.
* @module api/PrepaidItemsApi
*/
var PrepaidItemsApi = function () {

  /**
  * Constructs a new PrepaidItemsApi. 
  * @alias module:api/PrepaidItemsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PrepaidItemsApi(apiClient) {
    _classCallCheck(this, PrepaidItemsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * GET Prepaid/Items
   * Get a list of prepaid items
   * @param {Object} opts Optional parameters
   * @param {Number} opts.count The number of items to return.
   * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
   * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
   * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
   * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaidItemsList} and HTTP response
   */


  _createClass(PrepaidItemsApi, [{
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
      var returnType = _PrepaidItemsList2.default;

      return this.apiClient.callApi('/Prepaid/Items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Prepaid/Items
     * Get a list of prepaid items
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaidItemsList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Prepaid/Items/{prepaidItemId}
     * Get one prepaid item for a specific id
     * @param {String} prepaidItemId Prepaid item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaidItemsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(prepaidItemId) {
      var postBody = null;

      // verify the required parameter 'prepaidItemId' is set
      if (prepaidItemId === undefined || prepaidItemId === null) {
        throw new Error("Missing the required parameter 'prepaidItemId' when calling getOne");
      }

      var pathParams = {
        'prepaidItemId': prepaidItemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PrepaidItemsProductModel2.default;

      return this.apiClient.callApi('/Prepaid/Items/{prepaidItemId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Prepaid/Items/{prepaidItemId}
     * Get one prepaid item for a specific id
     * @param {String} prepaidItemId Prepaid item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaidItemsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(prepaidItemId) {
      return this.getOneWithHttpInfo(prepaidItemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PrepaidItemsApi;
}();

exports.default = PrepaidItemsApi;