'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentContainersDTO = require('../model/PaymentContainersDTO');

var _PaymentContainersDTO2 = _interopRequireDefault(_PaymentContainersDTO);

var _PaymentContainersList = require('../model/PaymentContainersList');

var _PaymentContainersList2 = _interopRequireDefault(_PaymentContainersList);

var _PaymentContainersProductModel = require('../model/PaymentContainersProductModel');

var _PaymentContainersProductModel2 = _interopRequireDefault(_PaymentContainersProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PaymentContainers service.
* @module api/PaymentContainersApi
*/
var PaymentContainersApi = function () {

  /**
  * Constructs a new PaymentContainersApi. 
  * @alias module:api/PaymentContainersApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentContainersApi(apiClient) {
    _classCallCheck(this, PaymentContainersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * GET Payment/Containers
   * Get a list of payment containers
   * @param {Object} opts Optional parameters
   * @param {Number} opts.count The number of items to return.
   * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
   * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
   * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
   * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContainersList} and HTTP response
   */


  _createClass(PaymentContainersApi, [{
    key: 'paymentContainersGetWithHttpInfo',
    value: function paymentContainersGetWithHttpInfo(opts) {
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
      var returnType = _PaymentContainersList2.default;

      return this.apiClient.callApi('/Payment/Containers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Containers
     * Get a list of payment containers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContainersList}
     */

  }, {
    key: 'paymentContainersGet',
    value: function paymentContainersGet(opts) {
      return this.paymentContainersGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Containers/{paymentContainerId}
     * Get all payment containers
     * @param {String} paymentContainerId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContainersProductModel} and HTTP response
     */

  }, {
    key: 'paymentContainersGetByIdWithHttpInfo',
    value: function paymentContainersGetByIdWithHttpInfo(paymentContainerId) {
      var postBody = null;

      // verify the required parameter 'paymentContainerId' is set
      if (paymentContainerId === undefined || paymentContainerId === null) {
        throw new Error("Missing the required parameter 'paymentContainerId' when calling paymentContainersGetById");
      }

      var pathParams = {
        'paymentContainerId': paymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContainersProductModel2.default;

      return this.apiClient.callApi('/Payment/Containers/{paymentContainerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Containers/{paymentContainerId}
     * Get all payment containers
     * @param {String} paymentContainerId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContainersProductModel}
     */

  }, {
    key: 'paymentContainersGetById',
    value: function paymentContainersGetById(paymentContainerId) {
      return this.paymentContainersGetByIdWithHttpInfo(paymentContainerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}
     * Removes an existing payment container assignment
     * @param {String} paymentContainerId Payment container id
     * @param {String} secondaryPaymentContainerId Id for which container is currently assigned to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentContainersProductModel>} and HTTP response
     */

  }, {
    key: 'paymentContainersIdAssignSecondaryIdDeleteWithHttpInfo',
    value: function paymentContainersIdAssignSecondaryIdDeleteWithHttpInfo(paymentContainerId, secondaryPaymentContainerId) {
      var postBody = null;

      // verify the required parameter 'paymentContainerId' is set
      if (paymentContainerId === undefined || paymentContainerId === null) {
        throw new Error("Missing the required parameter 'paymentContainerId' when calling paymentContainersIdAssignSecondaryIdDelete");
      }

      // verify the required parameter 'secondaryPaymentContainerId' is set
      if (secondaryPaymentContainerId === undefined || secondaryPaymentContainerId === null) {
        throw new Error("Missing the required parameter 'secondaryPaymentContainerId' when calling paymentContainersIdAssignSecondaryIdDelete");
      }

      var pathParams = {
        'paymentContainerId': paymentContainerId,
        'secondaryPaymentContainerId': secondaryPaymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_PaymentContainersProductModel2.default];

      return this.apiClient.callApi('/Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}
     * Removes an existing payment container assignment
     * @param {String} paymentContainerId Payment container id
     * @param {String} secondaryPaymentContainerId Id for which container is currently assigned to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentContainersProductModel>}
     */

  }, {
    key: 'paymentContainersIdAssignSecondaryIdDelete',
    value: function paymentContainersIdAssignSecondaryIdDelete(paymentContainerId, secondaryPaymentContainerId) {
      return this.paymentContainersIdAssignSecondaryIdDeleteWithHttpInfo(paymentContainerId, secondaryPaymentContainerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}
     * Assign an existing payment container to ...
     * @param {String} paymentContainerId Payment container id
     * @param {String} secondaryPaymentContainerId Id to which container will be assigned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContainersProductModel} and HTTP response
     */

  }, {
    key: 'paymentContainersIdAssignSecondaryIdPostWithHttpInfo',
    value: function paymentContainersIdAssignSecondaryIdPostWithHttpInfo(paymentContainerId, secondaryPaymentContainerId) {
      var postBody = null;

      // verify the required parameter 'paymentContainerId' is set
      if (paymentContainerId === undefined || paymentContainerId === null) {
        throw new Error("Missing the required parameter 'paymentContainerId' when calling paymentContainersIdAssignSecondaryIdPost");
      }

      // verify the required parameter 'secondaryPaymentContainerId' is set
      if (secondaryPaymentContainerId === undefined || secondaryPaymentContainerId === null) {
        throw new Error("Missing the required parameter 'secondaryPaymentContainerId' when calling paymentContainersIdAssignSecondaryIdPost");
      }

      var pathParams = {
        'paymentContainerId': paymentContainerId,
        'secondaryPaymentContainerId': secondaryPaymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContainersProductModel2.default;

      return this.apiClient.callApi('/Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}
     * Assign an existing payment container to ...
     * @param {String} paymentContainerId Payment container id
     * @param {String} secondaryPaymentContainerId Id to which container will be assigned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContainersProductModel}
     */

  }, {
    key: 'paymentContainersIdAssignSecondaryIdPost',
    value: function paymentContainersIdAssignSecondaryIdPost(paymentContainerId, secondaryPaymentContainerId) {
      return this.paymentContainersIdAssignSecondaryIdPostWithHttpInfo(paymentContainerId, secondaryPaymentContainerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Payment/Containers/{paymentContainerId}
     * Delete payment container
     * @param {String} paymentContainerId Payment container id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentContainersProductModel>} and HTTP response
     */

  }, {
    key: 'paymentContainersIdDeleteWithHttpInfo',
    value: function paymentContainersIdDeleteWithHttpInfo(paymentContainerId) {
      var postBody = null;

      // verify the required parameter 'paymentContainerId' is set
      if (paymentContainerId === undefined || paymentContainerId === null) {
        throw new Error("Missing the required parameter 'paymentContainerId' when calling paymentContainersIdDelete");
      }

      var pathParams = {
        'paymentContainerId': paymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_PaymentContainersProductModel2.default];

      return this.apiClient.callApi('/Payment/Containers/{paymentContainerId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Payment/Containers/{paymentContainerId}
     * Delete payment container
     * @param {String} paymentContainerId Payment container id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentContainersProductModel>}
     */

  }, {
    key: 'paymentContainersIdDelete',
    value: function paymentContainersIdDelete(paymentContainerId) {
      return this.paymentContainersIdDeleteWithHttpInfo(paymentContainerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Payment/Containers/{paymentContainerId}
     * Update payment container
     * @param {String} paymentContainerId Payment container id
     * @param {module:model/PaymentContainersDTO} body Payment container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContainersProductModel} and HTTP response
     */

  }, {
    key: 'paymentContainersIdPutWithHttpInfo',
    value: function paymentContainersIdPutWithHttpInfo(paymentContainerId, body) {
      var postBody = body;

      // verify the required parameter 'paymentContainerId' is set
      if (paymentContainerId === undefined || paymentContainerId === null) {
        throw new Error("Missing the required parameter 'paymentContainerId' when calling paymentContainersIdPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentContainersIdPut");
      }

      var pathParams = {
        'paymentContainerId': paymentContainerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContainersProductModel2.default;

      return this.apiClient.callApi('/Payment/Containers/{paymentContainerId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Payment/Containers/{paymentContainerId}
     * Update payment container
     * @param {String} paymentContainerId Payment container id
     * @param {module:model/PaymentContainersDTO} body Payment container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContainersProductModel}
     */

  }, {
    key: 'paymentContainersIdPut',
    value: function paymentContainersIdPut(paymentContainerId, body) {
      return this.paymentContainersIdPutWithHttpInfo(paymentContainerId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Containers
     * Add new containers
     * @param {module:model/PaymentContainersDTO} body Payment container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentContainersProductModel} and HTTP response
     */

  }, {
    key: 'paymentContainersPostWithHttpInfo',
    value: function paymentContainersPostWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentContainersPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PaymentContainersProductModel2.default;

      return this.apiClient.callApi('/Payment/Containers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Containers
     * Add new containers
     * @param {module:model/PaymentContainersDTO} body Payment container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentContainersProductModel}
     */

  }, {
    key: 'paymentContainersPost',
    value: function paymentContainersPost(body) {
      return this.paymentContainersPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentContainersApi;
}();

exports.default = PaymentContainersApi;