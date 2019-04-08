'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PrepaidSalesProductDTO = require('../model/PrepaidSalesProductDTO');

var _PrepaidSalesProductDTO2 = _interopRequireDefault(_PrepaidSalesProductDTO);

var _PrepaidSalesProductModel = require('../model/PrepaidSalesProductModel');

var _PrepaidSalesProductModel2 = _interopRequireDefault(_PrepaidSalesProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PrepaidSalesProduct service.
* @module api/PrepaidSalesProductApi
*/
var PrepaidSalesProductApi = function () {

  /**
  * Constructs a new PrepaidSalesProductApi. 
  * @alias module:api/PrepaidSalesProductApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PrepaidSalesProductApi(apiClient) {
    _classCallCheck(this, PrepaidSalesProductApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Prepaid/Sales
   * Create new prepaid transaction
   * @param {Object} opts Optional parameters
   * @param {module:model/PrepaidSalesProductDTO} opts.body Prepaid transaction input properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaidSalesProductModel} and HTTP response
   */


  _createClass(PrepaidSalesProductApi, [{
    key: 'addSaleWithHttpInfo',
    value: function addSaleWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PrepaidSalesProductModel2.default;

      return this.apiClient.callApi('/Prepaid/Sales', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Prepaid/Sales
     * Create new prepaid transaction
     * @param {Object} opts Optional parameters
     * @param {module:model/PrepaidSalesProductDTO} opts.body Prepaid transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaidSalesProductModel}
     */

  }, {
    key: 'addSale',
    value: function addSale(opts) {
      return this.addSaleWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PrepaidSalesProductApi;
}();

exports.default = PrepaidSalesProductApi;