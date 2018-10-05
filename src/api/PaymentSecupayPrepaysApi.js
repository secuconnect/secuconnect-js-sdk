
import ApiClient from "../ApiClient";
import ProductExceptionPayload from '../model/ProductExceptionPayload';
import SecupayTransactionCancelDTO from '../model/SecupayTransactionCancelDTO';
import SecupayTransactionCaptureDTO from '../model/SecupayTransactionCaptureDTO';
import SecupayTransactionDTOExternalInvoicePdf from '../model/SecupayTransactionDTOExternalInvoicePdf';
import SecupayTransactionExternalInvoicePdf from '../model/SecupayTransactionExternalInvoicePdf';
import SecupayTransactionProductDTO from '../model/SecupayTransactionProductDTO';
import SecupayTransactionProductModel from '../model/SecupayTransactionProductModel';
import SecupayTransactionReverseAccrualDTO from '../model/SecupayTransactionReverseAccrualDTO';
import SecupayTransactionSetShippingInformationDTO from '../model/SecupayTransactionSetShippingInformationDTO';
import SecupayTransactionUpdateBasketDTO from '../model/SecupayTransactionUpdateBasketDTO';

/**
* PaymentSecupayPrepays service.
* @module api/PaymentSecupayPrepaysApi
*/
export default class PaymentSecupayPrepaysApi {

    /**
    * Constructs a new PaymentSecupayPrepaysApi. 
    * @alias module:api/PaymentSecupayPrepaysApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    assignExternalInvoicePdfWithHttpInfo(paymentMethod, paymentId, documentId, body) {
      let postBody = body;

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


      let pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId,
        'documentId': documentId
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
      let returnType = SecupayTransactionExternalInvoicePdf;

      return this.apiClient.callApi(
        '/Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    assignExternalInvoicePdf(paymentMethod, paymentId, documentId, body) {
      return this.assignExternalInvoicePdfWithHttpInfo(paymentMethod, paymentId, documentId, body)
        .then(function(response_and_data) {
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
    cancelPaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling cancelPaymentTransactionById");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling cancelPaymentTransactionById");
      }


      let pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
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
        '/Payment/{paymentMethod}/{paymentId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    cancelPaymentTransactionById(paymentMethod, paymentId, opts) {
      return this.cancelPaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts)
        .then(function(response_and_data) {
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
    capturePaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'paymentMethod' is set
      if (paymentMethod === undefined || paymentMethod === null) {
        throw new Error("Missing the required parameter 'paymentMethod' when calling capturePaymentTransactionById");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling capturePaymentTransactionById");
      }


      let pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/{paymentMethod}/{paymentId}/capture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    capturePaymentTransactionById(paymentMethod, paymentId, opts) {
      return this.capturePaymentTransactionByIdWithHttpInfo(paymentMethod, paymentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
     * DEPRECATED: use cancelPaymentTransactionById
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    paymentSecupayPrepaysCancelByIdWithHttpInfo(paymentPrepayId) {
      let postBody = null;

      // verify the required parameter 'paymentPrepayId' is set
      if (paymentPrepayId === undefined || paymentPrepayId === null) {
        throw new Error("Missing the required parameter 'paymentPrepayId' when calling paymentSecupayPrepaysCancelById");
      }


      let pathParams = {
        'paymentPrepayId': paymentPrepayId
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
        '/Payment/Secupayprepays/{paymentPrepayId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupayprepays/{paymentPrepayId}/cancel
     * DEPRECATED: use cancelPaymentTransactionById
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    paymentSecupayPrepaysCancelById(paymentPrepayId) {
      return this.paymentSecupayPrepaysCancelByIdWithHttpInfo(paymentPrepayId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Payment/Secupayprepays/{paymentPrepayId}
     * Get the details of a payment transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecupayTransactionProductModel} and HTTP response
     */
    paymentSecupayPrepaysGetByIdWithHttpInfo(paymentPrepayId) {
      let postBody = null;

      // verify the required parameter 'paymentPrepayId' is set
      if (paymentPrepayId === undefined || paymentPrepayId === null) {
        throw new Error("Missing the required parameter 'paymentPrepayId' when calling paymentSecupayPrepaysGetById");
      }


      let pathParams = {
        'paymentPrepayId': paymentPrepayId
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/Secupayprepays/{paymentPrepayId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GET Payment/Secupayprepays/{paymentPrepayId}
     * Get the details of a payment transaction
     * @param {String} paymentPrepayId Payment prepay id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayPrepaysGetById(paymentPrepayId) {
      return this.paymentSecupayPrepaysGetByIdWithHttpInfo(paymentPrepayId)
        .then(function(response_and_data) {
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
    paymentSecupayprepaysPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];


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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/Secupayprepays', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Payment/Secupayprepays
     * Start a prepay payment transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/SecupayTransactionProductDTO} opts.body Prepay payment transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    paymentSecupayprepaysPost(opts) {
      return this.paymentSecupayprepaysPostWithHttpInfo(opts)
        .then(function(response_and_data) {
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
    reverseAccrualByPaymentIdWithHttpInfo(paymentMethod, paymentId, body) {
      let postBody = body;

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


      let pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/{paymentMethod}/{paymentId}/accrual', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/accrual
     * Update the accrual flag of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionReverseAccrualDTO} body Reverse accrual input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    reverseAccrualByPaymentId(paymentMethod, paymentId, body) {
      return this.reverseAccrualByPaymentIdWithHttpInfo(paymentMethod, paymentId, body)
        .then(function(response_and_data) {
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
    setShippingInformationByPaymentIdWithHttpInfo(paymentMethod, paymentId, body) {
      let postBody = body;

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


      let pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/{paymentMethod}/{paymentId}/shippingInformation', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/shippingInformation
     * Update the accrual flag of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionSetShippingInformationDTO} body Shipping information properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    setShippingInformationByPaymentId(paymentMethod, paymentId, body) {
      return this.setShippingInformationByPaymentIdWithHttpInfo(paymentMethod, paymentId, body)
        .then(function(response_and_data) {
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
    updateBasketByPaymentIdWithHttpInfo(paymentMethod, paymentId, body) {
      let postBody = body;

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


      let pathParams = {
        'paymentMethod': paymentMethod,
        'paymentId': paymentId
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
      let returnType = SecupayTransactionProductModel;

      return this.apiClient.callApi(
        '/Payment/{paymentMethod}/{paymentId}/basket', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PUT Payment/{paymentMethod}/{paymentId}/basket
     * Update a basket of an existing payment transaction
     * @param {String} paymentMethod Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     * @param {String} paymentId Payment id
     * @param {module:model/SecupayTransactionUpdateBasketDTO} body Update basket input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecupayTransactionProductModel}
     */
    updateBasketByPaymentId(paymentMethod, paymentId, body) {
      return this.updateBasketByPaymentIdWithHttpInfo(paymentMethod, paymentId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
