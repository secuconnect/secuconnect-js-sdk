
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SmartDeviceUserPin from '../model/SmartDeviceUserPin';
import SmartDevicesDTO from '../model/SmartDevicesDTO';
import SmartDevicesDTOPrepaidTid from '../model/SmartDevicesDTOPrepaidTid';
import SmartDevicesDTOSecubaseConfig from '../model/SmartDevicesDTOSecubaseConfig';
import SmartDevicesList from '../model/SmartDevicesList';
import SmartDevicesList1 from '../model/SmartDevicesList1';
import SmartDevicesProductModel from '../model/SmartDevicesProductModel';
import SmartDevicesSecubaseConfig from '../model/SmartDevicesSecubaseConfig';

/**
* SmartDevices service.
* @module api/SmartDevicesApi
*/
export default class SmartDevicesApi {

    /**
    * Constructs a new SmartDevicesApi. 
    * @alias module:api/SmartDevicesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Smart/Devices
     * Create new smart device
     * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */
    addDeviceWithHttpInfo(smartDeviceProperties) {
      let postBody = smartDeviceProperties;

      // verify the required parameter 'smartDeviceProperties' is set
      if (smartDeviceProperties === undefined || smartDeviceProperties === null) {
        throw new Error("Missing the required parameter 'smartDeviceProperties' when calling addDevice");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesProductModel;

      return this.apiClient.callApi(
        '/Smart/Devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Devices
     * Create new smart device
     * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */
    addDevice(smartDeviceProperties) {
      return this.addDeviceWithHttpInfo(smartDeviceProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Devices/{smartDeviceId}/createPrepaidTid
     * Create prepaid tid
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOPrepaidTid} prepaidTidProperties Prepaid tid properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */
    createPrepaidTidWithHttpInfo(smartDeviceId, prepaidTidProperties) {
      let postBody = prepaidTidProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling createPrepaidTid");
      }

      // verify the required parameter 'prepaidTidProperties' is set
      if (prepaidTidProperties === undefined || prepaidTidProperties === null) {
        throw new Error("Missing the required parameter 'prepaidTidProperties' when calling createPrepaidTid");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesProductModel;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}/createPrepaidTid', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/createPrepaidTid
     * Create prepaid tid
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOPrepaidTid} prepaidTidProperties Prepaid tid properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */
    createPrepaidTid(smartDeviceId, prepaidTidProperties) {
      return this.createPrepaidTidWithHttpInfo(smartDeviceId, prepaidTidProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Devices/{smartDeviceId}/createVirtualDevice
     * Create virtual device
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */
    createVirtualDeviceWithHttpInfo(smartDeviceId) {
      let postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling createVirtualDevice");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesProductModel;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}/createVirtualDevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/createVirtualDevice
     * Create virtual device
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */
    createVirtualDevice(smartDeviceId) {
      return this.createVirtualDeviceWithHttpInfo(smartDeviceId)
        .then(function(response_and_data) {
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
    getAllWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'count': opts['count'],
        'offset': opts['offset'],
        'fields': opts['fields'],
        'q': opts['q'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesList;

      return this.apiClient.callApi(
        '/Smart/Devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Smart/Devices/{smartDeviceId}
     * Get one smart device for a specific id
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */
    getOneWithHttpInfo(smartDeviceId) {
      let postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling getOne");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesProductModel;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Smart/Devices/{smartDeviceId}
     * Get one smart device for a specific id
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */
    getOne(smartDeviceId) {
      return this.getOneWithHttpInfo(smartDeviceId)
        .then(function(response_and_data) {
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
    getRoutingWithHttpInfo(smartDeviceId, type) {
      let postBody = null;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling getRouting");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getRouting");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId,
        'type': type
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesList1;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}/routing/type/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Smart/Devices/{smartDeviceId}/routing/type/{type}
     * Get single routing
     * @param {String} smartDeviceId Smart device id
     * @param {String} type Payment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesList1}
     */
    getRouting(smartDeviceId, type) {
      return this.getRoutingWithHttpInfo(smartDeviceId, type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Devices/{smartDeviceId}/getSecubaseConfig
     * Get secubase config
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOSecubaseConfig} secubaseConfigProperties Secubase config properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesSecubaseConfig} and HTTP response
     */
    getSecubaseConfigWithHttpInfo(smartDeviceId, secubaseConfigProperties) {
      let postBody = secubaseConfigProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling getSecubaseConfig");
      }

      // verify the required parameter 'secubaseConfigProperties' is set
      if (secubaseConfigProperties === undefined || secubaseConfigProperties === null) {
        throw new Error("Missing the required parameter 'secubaseConfigProperties' when calling getSecubaseConfig");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesSecubaseConfig;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}/getSecubaseConfig', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Devices/{smartDeviceId}/getSecubaseConfig
     * Get secubase config
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTOSecubaseConfig} secubaseConfigProperties Secubase config properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesSecubaseConfig}
     */
    getSecubaseConfig(smartDeviceId, secubaseConfigProperties) {
      return this.getSecubaseConfigWithHttpInfo(smartDeviceId, secubaseConfigProperties)
        .then(function(response_and_data) {
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
    updateDeviceWithHttpInfo(smartDeviceId, smartDeviceProperties) {
      let postBody = smartDeviceProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling updateDevice");
      }

      // verify the required parameter 'smartDeviceProperties' is set
      if (smartDeviceProperties === undefined || smartDeviceProperties === null) {
        throw new Error("Missing the required parameter 'smartDeviceProperties' when calling updateDevice");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesProductModel;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Smart/Devices/{smartDeviceId}
     * Update smart device
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDevicesDTO} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */
    updateDevice(smartDeviceId, smartDeviceProperties) {
      return this.updateDeviceWithHttpInfo(smartDeviceId, smartDeviceProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT /Smart/Devices/{smartDeviceId}/pin
     * Create new smart device
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDeviceUserPin} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartDevicesProductModel} and HTTP response
     */
    updatePinWithHttpInfo(smartDeviceId, smartDeviceProperties) {
      let postBody = smartDeviceProperties;

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling updatePin");
      }

      // verify the required parameter 'smartDeviceProperties' is set
      if (smartDeviceProperties === undefined || smartDeviceProperties === null) {
        throw new Error("Missing the required parameter 'smartDeviceProperties' when calling updatePin");
      }


      let pathParams = {
        'smartDeviceId': smartDeviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth_token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = SmartDevicesProductModel;

      return this.apiClient.callApi(
        '/Smart/Devices/{smartDeviceId}/pin', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT /Smart/Devices/{smartDeviceId}/pin
     * Create new smart device
     * @param {String} smartDeviceId Smart device id
     * @param {module:model/SmartDeviceUserPin} smartDeviceProperties Smart device properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartDevicesProductModel}
     */
    updatePin(smartDeviceId, smartDeviceProperties) {
      return this.updatePinWithHttpInfo(smartDeviceId, smartDeviceProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
