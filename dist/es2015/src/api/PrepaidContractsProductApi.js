'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PrepaidMappingZvt = require('../model/PrepaidMappingZvt');

var _PrepaidMappingZvt2 = _interopRequireDefault(_PrepaidMappingZvt);

var _PrepaidZvtDTO = require('../model/PrepaidZvtDTO');

var _PrepaidZvtDTO2 = _interopRequireDefault(_PrepaidZvtDTO);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* PrepaidContractsProduct service.
* @module api/PrepaidContractsProductApi
*/
var PrepaidContractsProductApi = function () {

  /**
  * Constructs a new PrepaidContractsProductApi. 
  * @alias module:api/PrepaidContractsProductApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PrepaidContractsProductApi(apiClient) {
    _classCallCheck(this, PrepaidContractsProductApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Prepaid/Contracts/null/mappingZvt
   * Gets prepaid item id from product id which is configured in prepaid contracts
   * @param {String} prepaidContractId Prepaid contract id
   * @param {Object} opts Optional parameters
   * @param {module:model/PrepaidZvtDTO} opts.body Prepaid transaction input properties
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaidMappingZvt} and HTTP response
   */


  _createClass(PrepaidContractsProductApi, [{
    key: 'mappingZvtWithHttpInfo',
    value: function mappingZvtWithHttpInfo(prepaidContractId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'prepaidContractId' is set
      if (prepaidContractId === undefined || prepaidContractId === null) {
        throw new Error("Missing the required parameter 'prepaidContractId' when calling mappingZvt");
      }

      var pathParams = {
        'prepaidContractId': prepaidContractId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _PrepaidMappingZvt2.default;

      return this.apiClient.callApi('/Prepaid/Contracts/{prepaidContractId}/mappingZvt', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Prepaid/Contracts/null/mappingZvt
     * Gets prepaid item id from product id which is configured in prepaid contracts
     * @param {String} prepaidContractId Prepaid contract id
     * @param {Object} opts Optional parameters
     * @param {module:model/PrepaidZvtDTO} opts.body Prepaid transaction input properties
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaidMappingZvt}
     */

  }, {
    key: 'mappingZvt',
    value: function mappingZvt(prepaidContractId, opts) {
      return this.mappingZvtWithHttpInfo(prepaidContractId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PrepaidContractsProductApi;
}();

exports.default = PrepaidContractsProductApi;