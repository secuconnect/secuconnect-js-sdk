
import ApiClient from "../ApiClient";
import GeneralStoresDTO from '../model/GeneralStoresDTO';
import GeneralStoresDTOReason from '../model/GeneralStoresDTOReason';
import GeneralStoresDTOType from '../model/GeneralStoresDTOType';
import GeneralStoresList from '../model/GeneralStoresList';
import GeneralStoresProductModel from '../model/GeneralStoresProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* GeneralStores service.
* @module api/GeneralStoresApi
* @version 2.0.0
*/
export default class GeneralStoresApi {

    /**
    * Constructs a new GeneralStoresApi. 
    * @alias module:api/GeneralStoresApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST General/Stores
     * Create general store
     * @param {module:model/GeneralStoresDTO} body General store properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralStoresProductModel} and HTTP response
     */
    addStoreWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addStore");
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
      let returnType = GeneralStoresProductModel;

      return this.apiClient.callApi(
        '/General/Stores', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST General/Stores
     * Create general store
     * @param {module:model/GeneralStoresDTO} body General store properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresProductModel}
     */
    addStore(body) {
      return this.addStoreWithHttpInfo(body)
        .then(function(response_and_data) {
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
    assignGoogleKeyWithHttpInfo(generalStoreId, googleKey) {
      let postBody = null;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling assignGoogleKey");
      }

      // verify the required parameter 'googleKey' is set
      if (googleKey === undefined || googleKey === null) {
        throw new Error("Missing the required parameter 'googleKey' when calling assignGoogleKey");
      }


      let pathParams = {
        'generalStoreId': generalStoreId,
        'googleKey': googleKey
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/General/Stores/{generalStoreId}/assign/{googleKey}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST General/Stores/{generalStoreId}/assign/{googleKey}
     * Assign some object to general store
     * @param {String} generalStoreId General store id
     * @param {String} googleKey Google key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    assignGoogleKey(generalStoreId, googleKey) {
      return this.assignGoogleKeyWithHttpInfo(generalStoreId, googleKey)
        .then(function(response_and_data) {
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
    checkInWithHttpInfo(generalStoreId, body) {
      let postBody = body;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling checkIn");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling checkIn");
      }


      let pathParams = {
        'generalStoreId': generalStoreId
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/General/Stores/{generalStoreId}/checkin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST General/Stores/{generalStoreId}/checkin
     * Check in
     * @param {String} generalStoreId General store id
     * @param {module:model/GeneralStoresDTOType} body Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    checkIn(generalStoreId, body) {
      return this.checkInWithHttpInfo(generalStoreId, body)
        .then(function(response_and_data) {
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
      let returnType = GeneralStoresList;

      return this.apiClient.callApi(
        '/General/Stores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET General/Stores/{generalStoreId}
     * Get one general store for a specific id
     * @param {String} generalStoreId General store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralStoresProductModel} and HTTP response
     */
    getOneWithHttpInfo(generalStoreId) {
      let postBody = null;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling getOne");
      }


      let pathParams = {
        'generalStoreId': generalStoreId
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
      let returnType = GeneralStoresProductModel;

      return this.apiClient.callApi(
        '/General/Stores/{generalStoreId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET General/Stores/{generalStoreId}
     * Get one general store for a specific id
     * @param {String} generalStoreId General store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresProductModel}
     */
    getOne(generalStoreId) {
      return this.getOneWithHttpInfo(generalStoreId)
        .then(function(response_and_data) {
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
    setDefaultWithHttpInfo(generalStoreId, opts) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling setDefault");
      }


      let pathParams = {
        'generalStoreId': generalStoreId
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/General/Stores/{generalStoreId}/setDefault', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST General/Stores/{generalStoreId}/setDefault
     * Set default flag on general store
     * @param {String} generalStoreId General store id
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralStoresDTOReason} opts.body Reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    setDefault(generalStoreId, opts) {
      return this.setDefaultWithHttpInfo(generalStoreId, opts)
        .then(function(response_and_data) {
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
    updateStoreWithHttpInfo(generalStoreId, body) {
      let postBody = body;

      // verify the required parameter 'generalStoreId' is set
      if (generalStoreId === undefined || generalStoreId === null) {
        throw new Error("Missing the required parameter 'generalStoreId' when calling updateStore");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStore");
      }


      let pathParams = {
        'generalStoreId': generalStoreId
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
      let returnType = GeneralStoresProductModel;

      return this.apiClient.callApi(
        '/General/Stores/{generalStoreId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT General/Stores/{generalStoreId}
     * Update general store
     * @param {String} generalStoreId General store id
     * @param {module:model/GeneralStoresDTO} body General store properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralStoresProductModel}
     */
    updateStore(generalStoreId, body) {
      return this.updateStoreWithHttpInfo(generalStoreId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
