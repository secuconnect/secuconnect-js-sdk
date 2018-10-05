'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

var _SecupayTransactionCancelDTO = require('../model/SecupayTransactionCancelDTO');

var _SecupayTransactionCancelDTO2 = _interopRequireDefault(_SecupayTransactionCancelDTO);

var _SecupayTransactionCaptureDTO = require('../model/SecupayTransactionCaptureDTO');

var _SecupayTransactionCaptureDTO2 = _interopRequireDefault(_SecupayTransactionCaptureDTO);

var _SecupayTransactionDTOExternalInvoicePdf = require('../model/SecupayTransactionDTOExternalInvoicePdf');

var _SecupayTransactionDTOExternalInvoicePdf2 = _interopRequireDefault(_SecupayTransactionDTOExternalInvoicePdf);

var _SecupayTransactionExternalInvoicePdf = require('../model/SecupayTransactionExternalInvoicePdf');

var _SecupayTransactionExternalInvoicePdf2 = _interopRequireDefault(_SecupayTransactionExternalInvoicePdf);

var _SecupayTransactionProductDTO = require('../model/SecupayTransactionProductDTO');

var _SecupayTransactionProductDTO2 = _interopRequireDefault(_SecupayTransactionProductDTO);

var _SecupayTransactionProductModel = require('../model/SecupayTransactionProductModel');

var _SecupayTransactionProductModel2 = _interopRequireDefault(_SecupayTransactionProductModel);

var _SecupayTransactionReverseAccrualDTO = require('../model/SecupayTransactionReverseAccrualDTO');

var _SecupayTransactionReverseAccrualDTO2 = _interopRequireDefault(_SecupayTransactionReverseAccrualDTO);

var _SecupayTransactionSetShippingInformationDTO = require('../model/SecupayTransactionSetShippingInformationDTO');

var _SecupayTransactionSetShippingInformationDTO2 = _interopRequireDefault(_SecupayTransactionSetShippingInformationDTO);

var _SecupayTransactionUpdateBasketDTO = require('../model/SecupayTransactionUpdateBasketDTO');

var _SecupayTransactionUpdateBasketDTO2 = _interopRequireDefault(_SecupayTransactionUpdateBasketDTO);

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
   * POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}
   * Assign external invoice pdf
   * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
   * @param {String} paymentId Payment id
   * @param {String} documentId Document id
   * @param {module:model/SecupayTransactionDTOExternalInvoicePdf} body Request body for assigning external invoice pdf
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionExternalInvoicePdf} and HTTP response
   */


  _createClass(PaymentSecupayPrepaysApi, [{
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
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
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

    /**
     * POST Payment/{paymentMethod}/{paymentId}/cancel
     * Function to cancel the payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionCancelDTO} opts.body Cancel payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'cancelPaymentTransactionByIdWithHttpInfo',
    value: function cancelPaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling cancelPaymentTransactionById");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling cancelPaymentTransactionById");
      }

      var pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Payment/{paymentMethod}/{paymentId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/{paymentMethod}/{paymentId}/cancel
     * Function to cancel the payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionCancelDTO} opts.body Cancel payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'cancelPaymentTransactionById',
    value: function cancelPaymentTransactionById(paymentMethod, paymentId, opts) {
      return this.cancelPaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/{paymentMethod}/{paymentId}/capture
     * Function to cancel the payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionCaptureDTO} opts.body Capture payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'capturePaymentTransactionByIdWithHttpInfo',
    value: function capturePaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling capturePaymentTransactionById");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling capturePaymentTransactionById");
      }

      var pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/{paymentMethod}/{paymentId}/capture', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Payment/{paymentMethod}/{paymentId}/capture
     * Function to cancel the payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionCaptureDTO} opts.body Capture payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'capturePaymentTransactionById',
    value: function capturePaymentTransactionById(paymentMethod, paymentId, opts) {
      return this.capturePaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
     * DEPRECATED: use cancelPaymentTransactionById
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
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
     * DEPRECATED: use cancelPaymentTransactionById
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

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/accrual
     * Update the accrual flag of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionReverseAccrualDTO} body Reverse accrual input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'reverseAccrualByPaymentIdWithHttpInfo',
    value: function reverseAccrualByPaymentIdWithHttpInfo(paymentMethod, paymentId, body) {
      var postBody = body;

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling reverseAccrualByPaymentId");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling reverseAccrualByPaymentId");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling reverseAccrualByPaymentId");
      }

      var pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/{paymentMethod}/{paymentId}/accrual', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/accrual
     * Update the accrual flag of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionReverseAccrualDTO} body Reverse accrual input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'reverseAccrualByPaymentId',
    value: function reverseAccrualByPaymentId(paymentMethod, paymentId, body) {
      return this.reverseAccrualByPaymentIdWithHttpInfo(paymentMethod, paymentId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/shippingInformation
     * Update the accrual flag of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionSetShippingInformationDTO} body Shipping information properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'setShippingInformationByPaymentIdWithHttpInfo',
    value: function setShippingInformationByPaymentIdWithHttpInfo(paymentMethod, paymentId, body) {
      var postBody = body;

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling setShippingInformationByPaymentId");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling setShippingInformationByPaymentId");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setShippingInformationByPaymentId");
      }

      var pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/{paymentMethod}/{paymentId}/shippingInformation', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/shippingInformation
     * Update the accrual flag of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionSetShippingInformationDTO} body Shipping information properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'setShippingInformationByPaymentId',
    value: function setShippingInformationByPaymentId(paymentMethod, paymentId, body) {
      return this.setShippingInformationByPaymentIdWithHttpInfo(paymentMethod, paymentId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/basket
     * Update a basket of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionUpdateBasketDTO} body Update basket input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */

  }, {
    key: 'updateBasketByPaymentIdWithHttpInfo',
    value: function updateBasketByPaymentIdWithHttpInfo(paymentMethod, paymentId, body) {
      var postBody = body;

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling updateBasketByPaymentId");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling updateBasketByPaymentId");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBasketByPaymentId");
      }

      var pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _SecupayTransactionProductModel2.default;

      return this.apiClient.callApi('/Payment/{paymentMethod}/{paymentId}/basket', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/basket
     * Update a basket of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionUpdateBasketDTO} body Update basket input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */

  }, {
    key: 'updateBasketByPaymentId',
    value: function updateBasketByPaymentId(paymentMethod, paymentId, body) {
      return this.updateBasketByPaymentIdWithHttpInfo(paymentMethod, paymentId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentSecupayPrepaysApi;
}();

exports.default = PaymentSecupayPrepaysApi;