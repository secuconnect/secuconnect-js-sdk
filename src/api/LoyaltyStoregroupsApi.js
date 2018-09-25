
import ApiClient from "../ApiClient";
import LoyaltyStoregroupsDTO from '../model/LoyaltyStoregroupsDTO';
import LoyaltyStoregroupsList from '../model/LoyaltyStoregroupsList';
import LoyaltyStoregroupsProductModel from '../model/LoyaltyStoregroupsProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* LoyaltyStoregroups service.
* @module api/LoyaltyStoregroupsApi
*/
export default class LoyaltyStoregroupsApi {

    /**
    * Constructs a new LoyaltyStoregroupsApi. 
    * @alias module:api/LoyaltyStoregroupsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Loyalty/Storegroups
     * Add new loyalty store group
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsProductModel} and HTTP response
     */
    addStoreGroupWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addStoreGroup");
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
      let returnType = LoyaltyStoregroupsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Storegroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/Storegroups
     * Add new loyalty store group
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsProductModel}
     */
    addStoreGroup(body) {
      return this.addStoreGroupWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/StoreGroups
     * Get a list of loyalty store groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsList} and HTTP response
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
      let returnType = LoyaltyStoregroupsList;

      return this.apiClient.callApi(
        '/Loyalty/StoreGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/StoreGroups
     * Get a list of loyalty store groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsList}
     */
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Get loyalty store group for a specific id
     * @param {String} loyaltyStoreGroupId loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsProductModel} and HTTP response
     */
    getOneWithHttpInfo(loyaltyStoreGroupId) {
      let postBody = null;

      // verify the required parameter 'loyaltyStoreGroupId' is set
      if (loyaltyStoreGroupId === undefined || loyaltyStoreGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyStoreGroupId' when calling getOne");
      }


      let pathParams = {
        'loyaltyStoreGroupId': loyaltyStoreGroupId
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
      let returnType = LoyaltyStoregroupsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/StoreGroups/{loyaltyStoreGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Get loyalty store group for a specific id
     * @param {String} loyaltyStoreGroupId loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsProductModel}
     */
    getOne(loyaltyStoreGroupId) {
      return this.getOneWithHttpInfo(loyaltyStoreGroupId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Remove loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoyaltyStoregroupsProductModel>} and HTTP response
     */
    removeStoreGroupWithHttpInfo(loyaltyStoreGroupId) {
      let postBody = null;

      // verify the required parameter 'loyaltyStoreGroupId' is set
      if (loyaltyStoreGroupId === undefined || loyaltyStoreGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyStoreGroupId' when calling removeStoreGroup");
      }


      let pathParams = {
        'loyaltyStoreGroupId': loyaltyStoreGroupId
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
      let returnType = [LoyaltyStoregroupsProductModel];

      return this.apiClient.callApi(
        '/Loyalty/StoreGroups/{loyaltyStoreGroupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Remove loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoyaltyStoregroupsProductModel>}
     */
    removeStoreGroup(loyaltyStoreGroupId) {
      return this.removeStoreGroupWithHttpInfo(loyaltyStoreGroupId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Update loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStoregroupsProductModel} and HTTP response
     */
    updateStoreGroupWithHttpInfo(loyaltyStoreGroupId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyStoreGroupId' is set
      if (loyaltyStoreGroupId === undefined || loyaltyStoreGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyStoreGroupId' when calling updateStoreGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStoreGroup");
      }


      let pathParams = {
        'loyaltyStoreGroupId': loyaltyStoreGroupId
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
      let returnType = LoyaltyStoregroupsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/StoreGroups/{loyaltyStoreGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Loyalty/StoreGroups/{loyaltyStoreGroupId}
     * Update loyalty store group
     * @param {String} loyaltyStoreGroupId Loyalty store group id
     * @param {module:model/LoyaltyStoregroupsDTO} body Loyalty store group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStoregroupsProductModel}
     */
    updateStoreGroup(loyaltyStoreGroupId, body) {
      return this.updateStoreGroupWithHttpInfo(loyaltyStoreGroupId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
