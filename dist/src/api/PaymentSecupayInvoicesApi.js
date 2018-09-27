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
* PaymentSecupayInvoices service.
* @module api/PaymentSecupayInvoicesApi
*/
var PaymentSecupayInvoicesApi = function () {

  /**
  * Constructs a new PaymentSecupayInvoicesApi. 
  * @alias module:api/PaymentSecupayInvoicesApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentSecupayInvoicesApi(apiClient) {
    _classCallCheck(this, PaymentSecupayInvoicesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/Secupayinvoices/{paymentInvoiceId}/cancel
   * Function to cancel the transaction
   * @param {String} paymentInvoiceId Payment invoice id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(PaymentSecupayInvoicesApi, [{
    key: 'paymentSecupayInvoicesCancelByIdWithHttpInfo',
    value: function paymentSecupayInvoicesCancelByIdWithHttpInfo(paymentInvoiceId) {
      var postBody = null;

      // verify the required parameter 'paymentInvoiceId' is set
      if (paymentInvoiceId === undefined || paymentInvoiceId === null) {
        throw new Error("Missing the required parameter 'paymentInvoiceId' when calling paymentSecupayInvoicesCancelById");
      }

      var pathParams = {
        'paymentInvoiceId': paymentInvoiceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Payment/Secupayinvoices/{paymentInvoiceId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupayinvoices/{paymentInvoiceId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentInvoiceId Payment invoice id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'paymentSecupayInvoicesCancelById',
    value: function paymentSecupayInvoicesCancelById(paymentInvoiceId) {
      return this.paymentSecupayInvoicesCancelByIdWithHttpInfo(paymentInvoiceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Secupayinvoices/{paymentInvoiceId}
     * Get the details of a payment transaction
     * @param {String} paymentInvoiceId Payment transaction ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupayInvoicesGetByIdWithHttpInfo',
    value: function paymentSecupayInvoicesGetByIdWithHttpInfo(paymentInvoiceId) {
      var postBody = null;

      // verify the required parameter 'paymentInvoiceId' is set
      if (paymentInvoiceId === undefined || paymentInvoiceId === null) {
        throw new Error("Missing the required parameter 'paymentInvoiceId' when calling paymentSecupayInvoicesGetById");
      }

      var pathParams = {
        'paymentInvoiceId': paymentInvoiceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupayinvoices/{paymentInvoiceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Secupayinvoices/{paymentInvoiceId}
     * Get the details of a payment transaction
     * @param {String} paymentInvoiceId Payment transaction ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupayInvoicesGetById',
    value: function paymentSecupayInvoicesGetById(paymentInvoiceId) {
      return this.paymentSecupayInvoicesGetByIdWithHttpInfo(paymentInvoiceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Secupayinvoices
     * Start a invoice payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Invoice payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupayinvoicesPostWithHttpInfo',
    value: function paymentSecupayinvoicesPostWithHttpInfo(opts) {
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

      return this.apiClient.callApi('/Payment/Secupayinvoices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupayinvoices
     * Start a invoice payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Invoice payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupayinvoicesPost',
    value: function paymentSecupayinvoicesPost(opts) {
      return this.paymentSecupayinvoicesPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentSecupayInvoicesApi;
}();

exports.default = PaymentSecupayInvoicesApi;