
import ApiClient from "../ApiClient";
import LoyaltyCustomersDTO from '../model/LoyaltyCustomersDTO';
import LoyaltyMerchantcardsDTO from '../model/LoyaltyMerchantcardsDTO';
import LoyaltyMerchantcardsDTOCardsAmount from '../model/LoyaltyMerchantcardsDTOCardsAmount';
import LoyaltyMerchantcardsDTOCheckPasscode from '../model/LoyaltyMerchantcardsDTOCheckPasscode';
import LoyaltyMerchantcardsDTOCsc from '../model/LoyaltyMerchantcardsDTOCsc';
import LoyaltyMerchantcardsDTOLock from '../model/LoyaltyMerchantcardsDTOLock';
import LoyaltyMerchantcardsDTONewPasscode from '../model/LoyaltyMerchantcardsDTONewPasscode';
import LoyaltyMerchantcardsDTOResetPasscode from '../model/LoyaltyMerchantcardsDTOResetPasscode';
import LoyaltyMerchantcardsDTOTransaction from '../model/LoyaltyMerchantcardsDTOTransaction';
import LoyaltyMerchantcardsDTOValidateMerchantCard from '../model/LoyaltyMerchantcardsDTOValidateMerchantCard';
import LoyaltyMerchantcardsList from '../model/LoyaltyMerchantcardsList';
import LoyaltyMerchantcardsProductModel from '../model/LoyaltyMerchantcardsProductModel';
import LoyaltyMerchantcardsProductWithReceiptModel from '../model/LoyaltyMerchantcardsProductWithReceiptModel';
import LoyaltyMerchantcardsValidateMerchantCard from '../model/LoyaltyMerchantcardsValidateMerchantCard';
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import VirtualTerminalData from '../model/VirtualTerminalData';

/**
* LoyaltyMerchantcards service.
* @module api/LoyaltyMerchantcardsApi
*/
export default class LoyaltyMerchantcardsApi {

    /**
    * Constructs a new LoyaltyMerchantcardsApi. 
    * @alias module:api/LoyaltyMerchantcardsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Loyalty/MerchantCards
     * Add new loyalty merchant card
     * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    addMerchantCardWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addMerchantCard");
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards
     * Add new loyalty merchant card
     * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    addMerchantCard(body) {
      return this.addMerchantCardWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc
     * Check CSC
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOCsc} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    checkCscWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling checkCsc");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling checkCsc");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc
     * Check CSC
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOCsc} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    checkCsc(loyaltyMerchantCardId, body) {
      return this.checkCscWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode
     * Function to check the Passcode card with cardnumber
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOCheckPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    checkPassCodeWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling checkPassCode");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling checkPassCode");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode
     * Function to check the Passcode card with cardnumber
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOCheckPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    checkPassCode(loyaltyMerchantCardId, body) {
      return this.checkPassCodeWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}
     * Function to create multiple merchantcards for given merchant with given cardgroup
     * @param {String} generalMerchantId General merchant id
     * @param {String} loyaltyCardgroupId Loyalty card group id
     * @param {module:model/LoyaltyMerchantcardsDTOCardsAmount} body Cards amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoyaltyMerchantcardsProductModel>} and HTTP response
     */
    createMerchantcardsWithHttpInfo(generalMerchantId, loyaltyCardgroupId, body) {
      let postBody = body;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling createMerchantcards");
      }

      // verify the required parameter 'loyaltyCardgroupId' is set
      if (loyaltyCardgroupId === undefined || loyaltyCardgroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardgroupId' when calling createMerchantcards");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMerchantcards");
      }


