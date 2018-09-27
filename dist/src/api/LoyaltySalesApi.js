'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardgroupsProductModel = require('../model/LoyaltyCardgroupsProductModel');

var _LoyaltyCardgroupsProductModel2 = _interopRequireDefault(_LoyaltyCardgroupsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* LoyaltySales service.
* @module api/LoyaltySalesApi
*/
var LoyaltySalesApi = function () {

  /**
  * Constructs a new LoyaltySalesApi. 
  * @alias module:api/LoyaltySalesApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoyaltySalesApi(apiClient) {
    _classCallCheck(this, LoyaltySalesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID
   * Get cardgroups by merchant id
   * @param {String} generalMerchantId Search by provided id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoyaltyCardgroupsProductModel>} and HTTP response
   */


  _createClass(LoyaltySalesApi, [{
    key: 'getCardgroupsByMerchantIdWithHttpInfo',
    value: function getCardgroupsByMerchantIdWithHttpInfo(generalMerchantId) {
      var postBody = null;

      // verify the required parameter 'generalMerchantId' is set
      if (generalMerchantId === undefined || generalMerchantId === null) {
        throw new Error("Missing the required parameter 'generalMerchantId' when calling getCardgroupsByMerchantId");
      }

      var pathParams = {
        'generalMerchantId': generalMerchantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_LoyaltyCardgroupsProductModel2.default];

      return this.apiClient.callApi('/Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID
     * Get cardgroups by merchant id
     * @param {String} generalMerchantId Search by provided id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoyaltyCardgroupsProductModel>}
     */

  }, {
    key: 'getCardgroupsByMerchantId',
    value: function getCardgroupsByMerchantId(generalMerchantId) {
      return this.getCardgroupsByMerchantIdWithHttpInfo(generalMerchantId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore
     * Get DECODED virtual terminal id by DECODED store id
     * @param {String} generalStoresId DECODED store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'getVirtualTerminalIdByStoreIdWithHttpInfo',
    value: function getVirtualTerminalIdByStoreIdWithHttpInfo(generalStoresId) {
      var postBody = null;

      // verify the required parameter 'generalStoresId' is set
      if (generalStoresId === undefined || generalStoresId === null) {
        throw new Error("Missing the required parameter 'generalStoresId' when calling getVirtualTerminalIdByStoreId");
      }

      var pathParams = {
        'generalStoresId': generalStoresId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi('/Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * GET Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore
     * Get DECODED virtual terminal id by DECODED store id
     * @param {String} generalStoresId DECODED store id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'getVirtualTerminalIdByStoreId',
    value: function getVirtualTerminalIdByStoreId(generalStoresId) {
      return this.getVirtualTerminalIdByStoreIdWithHttpInfo(generalStoresId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoyaltySalesApi;
}();

exports.default = LoyaltySalesApi;