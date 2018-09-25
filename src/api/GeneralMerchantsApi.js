
import ApiClient from "../ApiClient";
import GeneralMerchantsDTO from '../model/GeneralMerchantsDTO';
import GeneralMerchantsList from '../model/GeneralMerchantsList';
import GeneralMerchantsProductModel from '../model/GeneralMerchantsProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* GeneralMerchants service.
* @module api/GeneralMerchantsApi
* @version 2.0.0
*/
export default class GeneralMerchantsApi {

    /**
    * Constructs a new GeneralMerchantsApi. 
    * @alias module:api/GeneralMerchantsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET General/Merchants
     * Get a list of general merchants
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsList} and HTTP response
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
      let returnType = GeneralMerchantsList;

      return this.apiClient.callApi(
        '/General/Merchants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET General/Merchants
     * Get a list of general merchants
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsList}
     */
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET General/Merchants/{generalMerchantId}
     * Get one general merchant for a specific id
     * @param {String} generalMerchantId General merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsProductModel} and HTTP response
     */
    getOneWithHttpInfo(generalMerchantId) {
      let postBody = null;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling getOne");
      }


      let pathParams = {
        'generalMerchantId': generalMerchantId
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
      let returnType = GeneralMerchantsProductModel;

      return this.apiClient.callApi(
        '/General/Merchants/{generalMerchantId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET General/Merchants/{generalMerchantId}
     * Get one general merchant for a specific id
     * @param {String} generalMerchantId General merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsProductModel}
     */
    getOne(generalMerchantId) {
      return this.getOneWithHttpInfo(generalMerchantId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT General/Merchants/{generalMerchantId}
     * Update general merchant
     * @param {String} generalMerchantId General merchant id
     * @param {module:model/GeneralMerchantsDTO} body General merchant properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralMerchantsProductModel} and HTTP response
     */
    updateMerchantWithHttpInfo(generalMerchantId, body) {
      let postBody = body;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling updateMerchant");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMerchant");
      }


      let pathParams = {
        'generalMerchantId': generalMerchantId
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
      let returnType = GeneralMerchantsProductModel;

      return this.apiClient.callApi(
        '/General/Merchants/{generalMerchantId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT General/Merchants/{generalMerchantId}
     * Update general merchant
     * @param {String} generalMerchantId General merchant id
     * @param {module:model/GeneralMerchantsDTO} body General merchant properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralMerchantsProductModel}
     */
    updateMerchant(generalMerchantId, body) {
      return this.updateMerchantWithHttpInfo(generalMerchantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
