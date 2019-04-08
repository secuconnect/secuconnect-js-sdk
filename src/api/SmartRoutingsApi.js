
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SmartRoutingPriority from '../model/SmartRoutingPriority';
import SmartRoutingsDTO from '../model/SmartRoutingsDTO';
import SmartRoutingsList from '../model/SmartRoutingsList';
import SmartRoutingsProductModel from '../model/SmartRoutingsProductModel';

/**
* SmartRoutings service.
* @module api/SmartRoutingsApi
*/
export default class SmartRoutingsApi {

    /**
    * Constructs a new SmartRoutingsApi. 
    * @alias module:api/SmartRoutingsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Smart/Routings
     * Create new smart routing
     * @param {module:model/SmartRoutingsDTO} smartRoutingProperties Smart routing properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartRoutingsProductModel} and HTTP response
     */
    addRoutingWithHttpInfo(smartRoutingProperties) {
      let postBody = smartRoutingProperties;

      // verify the required parameter 'smartRoutingProperties' is set
      if (smartRoutingProperties === undefined || smartRoutingProperties === null) {
        throw new Error("Missing the required parameter 'smartRoutingProperties' when calling addRouting");
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
      let returnType = SmartRoutingsProductModel;

      return this.apiClient.callApi(
        '/Smart/Routings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Routings
     * Create new smart routing
     * @param {module:model/SmartRoutingsDTO} smartRoutingProperties Smart routing properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartRoutingsProductModel}
     */
    addRouting(smartRoutingProperties) {
      return this.addRoutingWithHttpInfo(smartRoutingProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}
     * Assign the specific smart device to the specific smart routing
     * @param {String} smartRoutingId Smart routing id
     * @param {String} smartDeviceId Smart device id
     * @param {Object} opts Optional parameters
     * @param {module:model/SmartRoutingPriority} opts.smartRoutingAssignmentProperties Smart routing assignment properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartRoutingsProductModel} and HTTP response
     */
    assignDeviceToRoutingWithHttpInfo(smartRoutingId, smartDeviceId, opts) {
      opts = opts || {};
      let postBody = opts['smartRoutingAssignmentProperties'];

      // verify the required parameter 'smartRoutingId' is set
      if (smartRoutingId === undefined || smartRoutingId === null) {
        throw new Error("Missing the required parameter 'smartRoutingId' when calling assignDeviceToRouting");
      }

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling assignDeviceToRouting");
      }


      let pathParams = {
        'smartRoutingId': smartRoutingId,
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
      let returnType = SmartRoutingsProductModel;

      return this.apiClient.callApi(
        '/Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}
     * Assign the specific smart device to the specific smart routing
     * @param {String} smartRoutingId Smart routing id
     * @param {String} smartDeviceId Smart device id
     * @param {Object} opts Optional parameters
     * @param {module:model/SmartRoutingPriority} opts.smartRoutingAssignmentProperties Smart routing assignment properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartRoutingsProductModel}
     */
    assignDeviceToRouting(smartRoutingId, smartDeviceId, opts) {
      return this.assignDeviceToRoutingWithHttpInfo(smartRoutingId, smartDeviceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Smart/Routings
     * Get a list of smart routings
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartRoutingsList} and HTTP response
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
      let returnType = SmartRoutingsList;

      return this.apiClient.callApi(
        '/Smart/Routings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Smart/Routings
     * Get a list of smart routings
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartRoutingsList}
     */
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Smart/Routings/{smartRoutingId}
     * Get one smart routing for a specific id
     * @param {String} smartRoutingId Smart routing id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartRoutingsProductModel} and HTTP response
     */
    getOneWithHttpInfo(smartRoutingId) {
      let postBody = null;

      // verify the required parameter 'smartRoutingId' is set
      if (smartRoutingId === undefined || smartRoutingId === null) {
        throw new Error("Missing the required parameter 'smartRoutingId' when calling getOne");
      }


      let pathParams = {
        'smartRoutingId': smartRoutingId
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
      let returnType = SmartRoutingsProductModel;

      return this.apiClient.callApi(
        '/Smart/Routings/{smartRoutingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Smart/Routings/{smartRoutingId}
     * Get one smart routing for a specific id
     * @param {String} smartRoutingId Smart routing id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartRoutingsProductModel}
     */
    getOne(smartRoutingId) {
      return this.getOneWithHttpInfo(smartRoutingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Smart/Routings/{smartRoutingId}
     * Remove specific smart roting
     * @param {String} smartRoutingId Smart routing id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SmartRoutingsProductModel>} and HTTP response
     */
    removeRoutingWithHttpInfo(smartRoutingId) {
      let postBody = null;

      // verify the required parameter 'smartRoutingId' is set
      if (smartRoutingId === undefined || smartRoutingId === null) {
        throw new Error("Missing the required parameter 'smartRoutingId' when calling removeRouting");
      }


      let pathParams = {
        'smartRoutingId': smartRoutingId
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
      let returnType = [SmartRoutingsProductModel];

      return this.apiClient.callApi(
        '/Smart/Routings/{smartRoutingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Smart/Routings/{smartRoutingId}
     * Remove specific smart roting
     * @param {String} smartRoutingId Smart routing id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SmartRoutingsProductModel>}
     */
    removeRouting(smartRoutingId) {
      return this.removeRoutingWithHttpInfo(smartRoutingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}
     * Remove smart routing assignment
     * @param {String} smartRoutingId Smart routing id
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartRoutingsProductModel} and HTTP response
     */
    removeSmartRoutingAssignmentWithHttpInfo(smartRoutingId, smartDeviceId) {
      let postBody = null;

      // verify the required parameter 'smartRoutingId' is set
      if (smartRoutingId === undefined || smartRoutingId === null) {
        throw new Error("Missing the required parameter 'smartRoutingId' when calling removeSmartRoutingAssignment");
      }

      // verify the required parameter 'smartDeviceId' is set
      if (smartDeviceId === undefined || smartDeviceId === null) {
        throw new Error("Missing the required parameter 'smartDeviceId' when calling removeSmartRoutingAssignment");
      }


      let pathParams = {
        'smartRoutingId': smartRoutingId,
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
      let returnType = SmartRoutingsProductModel;

      return this.apiClient.callApi(
        '/Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}
     * Remove smart routing assignment
     * @param {String} smartRoutingId Smart routing id
     * @param {String} smartDeviceId Smart device id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartRoutingsProductModel}
     */
    removeSmartRoutingAssignment(smartRoutingId, smartDeviceId) {
      return this.removeSmartRoutingAssignmentWithHttpInfo(smartRoutingId, smartDeviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Smart/Routings/{smartRoutingId}
     * Update specific smart routing
     * @param {String} smartRoutingId Smart routing id
     * @param {module:model/SmartRoutingsDTO} smartRoutingProperties Smart routing properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SmartRoutingsProductModel} and HTTP response
     */
    updateRoutingWithHttpInfo(smartRoutingId, smartRoutingProperties) {
      let postBody = smartRoutingProperties;

      // verify the required parameter 'smartRoutingId' is set
      if (smartRoutingId === undefined || smartRoutingId === null) {
        throw new Error("Missing the required parameter 'smartRoutingId' when calling updateRouting");
      }

      // verify the required parameter 'smartRoutingProperties' is set
      if (smartRoutingProperties === undefined || smartRoutingProperties === null) {
        throw new Error("Missing the required parameter 'smartRoutingProperties' when calling updateRouting");
      }


      let pathParams = {
        'smartRoutingId': smartRoutingId
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
      let returnType = SmartRoutingsProductModel;

      return this.apiClient.callApi(
        '/Smart/Routings/{smartRoutingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Smart/Routings/{smartRoutingId}
     * Update specific smart routing
     * @param {String} smartRoutingId Smart routing id
     * @param {module:model/SmartRoutingsDTO} smartRoutingProperties Smart routing properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SmartRoutingsProductModel}
     */
    updateRouting(smartRoutingId, smartRoutingProperties) {
      return this.updateRoutingWithHttpInfo(smartRoutingId, smartRoutingProperties)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