      let pathParams = {
        'generalMerchantId': generalMerchantId,
        'loyaltyCardgroupId': loyaltyCardgroupId
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
      let returnType = [LoyaltyMerchantcardsProductModel];

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}
     * Function to create multiple merchantcards for given merchant with given cardgroup
     * @param {String} generalMerchantId General merchant id
     * @param {String} loyaltyCardgroupId Loyalty card group id
     * @param {module:model/LoyaltyMerchantcardsDTOCardsAmount} body Cards amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoyaltyMerchantcardsProductModel>}
     */
    createMerchantcards(generalMerchantId, loyaltyCardgroupId, body) {
      return this.createMerchantcardsWithHttpInfo(generalMerchantId, loyaltyCardgroupId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction
     * Execute transaction from SDK
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOTransaction} body Transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductWithReceiptModel} and HTTP response
     */
    executeTransactionWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling executeTransaction");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeTransaction");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductWithReceiptModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction
     * Execute transaction from SDK
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOTransaction} body Transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductWithReceiptModel}
     */
    executeTransaction(loyaltyMerchantCardId, body) {
      return this.executeTransactionWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/MerchantCards
     * Get a list of loyalty merchant cards
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsList} and HTTP response
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
      let returnType = LoyaltyMerchantcardsList;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/MerchantCards
     * Get a list of loyalty merchant cards
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of items to return.
     * @param {Number} opts.offset The position within the whole result set to start returning items (First element is at 0).
     * @param {String} opts.fields List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
     * @param {String} opts.q A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
     * @param {String} opts.sort String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsList}
     */
    getAll(opts) {
      return this.getAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Get loyalty merchant card lock information for a specific id
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsDTOLock} and HTTP response
     */
    getLockWithHttpInfo(loyaltyMerchantCardId) {
      let postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling getLock");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsDTOLock;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Get loyalty merchant card lock information for a specific id
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsDTOLock}
     */
    getLock(loyaltyMerchantCardId) {
      return this.getLockWithHttpInfo(loyaltyMerchantCardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Get loyalty merchant card for a specific id
     * @param {String} loyaltyMerchantCardId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    getOneWithHttpInfo(loyaltyMerchantCardId) {
      let postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling getOne");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Get loyalty merchant card for a specific id
     * @param {String} loyaltyMerchantCardId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    getOne(loyaltyMerchantCardId) {
      return this.getOneWithHttpInfo(loyaltyMerchantCardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}
     * Get virtual terminal data for merchant
     * @param {String} loyaltyMerchantCardId Merchant card id
     * @param {String} loyaltyMerchantId Merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VirtualTerminalData} and HTTP response
     */
    getVirtualTerminalDataWithHttpInfo(loyaltyMerchantCardId, loyaltyMerchantId) {
      let postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling getVirtualTerminalData");
      }

      // verify the required parameter 'loyaltyMerchantId' is set
      if (loyaltyMerchantId === undefined || loyaltyMerchantId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantId' when calling getVirtualTerminalData");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId,
        'loyaltyMerchantId': loyaltyMerchantId
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
      let returnType = VirtualTerminalData;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}
     * Get virtual terminal data for merchant
     * @param {String} loyaltyMerchantCardId Merchant card id
     * @param {String} loyaltyMerchantId Merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VirtualTerminalData}
     */
    getVirtualTerminalData(loyaltyMerchantCardId, loyaltyMerchantId) {
      return this.getVirtualTerminalDataWithHttpInfo(loyaltyMerchantCardId, loyaltyMerchantId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Lock merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOLock} body Information about lock
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    lockWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling lock");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling lock");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Lock merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOLock} body Information about lock
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    lock(loyaltyMerchantCardId, body) {
      return this.lockWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode
     * Function to save new given passcode for given merchantcard identified by cardnumber
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTONewPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    newPassCodeWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling newPassCode");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling newPassCode");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode
     * Function to save new given passcode for given merchantcard identified by cardnumber
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTONewPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    newPassCode(loyaltyMerchantCardId, body) {
      return this.newPassCodeWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer
     * Register new customer for a card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyCustomersDTO} body Loyalty customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    registerCustomerWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling registerCustomer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling registerCustomer");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer
     * Register new customer for a card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyCustomersDTO} body Loyalty customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    registerCustomer(loyaltyMerchantCardId, body) {
      return this.registerCustomerWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Delete loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    removeMerchantCardWithHttpInfo(loyaltyMerchantCardId) {
      let postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling removeMerchantCard");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * DELETE Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Delete loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    removeMerchantCard(loyaltyMerchantCardId) {
      return this.removeMerchantCardWithHttpInfo(loyaltyMerchantCardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode
     * Function to reset a passcode for given merchantcard
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOResetPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    resetPassCodeWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling resetPassCode");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPassCode");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode
     * Function to reset a passcode for given merchantcard
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOResetPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    resetPassCode(loyaltyMerchantCardId, body) {
      return this.resetPassCodeWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}
     * Set loyalty customer for a loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    setCustomerWithHttpInfo(loyaltyMerchantCardId, loyaltyCustomerId) {
      let postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling setCustomer");
      }

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling setCustomer");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId,
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}
     * Set loyalty customer for a loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    setCustomer(loyaltyMerchantCardId, loyaltyCustomerId) {
      return this.setCustomerWithHttpInfo(loyaltyMerchantCardId, loyaltyCustomerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock
     * Unlock merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOLock} body Information about unlock
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    unlockWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling unlock");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling unlock");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock
     * Unlock merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOLock} body Information about unlock
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    unlock(loyaltyMerchantCardId, body) {
      return this.unlockWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    updateCardGroupOfMerchantCardWithHttpInfo(loyaltyMerchantCardId, loyaltyCardGroupId) {
      let postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling updateCardGroupOfMerchantCard");
      }

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling updateCardGroupOfMerchantCard");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId,
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    updateCardGroupOfMerchantCard(loyaltyMerchantCardId, loyaltyCardGroupId) {
      return this.updateCardGroupOfMerchantCardWithHttpInfo(loyaltyMerchantCardId, loyaltyCardGroupId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Update loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */
    updateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling updateMerchantCard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMerchantCard");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsProductModel;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Update loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */
    updateMerchantCard(loyaltyMerchantCardId, body) {
      return this.updateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard
     * Function to check the merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsValidateMerchantCard} and HTTP response
     */
    validateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body) {
      let postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling validateMerchantCard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validateMerchantCard");
      }


      let pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
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
      let returnType = LoyaltyMerchantcardsValidateMerchantCard;

      return this.apiClient.callApi(
        '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard
     * Function to check the merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsValidateMerchantCard}
     */
    validateMerchantCard(loyaltyMerchantCardId, body) {
      return this.validateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
