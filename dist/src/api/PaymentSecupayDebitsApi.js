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
* PaymentSecupayDebits service.
* @module api/PaymentSecupayDebitsApi
*/
var PaymentSecupayDebitsApi = function () {

  /**
  * Constructs a new PaymentSecupayDebitsApi. 
  * @alias module:api/PaymentSecupayDebitsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentSecupayDebitsApi(apiClient) {
    _classCallCheck(this, PaymentSecupayDebitsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/Secupaydebits/{paymentDebitId}/cancel
   * Function to cancel the transaction
   * @param {String} paymentDebitId Payment debit id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(PaymentSecupayDebitsApi, [{
    key: 'paymentSecupayDebitsCancelByIdWithHttpInfo',
    value: function paymentSecupayDebitsCancelByIdWithHttpInfo(paymentDebitId) {
      var postBody = null;

      // verify the required parameter 'paymentDebitId' is set
      if (paymentDebitId === undefined || paymentDebitId === null) {
        throw new Error("Missing the required parameter 'paymentDebitId' when calling paymentSecupayDebitsCancelById");
      }

      var pathParams = {
        'paymentDebitId': paymentDebitId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Payment/Secupaydebits/{paymentDebitId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupaydebits/{paymentDebitId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'paymentSecupayDebitsCancelById',
    value: function paymentSecupayDebitsCancelById(paymentDebitId) {
      return this.paymentSecupayDebitsCancelByIdWithHttpInfo(paymentDebitId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Secupaydebits/{paymentDebitId}
     * Get the details of a payment transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupayDebitsGetByIdWithHttpInfo',
    value: function paymentSecupayDebitsGetByIdWithHttpInfo(paymentDebitId) {
      var postBody = null;

      // verify the required parameter 'paymentDebitId' is set
      if (paymentDebitId === undefined || paymentDebitId === null) {
        throw new Error("Missing the required parameter 'paymentDebitId' when calling paymentSecupayDebitsGetById");
      }

      var pathParams = {
        'paymentDebitId': paymentDebitId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupaydebits/{paymentDebitId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Secupaydebits/{paymentDebitId}
     * Get the details of a payment transaction
     * @param {String} paymentDebitId Payment debit id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupayDebitsGetById',
    value: function paymentSecupayDebitsGetById(paymentDebitId) {
      return this.paymentSecupayDebitsGetByIdWithHttpInfo(paymentDebitId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Secupaydebits
     * Start a debit payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Debit payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupaydebitsPostWithHttpInfo',
    value: function paymentSecupaydebitsPostWithHttpInfo(opts) {
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

      return this.apiClient.callApi('/Payment/Secupaydebits', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupaydebits
     * Start a debit payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Debit payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupaydebitsPost',
    value: function paymentSecupaydebitsPost(opts) {
      return this.paymentSecupaydebitsPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentSecupayDebitsApi;
}();

exports.default = PaymentSecupayDebitsApi;