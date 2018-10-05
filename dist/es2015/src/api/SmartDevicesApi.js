'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _SmartDevicesDTO = require('../model/SmartDevicesDTO');

var _SmartDevicesDTO2 = _interopRequireDefault(_SmartDevicesDTO);

var _SmartDevicesDTOPrepaidTid = require('../model/SmartDevicesDTOPrepaidTid');

var _SmartDevicesDTOPrepaidTid2 = _interopRequireDefault(_SmartDevicesDTOPrepaidTid);

var _SmartDevicesDTOSecubaseConfig = require('../model/SmartDevicesDTOSecubaseConfig');

var _SmartDevicesDTOSecubaseConfig2 = _interopRequireDefault(_SmartDevicesDTOSecubaseConfig);

var _SmartDevicesList = require('../model/SmartDevicesList');

var _SmartDevicesList2 = _interopRequireDefault(_SmartDevicesList);

var _SmartDevicesList3 = require('../model/SmartDevicesList1');

var _SmartDevicesList4 = _interopRequireDefault(_SmartDevicesList3);

var _SmartDevicesProductModel = require('../model/SmartDevicesProductModel');

var _SmartDevicesProductModel2 = _interopRequireDefault(_SmartDevicesProductModel);

var _SmartDevicesSecubaseConfig = require('../model/SmartDevicesSecubaseConfig');

