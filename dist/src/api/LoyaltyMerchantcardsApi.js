'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCustomersDTO = require('../model/LoyaltyCustomersDTO');

var _LoyaltyCustomersDTO2 = _interopRequireDefault(_LoyaltyCustomersDTO);

var _LoyaltyMerchantcardsDTO = require('../model/LoyaltyMerchantcardsDTO');

var _LoyaltyMerchantcardsDTO2 = _interopRequireDefault(_LoyaltyMerchantcardsDTO);

var _LoyaltyMerchantcardsDTOCardsAmount = require('../model/LoyaltyMerchantcardsDTOCardsAmount');

var _LoyaltyMerchantcardsDTOCardsAmount2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOCardsAmount);

var _LoyaltyMerchantcardsDTOCheckPasscode = require('../model/LoyaltyMerchantcardsDTOCheckPasscode');

var _LoyaltyMerchantcardsDTOCheckPasscode2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOCheckPasscode);

var _LoyaltyMerchantcardsDTOCsc = require('../model/LoyaltyMerchantcardsDTOCsc');

var _LoyaltyMerchantcardsDTOCsc2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOCsc);

var _LoyaltyMerchantcardsDTOLock = require('../model/LoyaltyMerchantcardsDTOLock');

var _LoyaltyMerchantcardsDTOLock2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOLock);

var _LoyaltyMerchantcardsDTONewPasscode = require('../model/LoyaltyMerchantcardsDTONewPasscode');

var _LoyaltyMerchantcardsDTONewPasscode2 = _interopRequireDefault(_LoyaltyMerchantcardsDTONewPasscode);

var _LoyaltyMerchantcardsDTOResetPasscode = require('../model/LoyaltyMerchantcardsDTOResetPasscode');

var _LoyaltyMerchantcardsDTOResetPasscode2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOResetPasscode);

var _LoyaltyMerchantcardsDTOTransaction = require('../model/LoyaltyMerchantcardsDTOTransaction');

var _LoyaltyMerchantcardsDTOTransaction2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOTransaction);

var _LoyaltyMerchantcardsDTOValidateMerchantCard = require('../model/LoyaltyMerchantcardsDTOValidateMerchantCard');

var _LoyaltyMerchantcardsDTOValidateMerchantCard2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOValidateMerchantCard);

var _LoyaltyMerchantcardsList = require('../model/LoyaltyMerchantcardsList');

var _LoyaltyMerchantcardsList2 = _interopRequireDefault(_LoyaltyMerchantcardsList);

var _LoyaltyMerchantcardsProductModel = require('../model/LoyaltyMerchantcardsProductModel');

var _LoyaltyMerchantcardsProductModel2 = _interopRequireDefault(_LoyaltyMerchantcardsProductModel);

var _LoyaltyMerchantcardsProductWithReceiptModel = require('../model/LoyaltyMerchantcardsProductWithReceiptModel');

var _LoyaltyMerchantcardsProductWithReceiptModel2 = _interopRequireDefault(_LoyaltyMerchantcardsProductWithReceiptModel);

var _LoyaltyMerchantcardsValidateMerchantCard = require('../model/LoyaltyMerchantcardsValidateMerchantCard');

var _LoyaltyMerchantcardsValidateMerchantCard2 = _interopRequireDefault(_LoyaltyMerchantcardsValidateMerchantCard);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _VirtualTerminalData = require('../model/VirtualTerminalData');

