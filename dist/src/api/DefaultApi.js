'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _SecupayTransactionDTOExternalInvoicePdf = require('../model/SecupayTransactionDTOExternalInvoicePdf');

var _SecupayTransactionDTOExternalInvoicePdf2 = _interopRequireDefault(_SecupayTransactionDTOExternalInvoicePdf);

var _SecupayTransactionExternalInvoicePdf = require('../model/SecupayTransactionExternalInvoicePdf');

var _SecupayTransactionExternalInvoicePdf2 = _interopRequireDefault(_SecupayTransactionExternalInvoicePdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Default service.
* @module api/DefaultApi
*/
var DefaultApi = function () {

  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}
   * Assign external invoice pdf
   * @param {String} paymentMethod Payment method (debit, prepay, ...)
   * @param {String} paymentId Payment id
   * @param {String} documentId Document id
   * @param {module:model/SecupayTransactionDTOExternalInvoicePdf} body Request body for assigning external invoice pdf
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionExternalInvoicePdf} and HTTP response
   */


  _createClass(DefaultApi, [{
    key: 'assignExternalInvoicePdfWithHttpInfo',
    value: function assignExternalInvoicePdfWithHttpInfo(paymentMethod, paymentId, documentId, body) {
      var postBody = body;

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling assignExternalInvoicePdf");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling assignExternalInvoicePdf");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling assignExternalInvoicePdf");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assignExternalInvoicePdf");
      }

      var pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId,
        'documentId': documentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionExternalInvoicePdf2.default;

      return this.apiClient.callApi('/Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}
     * Assign external invoice pdf
     * @param {String} paymentMethod Payment method (debit, prepay, ...)
     * @param {String} paymentId Payment id
     * @param {String} documentId Document id
     * @param {module:model/SecupayTransactionDTOExternalInvoicePdf} body Request body for assigning external invoice pdf
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionExternalInvoicePdf}
     */

  }, {
    key: 'assignExternalInvoicePdf',
    value: function assignExternalInvoicePdf(paymentMethod, paymentId, documentId, body) {
      return this.assignExternalInvoicePdfWithHttpInfo(paymentMethod, paymentId, documentId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DefaultApi;
}();

exports.default = DefaultApi;