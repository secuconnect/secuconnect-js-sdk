'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GeneralStoresDTO = require('../model/GeneralStoresDTO');

var _GeneralStoresDTO2 = _interopRequireDefault(_GeneralStoresDTO);

var _GeneralStoresDTOReason = require('../model/GeneralStoresDTOReason');

var _GeneralStoresDTOReason2 = _interopRequireDefault(_GeneralStoresDTOReason);

var _GeneralStoresDTOType = require('../model/GeneralStoresDTOType');

var _GeneralStoresDTOType2 = _interopRequireDefault(_GeneralStoresDTOType);

var _GeneralStoresList = require('../model/GeneralStoresList');

var _GeneralStoresList2 = _interopRequireDefault(_GeneralStoresList);

var _GeneralStoresProductModel = require('../model/GeneralStoresProductModel');

var _GeneralStoresProductModel2 = _interopRequireDefault(_GeneralStoresProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* GeneralStores service.
* @module api/GeneralStoresApi
*/
var GeneralStoresApi = function () {

  /**
  * Constructs a new GeneralStoresApi. 
  * @alias module:api/GeneralStoresApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GeneralStoresApi(apiClient) {
    _classCallCheck(this, GeneralStoresApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST General/Stores
   * Create general store
   * @param {module:model/GeneralStoresDTO} body General store properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralStoresProductModel} and HTTP response
   */


  _createClass(GeneralStoresApi, [{
    key: 'addStoreWithHttpInfo',
    value: function addStoreWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addStore");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _GeneralStoresProductModel2.default;

      return this.apiClient.callApi('/General/Stores', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST General/Stores
     * Create general store
     * @param {module:model/GeneralStoresDTO} body General store properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresProductModel}
     */

  }, {
    key: 'addStore',
    value: function addStore(body) {
      return this.addStoreWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST General/Stores/{generalStoreId}/assign/{googleKey}
     * Assign some object to general store
     * @param {String} generalStoreId General store id
     * @param {String} googleKey Google key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'assignGoogleKeyWithHttpInfo',
    value: function assignGoogleKeyWithHttpInfo(generalStoreId, googleKey) {
      var postBody = null;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling assignGoogleKey");
      }

      // verify the required parameter 'googleKey' is set
      if (googleKey === undefined || googleKey === null) {
        throw new Error("Missing the required parameter 'googleKey' when calling assignGoogleKey");
      }

      var pathParams = {
        'generalStoreId': generalStoreId,
        'googleKey': googleKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/General/Stores/{generalStoreId}/assign/{googleKey}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST General/Stores/{generalStoreId}/assign/{googleKey}
     * Assign some object to general store
     * @param {String} generalStoreId General store id
     * @param {String} googleKey Google key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'assignGoogleKey',
    value: function assignGoogleKey(generalStoreId, googleKey) {
      return this.assignGoogleKeyWithHttpInfo(generalStoreId, googleKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST General/Stores/{generalStoreId}/checkin
     * Check in
     * @param {String} generalStoreId General store id
     * @param {module:model/GeneralStoresDTOType} body Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'checkInWithHttpInfo',
    value: function checkInWithHttpInfo(generalStoreId, body) {
      var postBody = body;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling checkIn");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling checkIn");
      }

      var pathParams = {
        'generalStoreId': generalStoreId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/General/Stores/{generalStoreId}/checkin', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST General/Stores/{generalStoreId}/checkin
     * Check in
     * @param {String} generalStoreId General store id
     * @param {module:model/GeneralStoresDTOType} body Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'checkIn',
    value: function checkIn(generalStoreId, body) {
      return this.checkInWithHttpInfo(generalStoreId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET General/Stores
     * Get a list of general stores
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralStoresList} and HTTP response
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
      var returnType = _GeneralStoresList2.default;

      return this.apiClient.callApi('/General/Stores', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET General/Stores
     * Get a list of general stores
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET General/Stores/{generalStoreId}
     * Get one general store for a specific id
     * @param {String} generalStoreId General store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralStoresProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(generalStoreId) {
      var postBody = null;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling getOne");
      }

      var pathParams = {
        'generalStoreId': generalStoreId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _GeneralStoresProductModel2.default;

      return this.apiClient.callApi('/General/Stores/{generalStoreId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET General/Stores/{generalStoreId}
     * Get one general store for a specific id
     * @param {String} generalStoreId General store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(generalStoreId) {
      return this.getOneWithHttpInfo(generalStoreId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST General/Stores/{generalStoreId}/setDefault
     * Set default flag on general store
     * @param {String} generalStoreId General store id
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralStoresDTOReason} opts.body Reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'setDefaultWithHttpInfo',
    value: function setDefaultWithHttpInfo(generalStoreId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling setDefault");
      }

      var pathParams = {
        'generalStoreId': generalStoreId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/General/Stores/{generalStoreId}/setDefault', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST General/Stores/{generalStoreId}/setDefault
     * Set default flag on general store
     * @param {String} generalStoreId General store id
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralStoresDTOReason} opts.body Reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'setDefault',
    value: function setDefault(generalStoreId, opts) {
      return this.setDefaultWithHttpInfo(generalStoreId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT General/Stores/{generalStoreId}
     * Update general store
     * @param {String} generalStoreId General store id
     * @param {module:model/GeneralStoresDTO} body General store properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralStoresProductModel} and HTTP response
     */

  }, {
    key: 'updateStoreWithHttpInfo',
    value: function updateStoreWithHttpInfo(generalStoreId, body) {
      var postBody = body;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling updateStore");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStore");
      }

      var pathParams = {
        'generalStoreId': generalStoreId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _GeneralStoresProductModel2.default;

      return this.apiClient.callApi('/General/Stores/{generalStoreId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT General/Stores/{generalStoreId}
     * Update general store
     * @param {String} generalStoreId General store id
     * @param {module:model/GeneralStoresDTO} body General store properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresProductModel}
     */

  }, {
    key: 'updateStore',
    value: function updateStore(generalStoreId, body) {
      return this.updateStoreWithHttpInfo(generalStoreId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GeneralStoresApi;
}();

exports.default = GeneralStoresApi;