var _VirtualTerminalData2 = _interopRequireDefault(_VirtualTerminalData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* LoyaltyMerchantcards service.
* @module api/LoyaltyMerchantcardsApi
*/
var LoyaltyMerchantcardsApi = function () {

  /**
  * Constructs a new LoyaltyMerchantcardsApi. 
  * @alias module:api/LoyaltyMerchantcardsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoyaltyMerchantcardsApi(apiClient) {
    _classCallCheck(this, LoyaltyMerchantcardsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Loyalty/MerchantCards
   * Add new loyalty merchant card
   * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
   */


  _createClass(LoyaltyMerchantcardsApi, [{
    key: 'addMerchantCardWithHttpInfo',
    value: function addMerchantCardWithHttpInfo(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addMerchantCard");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards
     * Add new loyalty merchant card
     * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'addMerchantCard',
    value: function addMerchantCard(body) {
      return this.addMerchantCardWithHttpInfo(body).then(function (response_and_data) {
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

  }, {
    key: 'checkCscWithHttpInfo',
    value: function checkCscWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling checkCsc");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling checkCsc");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc
     * Check CSC
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOCsc} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'checkCsc',
    value: function checkCsc(loyaltyMerchantCardId, body) {
      return this.checkCscWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'checkPassCodeWithHttpInfo',
    value: function checkPassCodeWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling checkPassCode");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling checkPassCode");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode
     * Function to check the Passcode card with cardnumber
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOCheckPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'checkPassCode',
    value: function checkPassCode(loyaltyMerchantCardId, body) {
      return this.checkPassCodeWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'createMerchantcardsWithHttpInfo',
    value: function createMerchantcardsWithHttpInfo(generalMerchantId, loyaltyCardgroupId, body) {
      var postBody = body;

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

      var pathParams = {
        'generalMerchantId': generalMerchantId,
        'loyaltyCardgroupId': loyaltyCardgroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_LoyaltyMerchantcardsProductModel2.default];

      return this.apiClient.callApi('/Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}
     * Function to create multiple merchantcards for given merchant with given cardgroup
     * @param {String} generalMerchantId General merchant id
     * @param {String} loyaltyCardgroupId Loyalty card group id
     * @param {module:model/LoyaltyMerchantcardsDTOCardsAmount} body Cards amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoyaltyMerchantcardsProductModel>}
     */

  }, {
    key: 'createMerchantcards',
    value: function createMerchantcards(generalMerchantId, loyaltyCardgroupId, body) {
      return this.createMerchantcardsWithHttpInfo(generalMerchantId, loyaltyCardgroupId, body).then(function (response_and_data) {
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

  }, {
    key: 'executeTransactionWithHttpInfo',
    value: function executeTransactionWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling executeTransaction");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeTransaction");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductWithReceiptModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction
     * Execute transaction from SDK
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOTransaction} body Transaction properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductWithReceiptModel}
     */

  }, {
    key: 'executeTransaction',
    value: function executeTransaction(loyaltyMerchantCardId, body) {
      return this.executeTransactionWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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
      var returnType = _LoyaltyMerchantcardsList2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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

  }, {
    key: 'getAll',
    value: function getAll(opts) {
      return this.getAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Get loyalty merchant card lock information for a specific id
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsDTOLock} and HTTP response
     */

  }, {
    key: 'getLockWithHttpInfo',
    value: function getLockWithHttpInfo(loyaltyMerchantCardId) {
      var postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling getLock");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsDTOLock2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Get loyalty merchant card lock information for a specific id
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsDTOLock}
     */

  }, {
    key: 'getLock',
    value: function getLock(loyaltyMerchantCardId) {
      return this.getLockWithHttpInfo(loyaltyMerchantCardId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Get loyalty merchant card for a specific id
     * @param {String} loyaltyMerchantCardId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */

  }, {
    key: 'getOneWithHttpInfo',
    value: function getOneWithHttpInfo(loyaltyMerchantCardId) {
      var postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling getOne");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Get loyalty merchant card for a specific id
     * @param {String} loyaltyMerchantCardId Search one by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'getOne',
    value: function getOne(loyaltyMerchantCardId) {
      return this.getOneWithHttpInfo(loyaltyMerchantCardId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/MerchantCards/{generalMerchantId}/merchantcard/{loyaltyCardId}
     * Get raw merchant card id for merchant id and card id
     * @param {String} generalMerchantId Merchant id
     * @param {String} loyaltyCardId Card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'getRawMerchantCardIdWithHttpInfo',
    value: function getRawMerchantCardIdWithHttpInfo(generalMerchantId, loyaltyCardId) {
      var postBody = null;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling getRawMerchantCardId");
      }

      // verify the required parameter 'loyaltyCardId' is set
      if (loyaltyCardId === undefined || loyaltyCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardId' when calling getRawMerchantCardId");
      }

      var pathParams = {
        'generalMerchantId': generalMerchantId,
        'loyaltyCardId': loyaltyCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{generalMerchantId}/merchantcard/{loyaltyCardId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/MerchantCards/{generalMerchantId}/merchantcard/{loyaltyCardId}
     * Get raw merchant card id for merchant id and card id
     * @param {String} generalMerchantId Merchant id
     * @param {String} loyaltyCardId Card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'getRawMerchantCardId',
    value: function getRawMerchantCardId(generalMerchantId, loyaltyCardId) {
      return this.getRawMerchantCardIdWithHttpInfo(generalMerchantId, loyaltyCardId).then(function (response_and_data) {
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

  }, {
    key: 'getVirtualTerminalDataWithHttpInfo',
    value: function getVirtualTerminalDataWithHttpInfo(loyaltyMerchantCardId, loyaltyMerchantId) {
      var postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling getVirtualTerminalData");
      }

      // verify the required parameter 'loyaltyMerchantId' is set
      if (loyaltyMerchantId === undefined || loyaltyMerchantId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantId' when calling getVirtualTerminalData");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId,
        'loyaltyMerchantId': loyaltyMerchantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _VirtualTerminalData2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}
     * Get virtual terminal data for merchant
     * @param {String} loyaltyMerchantCardId Merchant card id
     * @param {String} loyaltyMerchantId Merchant id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VirtualTerminalData}
     */

  }, {
    key: 'getVirtualTerminalData',
    value: function getVirtualTerminalData(loyaltyMerchantCardId, loyaltyMerchantId) {
      return this.getVirtualTerminalDataWithHttpInfo(loyaltyMerchantCardId, loyaltyMerchantId).then(function (response_and_data) {
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

  }, {
    key: 'lockWithHttpInfo',
    value: function lockWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling lock");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling lock");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
     * Lock merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOLock} body Information about lock
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'lock',
    value: function lock(loyaltyMerchantCardId, body) {
      return this.lockWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'newPassCodeWithHttpInfo',
    value: function newPassCodeWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling newPassCode");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling newPassCode");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode
     * Function to save new given passcode for given merchantcard identified by cardnumber
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTONewPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'newPassCode',
    value: function newPassCode(loyaltyMerchantCardId, body) {
      return this.newPassCodeWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'registerCustomerWithHttpInfo',
    value: function registerCustomerWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling registerCustomer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling registerCustomer");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer
     * Register new customer for a card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyCustomersDTO} body Loyalty customer properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'registerCustomer',
    value: function registerCustomer(loyaltyMerchantCardId, body) {
      return this.registerCustomerWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * DELETE Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Delete loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyMerchantcardsProductModel} and HTTP response
     */

  }, {
    key: 'removeMerchantCardWithHttpInfo',
    value: function removeMerchantCardWithHttpInfo(loyaltyMerchantCardId) {
      var postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling removeMerchantCard");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * DELETE Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Delete loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'removeMerchantCard',
    value: function removeMerchantCard(loyaltyMerchantCardId) {
      return this.removeMerchantCardWithHttpInfo(loyaltyMerchantCardId).then(function (response_and_data) {
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

  }, {
    key: 'resetPassCodeWithHttpInfo',
    value: function resetPassCodeWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling resetPassCode");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPassCode");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode
     * Function to reset a passcode for given merchantcard
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOResetPasscode} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'resetPassCode',
    value: function resetPassCode(loyaltyMerchantCardId, body) {
      return this.resetPassCodeWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'setCustomerWithHttpInfo',
    value: function setCustomerWithHttpInfo(loyaltyMerchantCardId, loyaltyCustomerId) {
      var postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling setCustomer");
      }

      // verify the required parameter 'loyaltyCustomerId' is set
      if (loyaltyCustomerId === undefined || loyaltyCustomerId === null) {
        throw new Error("Missing the required parameter 'loyaltyCustomerId' when calling setCustomer");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId,
        'loyaltyCustomerId': loyaltyCustomerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}
     * Set loyalty customer for a loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {String} loyaltyCustomerId Loyalty customer id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'setCustomer',
    value: function setCustomer(loyaltyMerchantCardId, loyaltyCustomerId) {
      return this.setCustomerWithHttpInfo(loyaltyMerchantCardId, loyaltyCustomerId).then(function (response_and_data) {
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

  }, {
    key: 'unlockWithHttpInfo',
    value: function unlockWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling unlock");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling unlock");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock
     * Unlock merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOLock} body Information about unlock
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'unlock',
    value: function unlock(loyaltyMerchantCardId, body) {
      return this.unlockWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'updateCardGroupOfMerchantCardWithHttpInfo',
    value: function updateCardGroupOfMerchantCardWithHttpInfo(loyaltyMerchantCardId, loyaltyCardGroupId) {
      var postBody = null;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling updateCardGroupOfMerchantCard");
      }

      // verify the required parameter 'loyaltyCardGroupId' is set
      if (loyaltyCardGroupId === undefined || loyaltyCardGroupId === null) {
        throw new Error("Missing the required parameter 'loyaltyCardGroupId' when calling updateCardGroupOfMerchantCard");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId,
        'loyaltyCardGroupId': loyaltyCardGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}
     * Update loyalty card group
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {String} loyaltyCardGroupId Loyalty card group id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'updateCardGroupOfMerchantCard',
    value: function updateCardGroupOfMerchantCard(loyaltyMerchantCardId, loyaltyCardGroupId) {
      return this.updateCardGroupOfMerchantCardWithHttpInfo(loyaltyMerchantCardId, loyaltyCardGroupId).then(function (response_and_data) {
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

  }, {
    key: 'updateMerchantCardWithHttpInfo',
    value: function updateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling updateMerchantCard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMerchantCard");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsProductModel2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}
     * Update loyalty merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTO} body Loyalty merchant card properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsProductModel}
     */

  }, {
    key: 'updateMerchantCard',
    value: function updateMerchantCard(loyaltyMerchantCardId, body) {
      return this.updateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
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

  }, {
    key: 'validateMerchantCardWithHttpInfo',
    value: function validateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body) {
      var postBody = body;

      // verify the required parameter 'loyaltyMerchantCardId' is set
      if (loyaltyMerchantCardId === undefined || loyaltyMerchantCardId === null) {
        throw new Error("Missing the required parameter 'loyaltyMerchantCardId' when calling validateMerchantCard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validateMerchantCard");
      }

      var pathParams = {
        'loyaltyMerchantCardId': loyaltyMerchantCardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _LoyaltyMerchantcardsValidateMerchantCard2.default;

      return this.apiClient.callApi('/Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard
     * Function to check the merchant card
     * @param {String} loyaltyMerchantCardId Loyalty merchant card id
     * @param {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} body Information about card
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyMerchantcardsValidateMerchantCard}
     */

  }, {
    key: 'validateMerchantCard',
    value: function validateMerchantCard(loyaltyMerchantCardId, body) {
      return this.validateMerchantCardWithHttpInfo(loyaltyMerchantCardId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoyaltyMerchantcardsApi;
}();

exports.default = LoyaltyMerchantcardsApi;