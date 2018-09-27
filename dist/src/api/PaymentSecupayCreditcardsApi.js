'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _SecupayTransactionProductDTO = require('../model/SecupayTransactionProductDTO');

var _SecupayTransactionProductDTO2 = _interopRequireDefault(_SecupayTransactionProductDTO);

var _SecupayTransactionProductModel = require('../model/SecupayTransactionProductModel');

var _SecupayTransactionProductModel2 = _interopRequireDefault(_SecupayTransactionProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PaymentSecupayCreditcards service.
* @module api/PaymentSecupayCreditcardsApi
*/
var PaymentSecupayCreditcardsApi = function () {

  /**
  * Constructs a new PaymentSecupayCreditcardsApi. 
  * @alias module:api/PaymentSecupayCreditcardsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentSecupayCreditcardsApi(apiClient) {
    _classCallCheck(this, PaymentSecupayCreditcardsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/Secupaycreditcards/{paymentCreditCardsId}/cancel
   * Function to cancel the transaction
   * @param {String} paymentCreditCardsId Payment credit cards id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(PaymentSecupayCreditcardsApi, [{
    key: 'paymentSecupayCreditcardsCancelByIdWithHttpInfo',
    value: function paymentSecupayCreditcardsCancelByIdWithHttpInfo(paymentCreditCardsId) {
      var postBody = null;

      // verify the required parameter 'paymentCreditCardsId' is set
      if (paymentCreditCardsId === undefined || paymentCreditCardsId === null) {
        throw new Error("Missing the required parameter 'paymentCreditCardsId' when calling paymentSecupayCreditcardsCancelById");
      }

      var pathParams = {
        'paymentCreditCardsId': paymentCreditCardsId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Payment/Secupaycreditcards/{paymentCreditCardsId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupaycreditcards/{paymentCreditCardsId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'paymentSecupayCreditcardsCancelById',
    value: function paymentSecupayCreditcardsCancelById(paymentCreditCardsId) {
      return this.paymentSecupayCreditcardsCancelByIdWithHttpInfo(paymentCreditCardsId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Secupaycreditcards/{paymentCreditCardsId}
     * Get the details of a payment transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupayCreditcardsGetByIdWithHttpInfo',
    value: function paymentSecupayCreditcardsGetByIdWithHttpInfo(paymentCreditCardsId) {
      var postBody = null;

      // verify the required parameter 'paymentCreditCardsId' is set
      if (paymentCreditCardsId === undefined || paymentCreditCardsId === null) {
        throw new Error("Missing the required parameter 'paymentCreditCardsId' when calling paymentSecupayCreditcardsGetById");
      }

      var pathParams = {
        'paymentCreditCardsId': paymentCreditCardsId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupaycreditcards/{paymentCreditCardsId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Secupaycreditcards/{paymentCreditCardsId}
     * Get the details of a payment transaction
     * @param {String} paymentCreditCardsId Payment credit cards id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupayCreditcardsGetById',
    value: function paymentSecupayCreditcardsGetById(paymentCreditCardsId) {
      return this.paymentSecupayCreditcardsGetByIdWithHttpInfo(paymentCreditCardsId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Secupaycreditcards
     * Start a credit card payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Credit card payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupaycreditcardsPostWithHttpInfo',
    value: function paymentSecupaycreditcardsPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupaycreditcards', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupaycreditcards
     * Start a credit card payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Credit card payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupaycreditcardsPost',
    value: function paymentSecupaycreditcardsPost(opts) {
      return this.paymentSecupaycreditcardsPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentSecupayCreditcardsApi;
}();

exports.default = PaymentSecupayCreditcardsApi;