'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _SecupayPayoutDTO = require('../model/SecupayPayoutDTO');

var _SecupayPayoutDTO2 = _interopRequireDefault(_SecupayPayoutDTO);

var _SecupayPayoutProductModel = require('../model/SecupayPayoutProductModel');

var _SecupayPayoutProductModel2 = _interopRequireDefault(_SecupayPayoutProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PaymentSecupayPayout service.
* @module api/PaymentSecupayPayoutApi
*/
var PaymentSecupayPayoutApi = function () {

  /**
  * Constructs a new PaymentSecupayPayoutApi. 
  * @alias module:api/PaymentSecupayPayoutApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentSecupayPayoutApi(apiClient) {
    _classCallCheck(this, PaymentSecupayPayoutApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * GET Payment/Secupaypayout/{paymentPayoutId}
   * Get the details of a payment transaction
   * @param {String} paymentPayoutId Payment payout id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayPayoutProductModel} and HTTP response
   */


  _createClass(PaymentSecupayPayoutApi, [{
    key: 'getSecupaypayoutWithHttpInfo',
    value: function getSecupaypayoutWithHttpInfo(paymentPayoutId) {
      var postBody = null;

      // verify the required parameter 'paymentPayoutId' is set
      if (paymentPayoutId === undefined || paymentPayoutId === null) {
        throw new Error("Missing the required parameter 'paymentPayoutId' when calling getSecupaypayout");
      }

      var pathParams = {
        'paymentPayoutId': paymentPayoutId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayPayoutProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupaypayout/{paymentPayoutId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Payment/Secupaypayout/{paymentPayoutId}
     * Get the details of a payment transaction
     * @param {String} paymentPayoutId Payment payout id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayPayoutProductModel}
     */

  }, {
    key: 'getSecupaypayout',
    value: function getSecupaypayout(paymentPayoutId) {
      return this.getSecupaypayoutWithHttpInfo(paymentPayoutId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Secupaypayout
     * Start a payout transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayPayoutDTO} opts.body Payout payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayPayoutProductModel} and HTTP response
     */

  }, {
    key: 'paymentSecupaypayoutPostWithHttpInfo',
    value: function paymentSecupaypayoutPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayPayoutProductModel2.default;

      return this.apiClient.callApi('/Payment/Secupaypayout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/Secupaypayout
     * Start a payout transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayPayoutDTO} opts.body Payout payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayPayoutProductModel}
     */

  }, {
    key: 'paymentSecupaypayoutPost',
    value: function paymentSecupaypayoutPost(opts) {
      return this.paymentSecupaypayoutPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentSecupayPayoutApi;
}();

exports.default = PaymentSecupayPayoutApi;