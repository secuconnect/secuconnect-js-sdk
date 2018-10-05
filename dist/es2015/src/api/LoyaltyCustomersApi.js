'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCustomersDTO = require('../model/LoyaltyCustomersDTO');

var _LoyaltyCustomersDTO2 = _interopRequireDefault(_LoyaltyCustomersDTO);

var _LoyaltyCustomersList = require('../model/LoyaltyCustomersList');

var _LoyaltyCustomersList2 = _interopRequireDefault(_LoyaltyCustomersList);

var _LoyaltyCustomersProductModel = require('../model/LoyaltyCustomersProductModel');

var _LoyaltyCustomersProductModel2 = _interopRequireDefault(_LoyaltyCustomersProductModel);

var _LoyaltyCustomersRemoved = require('../model/LoyaltyCustomersRemoved');

var _LoyaltyCustomersRemoved2 = _interopRequireDefault(_LoyaltyCustomersRemoved);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* LoyaltyCustomers service.
* @module api/LoyaltyCustomersApi
*/
var LoyaltyCustomersApi = function () {

  /**
  * Constructs a new LoyaltyCustomersApi. 
  * @alias module:api/LoyaltyCustomersApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoyaltyCustomersApi(apiClient) {
    _classCallCheck(this, LoyaltyCustomersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Loyalty/Customers
   * Add loyalty customer
   * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
   */


  _createClass(LoyaltyCustomersApi, [{
    key: 'addCustomerWithHttpInfo',
    value: function addCustomerWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCustomer");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCustomersProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Customers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Customers
     * Add loyalty customer
     * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */

  }, {
    key: 'addCustomer',
    value: function addCustomer(body) {
      return this.addCustomerWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}
     * Assigns LoyaltyPaymentContainer to customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @param {String} loyaltyPaymentContainerId LoyaltyPaymentContainer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
     */

  }, {
    key: 'assignPaymentContainerWithHttpInfo',
    value: function assignPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling assignPaymentContainer");
      }

      // verify the required parameter 'loyaltyPaymentContainerId' is set
      if (loyaltyPaymentContainerId === undefined || loyaltyPaymentContainerId === null) {
        throw new Error("Missing the required parameter 'loyaltyPaymentContainerId' when calling assignPaymentContainer");
      }

      var pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId,
        'loyaltyPaymentContainerId': loyaltyPaymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCustomersProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}
     * Assigns LoyaltyPaymentContainer to customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @param {String} loyaltyPaymentContainerId LoyaltyPaymentContainer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */

  }, {
    key: 'assignPaymentContainer',
    value: function assignPaymentContainer(loyaltyCustomerId, loyaltyPaymentContainerId) {
      return this.assignPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/checkDuplicated/
     * check if there are duplicated customers for a given merchant
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'checkForDuplicatesWithHttpInfo',
    value: function checkForDuplicatesWithHttpInfo(loyaltyCustomerId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling checkForDuplicates");
      }

      var pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/Customers/{loyaltyCustomerId}/checkDuplicated/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/checkDuplicated/
     * check if there are duplicated customers for a given merchant
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'checkForDuplicates',
    value: function checkForDuplicates(loyaltyCustomerId) {
      return this.checkForDuplicatesWithHttpInfo(loyaltyCustomerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Customers
     * Get a list of loyalty customers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersList} and HTTP response
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
      var returnType = _LoyaltyCustomersList2.default;

      return this.apiClient.callApi('/Loyalty/Customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Customers
     * Get a list of loyalty customers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Customers/{loyaltyCustomerId}
     * Get loyalty customer for a specific id
     * @param {String} loyaltyCustomerId Search one loyalty customer by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(loyaltyCustomerId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling getOne");
      }

      var pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCustomersProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Customers/{loyaltyCustomerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Customers/{loyaltyCustomerId}
     * Get loyalty customer for a specific id
     * @param {String} loyaltyCustomerId Search one loyalty customer by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(loyaltyCustomerId) {
      return this.getOneWithHttpInfo(loyaltyCustomerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}
     * Removes an assigned LoyaltyPaymentContainer from customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @param {String} loyaltyPaymentContainerId LoyaltyPaymentContainer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
     */

  }, {
    key: 'removeAssignedPaymentContainerWithHttpInfo',
    value: function removeAssignedPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling removeAssignedPaymentContainer");
      }

      // verify the required parameter 'loyaltyPaymentContainerId' is set
      if (loyaltyPaymentContainerId === undefined || loyaltyPaymentContainerId === null) {
        throw new Error("Missing the required parameter 'loyaltyPaymentContainerId' when calling removeAssignedPaymentContainer");
      }

      var pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId,
        'loyaltyPaymentContainerId': loyaltyPaymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCustomersProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}
     * Removes an assigned LoyaltyPaymentContainer from customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @param {String} loyaltyPaymentContainerId LoyaltyPaymentContainer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */

  }, {
    key: 'removeAssignedPaymentContainer',
    value: function removeAssignedPaymentContainer(loyaltyCustomerId, loyaltyPaymentContainerId) {
      return this.removeAssignedPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}
     * Remove assigned loyalty customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersRemoved} and HTTP response
     */

  }, {
    key: 'removeCustomerWithHttpInfo',
    value: function removeCustomerWithHttpInfo(loyaltyCustomerId) {
      var postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling removeCustomer");
      }

      var pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCustomersRemoved2.default;

      return this.apiClient.callApi('/Loyalty/Customers/{loyaltyCustomerId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}
     * Remove assigned loyalty customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersRemoved}
     */

  }, {
    key: 'removeCustomer',
    value: function removeCustomer(loyaltyCustomerId) {
      return this.removeCustomerWithHttpInfo(loyaltyCustomerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Loyalty/Customers/{loyaltyCustomerId}
     * Function to update customer&#39;s data
     * @param {String} loyaltyCustomerId loyalty Customer Id CUS_XXX
     * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
     */

  }, {
    key: 'updateCustomerWithHttpInfo',
    value: function updateCustomerWithHttpInfo(loyaltyCustomerId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling updateCustomer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomer");
      }

      var pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyCustomersProductModel2.default;

      return this.apiClient.callApi('/Loyalty/Customers/{loyaltyCustomerId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Loyalty/Customers/{loyaltyCustomerId}
     * Function to update customer&#39;s data
     * @param {String} loyaltyCustomerId loyalty Customer Id CUS_XXX
     * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */

  }, {
    key: 'updateCustomer',
    value: function updateCustomer(loyaltyCustomerId, body) {
      return this.updateCustomerWithHttpInfo(loyaltyCustomerId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoyaltyCustomersApi;
}();

exports.default = LoyaltyCustomersApi;