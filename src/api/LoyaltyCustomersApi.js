
import ApiClient from "../ApiClient";
import LoyaltyCustomersDTO from '../model/LoyaltyCustomersDTO';
import LoyaltyCustomersList from '../model/LoyaltyCustomersList';
import LoyaltyCustomersProductModel from '../model/LoyaltyCustomersProductModel';
import LoyaltyCustomersRemoved from '../model/LoyaltyCustomersRemoved';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* LoyaltyCustomers service.
* @module api/LoyaltyCustomersApi
* @version 2.0.0
*/
export default class LoyaltyCustomersApi {

    /**
    * Constructs a new LoyaltyCustomersApi. 
    * @alias module:api/LoyaltyCustomersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Loyalty/Customers
     * Add loyalty customer
     * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
     */
    addCustomerWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCustomer");
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
      let returnType = LoyaltyCustomersProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Customers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/Customers
     * Add loyalty customer
     * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */
    addCustomer(body) {
      return this.addCustomerWithHttpInfo(body)
        .then(function(response_and_data) {
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
    assignPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId) {
      let postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling assignPaymentContainer");
      }

      // verify the required parameter 'loyaltyPaymentContainerId' is set
      if (loyaltyPaymentContainerId === undefined || loyaltyPaymentContainerId === null) {
        throw new Error("Missing the required parameter 'loyaltyPaymentContainerId' when calling assignPaymentContainer");
      }


      let pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId,
        'loyaltyPaymentContainerId': loyaltyPaymentContainerId
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
      let returnType = LoyaltyCustomersProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}
     * Assigns LoyaltyPaymentContainer to customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @param {String} loyaltyPaymentContainerId LoyaltyPaymentContainer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */
    assignPaymentContainer(loyaltyCustomerId, loyaltyPaymentContainerId) {
      return this.assignPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/checkDuplicated/
     * check if there are duplicated customers for a given merchant
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    checkForDuplicatesWithHttpInfo(loyaltyCustomerId) {
      let postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling checkForDuplicates");
      }


      let pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
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
        '/Loyalty/Customers/{loyaltyCustomerId}/checkDuplicated/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/Customers/{loyaltyCustomerId}/checkDuplicated/
     * check if there are duplicated customers for a given merchant
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    checkForDuplicates(loyaltyCustomerId) {
      return this.checkForDuplicatesWithHttpInfo(loyaltyCustomerId)
        .then(function(response_and_data) {
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
      let returnType = LoyaltyCustomersList;

      return this.apiClient.callApi(
        '/Loyalty/Customers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/Customers/{loyaltyCustomerId}
     * Get loyalty customer for a specific id
     * @param {String} loyaltyCustomerId Search one loyalty customer by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersProductModel} and HTTP response
     */
    getOneWithHttpInfo(loyaltyCustomerId) {
      let postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling getOne");
      }


      let pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
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
      let returnType = LoyaltyCustomersProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Customers/{loyaltyCustomerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/Customers/{loyaltyCustomerId}
     * Get loyalty customer for a specific id
     * @param {String} loyaltyCustomerId Search one loyalty customer by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */
    getOne(loyaltyCustomerId) {
      return this.getOneWithHttpInfo(loyaltyCustomerId)
        .then(function(response_and_data) {
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
    removeAssignedPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId) {
      let postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling removeAssignedPaymentContainer");
      }

      // verify the required parameter 'loyaltyPaymentContainerId' is set
      if (loyaltyPaymentContainerId === undefined || loyaltyPaymentContainerId === null) {
        throw new Error("Missing the required parameter 'loyaltyPaymentContainerId' when calling removeAssignedPaymentContainer");
      }


      let pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId,
        'loyaltyPaymentContainerId': loyaltyPaymentContainerId
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
      let returnType = LoyaltyCustomersProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}
     * Removes an assigned LoyaltyPaymentContainer from customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @param {String} loyaltyPaymentContainerId LoyaltyPaymentContainer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */
    removeAssignedPaymentContainer(loyaltyCustomerId, loyaltyPaymentContainerId) {
      return this.removeAssignedPaymentContainerWithHttpInfo(loyaltyCustomerId, loyaltyPaymentContainerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}
     * Remove assigned loyalty customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyCustomersRemoved} and HTTP response
     */
    removeCustomerWithHttpInfo(loyaltyCustomerId) {
      let postBody = null;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling removeCustomer");
      }


      let pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
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
      let returnType = LoyaltyCustomersRemoved;

      return this.apiClient.callApi(
        '/Loyalty/Customers/{loyaltyCustomerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Loyalty/Customers/{loyaltyCustomerId}
     * Remove assigned loyalty customer
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersRemoved}
     */
    removeCustomer(loyaltyCustomerId) {
      return this.removeCustomerWithHttpInfo(loyaltyCustomerId)
        .then(function(response_and_data) {
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
    updateCustomerWithHttpInfo(loyaltyCustomerId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling updateCustomer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomer");
      }


      let pathParams = {
        'loyaltyCustomerId': loyaltyCustomerId
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
      let returnType = LoyaltyCustomersProductModel;

      return this.apiClient.callApi(
        '/Loyalty/Customers/{loyaltyCustomerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Loyalty/Customers/{loyaltyCustomerId}
     * Function to update customer&#39;s data
     * @param {String} loyaltyCustomerId loyalty Customer Id CUS_XXX
     * @param {module:model/LoyaltyCustomersDTO} body loyalty Customer container properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyCustomersProductModel}
     */
    updateCustomer(loyaltyCustomerId, body) {
      return this.updateCustomerWithHttpInfo(loyaltyCustomerId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
