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
* PaymentSecupayPrepays service.
* @module api/PaymentSecupayPrepaysApi
*/
var PaymentSecupayPrepaysApi = function () {

  /**
  * Constructs a new PaymentSecupayPrepaysApi. 
  * @alias module:api/PaymentSecupayPrepaysApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentSecupayPrepaysApi(apiClient) {
    _classCallCheck(this, PaymentSecupayPrepaysApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
   * Function to cancel the transaction
   * @param {String} paymentPrepayId Payment prepay id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(PaymentSecupayPrepaysApi, [{
    key: 'paymentSecupayPrepaysCancelByIdWithHttpInfo',
    value: function paymentSecupayPrepaysCancelByIdWithHttpInfo(paymentPrepayId) {
      var postBody = null;

      // verify the required parameter 'paymentPrepayId' is set
      if (paymentPrepayId === undefined || paymentPrepayId === null) {
        throw new Error("Missing the required parameter 'paymentPrepayId' when calling paymentSecupayPrepaysCancelById");
      }

      var pathParams = {
        'paymentPrepayId': paymentPrepayId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Payment/Secupayprepays/{paymentPrepayId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
     * Function to cancel the transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'paymentSecupayPrepaysCancelById',
    value: function paymentSecupayPrepaysCancelById(paymentPrepayId) {
      return this.paymentSecupayPrepaysCancelByIdWithHttpInfo(paymentPrepayId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Payment/Secupayprepays/{paymentPrepayId}
     * Get the details of a payment transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupayPrepaysGetByIdWithHttpInfo',
    value: function paymentSecupayPrepaysGetByIdWithHttpInfo(paymentPrepayId) {
      var postBody = null;

      // verify the required parameter 'paymentPrepayId' is set
      if (paymentPrepayId === undefined || paymentPrepayId === null) {
        throw new Error("Missing the required parameter 'paymentPrepayId' when calling paymentSecupayPrepaysGetById");
      }

      var pathParams = {
        'paymentPrepayId': paymentPrepayId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupayprepays/{paymentPrepayId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Secupayprepays/{paymentPrepayId}
     * Get the details of a payment transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupayPrepaysGetById',
    value: function paymentSecupayPrepaysGetById(paymentPrepayId) {
      return this.paymentSecupayPrepaysGetByIdWithHttpInfo(paymentPrepayId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Secupayprepays
     * Start a prepay payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Prepay payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupayprepaysPostWithHttpInfo',
    value: function paymentSecupayprepaysPostWithHttpInfo(opts) {
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

      return this.apiClient.callApi('/Payment/Secupayprepays', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupayprepays
     * Start a prepay payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Prepay payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'paymentSecupayprepaysPost',
    value: function paymentSecupayprepaysPost(opts) {
      return this.paymentSecupayprepaysPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentSecupayPrepaysApi;
}();

exports.default = PaymentSecupayPrepaysApi;