
import ApiClient from "../ApiClient";
import LoyaltyCardgroupsDTO from '../model/LoyaltyCardgroupsDTO';
import LoyaltyCardgroupsDTOCheckPasscodeEnabled from '../model/LoyaltyCardgroupsDTOCheckPasscodeEnabled';
import LoyaltyCardgroupsList from '../model/LoyaltyCardgroupsList';
import LoyaltyCardgroupsProductModel from '../model/LoyaltyCardgroupsProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* LoyaltyCardgroups service.
* @module api/LoyaltyCardgroupsApi
*/
export default class LoyaltyCardgroupsApi {

    /**
    * Constructs a new LoyaltyCardgroupsApi. 
    * @alias module:api/LoyaltyCardgroupsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Loyalty/Cardgroups
     * Add loyalty card group
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsProductModel} and HTTP response
     */
    addCardGroupWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCardGroup");
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
      let returnType = LoyaltyCardgroupsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Cardgroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/Cardgroups
     * Add loyalty card group
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsProductModel}
     */
    addCardGroup(body) {
      return this.addCardGroupWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled
     * Check whether passcode check is enabled
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {Object} opts Optional parameters
     * @param {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} opts.body Check passcode details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    checkPassCodeEnabledWithHttpInfo(loyaltyCardGroupId, opts) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling checkPassCodeEnabled");
      }


      let pathParams = {
        'loyaltyCardGroupId': loyaltyCardGroupId
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
        '/Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled
     * Check whether passcode check is enabled
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {Object} opts Optional parameters
     * @param {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} opts.body Check passcode details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    checkPassCodeEnabled(loyaltyCardGroupId, opts) {
      return this.checkPassCodeEnabledWithHttpInfo(loyaltyCardGroupId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/Cardgroups
     * Get a list of loyalty card groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsList} and HTTP response
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
      let returnType = LoyaltyCardgroupsList;

      return this.apiClient.callApi(
        '/Loyalty/Cardgroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/Cardgroups
     * Get a list of loyalty card groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsList}
     */
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Get loyalty card group for a specific id
     * @param {String} loyaltyCardGroupId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsProductModel} and HTTP response
     */
    getOneWithHttpInfo(loyaltyCardGroupId) {
      let postBody = null;

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling getOne");
      }


      let pathParams = {
        'loyaltyCardGroupId': loyaltyCardGroupId
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
      let returnType = LoyaltyCardgroupsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Cardgroups/{loyaltyCardGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Get loyalty card group for a specific id
     * @param {String} loyaltyCardGroupId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsProductModel}
     */
    getOne(loyaltyCardGroupId) {
      return this.getOneWithHttpInfo(loyaltyCardGroupId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCardgroupsProductModel} and HTTP response
     */
    updateCardGroupWithHttpInfo(loyaltyCardGroupId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling updateCardGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCardGroup");
      }


      let pathParams = {
        'loyaltyCardGroupId': loyaltyCardGroupId
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
      let returnType = LoyaltyCardgroupsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Cardgroups/{loyaltyCardGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Loyalty/Cardgroups/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @param {module:model/LoyaltyCardgroupsDTO} body Loyalty card group properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCardgroupsProductModel}
     */
    updateCardGroup(loyaltyCardGroupId, body) {
      return this.updateCardGroupWithHttpInfo(loyaltyCardGroupId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