var _SmartDevicesSecubaseConfig2 = _interopRequireDefault(_SmartDevicesSecubaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* SmartDevices service.
* @module api/SmartDevicesApi
*/
var SmartDevicesApi = function () {

  /**
  * Constructs a new SmartDevicesApi. 
  * @alias module:api/SmartDevicesApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SmartDevicesApi(apiClient) {
    _classCallCheck(this, SmartDevicesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Smart/Devices
   * Create new smart device
   * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
   */


  _createClass(SmartDevicesApi, [{
    key: 'addDeviceWithHttpInfo',
    value: function addDeviceWithHttpInfo(smartDeviceProperties) {
      var postBody = smartDeviceProperties;

      // verify the required parameter 'smartDeviceProperties' is set
      if (smartDeviceProperties === undefined || smartDeviceProperties === null) {
        throw new Error("Missing the required parameter 'smartDeviceProperties' when calling addDevice");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesProductModel2.default;

      return this.apiClient.callApi('/Smart/Devices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Devices
     * Create new smart device
     * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */

  }, {
    key: 'addDevice',
    value: function addDevice(smartDeviceProperties) {
      return this.addDeviceWithHttpInfo(smartDeviceProperties).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/CreatePrepaidTid
     * Create prepaid tid
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOPrepaidTid} prepaidTidProperties Prepaid tid properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */

  }, {
    key: 'createPrepaidTidWithHttpInfo',
    value: function createPrepaidTidWithHttpInfo(smartDeviceId, prepaidTidProperties) {
      var postBody = prepaidTidProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling createPrepaidTid");
      }

      // verify the required parameter 'prepaidTidProperties' is set
      if (prepaidTidProperties === undefined || prepaidTidProperties === null) {
        throw new Error("Missing the required parameter 'prepaidTidProperties' when calling createPrepaidTid");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesProductModel2.default;

      return this.apiClient.callApi('/Smart/Devices/{smartDeviceId}/CreatePrepaidTid', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/CreatePrepaidTid
     * Create prepaid tid
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOPrepaidTid} prepaidTidProperties Prepaid tid properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */

  }, {
    key: 'createPrepaidTid',
    value: function createPrepaidTid(smartDeviceId, prepaidTidProperties) {
      return this.createPrepaidTidWithHttpInfo(smartDeviceId, prepaidTidProperties).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/CreateVirtualDevice
     * Create virtual device
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */

  }, {
    key: 'createVirtualDeviceWithHttpInfo',
    value: function createVirtualDeviceWithHttpInfo(smartDeviceId) {
      var postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling createVirtualDevice");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesProductModel2.default;

      return this.apiClient.callApi('/Smart/Devices/{smartDeviceId}/CreateVirtualDevice', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/CreateVirtualDevice
     * Create virtual device
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */

  }, {
    key: 'createVirtualDevice',
    value: function createVirtualDevice(smartDeviceId) {
      return this.createVirtualDeviceWithHttpInfo(smartDeviceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Smart/Devices
     * Get a list of smart devices
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesList} and HTTP response
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
      var returnType = _SmartDevicesList2.default;

      return this.apiClient.callApi('/Smart/Devices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Smart/Devices
     * Get a list of smart devices
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesList}
     */

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Smart/Devices/{smartDeviceId}
     * Get one smart device for a specific id
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(smartDeviceId) {
      var postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling getOne");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesProductModel2.default;

      return this.apiClient.callApi('/Smart/Devices/{smartDeviceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Smart/Devices/{smartDeviceId}
     * Get one smart device for a specific id
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(smartDeviceId) {
      return this.getOneWithHttpInfo(smartDeviceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Smart/Devices/{smartDeviceId}/routing/type/{type}
     * Get single routing
     * @param {String} smartDeviceId Smart device id
     * @param {String} type Payment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesList1} and HTTP response
     */

  }, {
    key: 'getRoutingWithHttpInfo',
    value: function getRoutingWithHttpInfo(smartDeviceId, type) {
      var postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling getRouting");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getRouting");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId,
        'type': type
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesList4.default;

      return this.apiClient.callApi('/Smart/Devices/{smartDeviceId}/routing/type/{type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Smart/Devices/{smartDeviceId}/routing/type/{type}
     * Get single routing
     * @param {String} smartDeviceId Smart device id
     * @param {String} type Payment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesList1}
     */

  }, {
    key: 'getRouting',
    value: function getRouting(smartDeviceId, type) {
      return this.getRoutingWithHttpInfo(smartDeviceId, type).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/GetSecubaseConfig
     * Get secubase config
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOSecubaseConfig} secubaseConfigProperties Secubase config properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesSecubaseConfig} and HTTP response
     */

  }, {
    key: 'getSecubaseConfigWithHttpInfo',
    value: function getSecubaseConfigWithHttpInfo(smartDeviceId, secubaseConfigProperties) {
      var postBody = secubaseConfigProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling getSecubaseConfig");
      }

      // verify the required parameter 'secubaseConfigProperties' is set
      if (secubaseConfigProperties === undefined || secubaseConfigProperties === null) {
        throw new Error("Missing the required parameter 'secubaseConfigProperties' when calling getSecubaseConfig");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesSecubaseConfig2.default;

      return this.apiClient.callApi('/Smart/Devices/{smartDeviceId}/GetSecubaseConfig', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/GetSecubaseConfig
     * Get secubase config
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOSecubaseConfig} secubaseConfigProperties Secubase config properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesSecubaseConfig}
     */

  }, {
    key: 'getSecubaseConfig',
    value: function getSecubaseConfig(smartDeviceId, secubaseConfigProperties) {
      return this.getSecubaseConfigWithHttpInfo(smartDeviceId, secubaseConfigProperties).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Smart/Devices/{smartDeviceId}
     * Update smart device
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */

  }, {
    key: 'updateDeviceWithHttpInfo',
    value: function updateDeviceWithHttpInfo(smartDeviceId, smartDeviceProperties) {
      var postBody = smartDeviceProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling updateDevice");
      }

      // verify the required parameter 'smartDeviceProperties' is set
      if (smartDeviceProperties === undefined || smartDeviceProperties === null) {
        throw new Error("Missing the required parameter 'smartDeviceProperties' when calling updateDevice");
      }

      var pathParams = {
        'smartDeviceId': smartDeviceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SmartDevicesProductModel2.default;

      return this.apiClient.callApi('/Smart/Devices/{smartDeviceId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Smart/Devices/{smartDeviceId}
     * Update smart device
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */

  }, {
    key: 'updateDevice',
    value: function updateDevice(smartDeviceId, smartDeviceProperties) {
      return this.updateDeviceWithHttpInfo(smartDeviceId, smartDeviceProperties).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SmartDevicesApi;
}();

exports.default = SmartDevicesApi;