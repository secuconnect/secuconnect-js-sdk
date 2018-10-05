'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _DocumentUploadsBaseProductModel = require('../model/DocumentUploadsBaseProductModel');

var _DocumentUploadsBaseProductModel2 = _interopRequireDefault(_DocumentUploadsBaseProductModel);

var _DocumentUploadsDTOContent = require('../model/DocumentUploadsDTOContent');

var _DocumentUploadsDTOContent2 = _interopRequireDefault(_DocumentUploadsDTOContent);

var _DocumentUploadsProductModel = require('../model/DocumentUploadsProductModel');

var _DocumentUploadsProductModel2 = _interopRequireDefault(_DocumentUploadsProductModel);

var _ProductExceptionPayload = require('../model/ProductExceptionPayload');

var _ProductExceptionPayload2 = _interopRequireDefault(_ProductExceptionPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* DocumentUploads service.
* @module api/DocumentUploadsApi
*/
var DocumentUploadsApi = function () {

  /**
  * Constructs a new DocumentUploadsApi. 
  * @alias module:api/DocumentUploadsApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DocumentUploadsApi(apiClient) {
    _classCallCheck(this, DocumentUploadsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * POST Document/Uploads
   * Store uploaded file
   * @param {module:model/DocumentUploadsDTOContent} content Content
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentUploadsBaseProductModel} and HTTP response
   */


  _createClass(DocumentUploadsApi, [{
    key: 'documentUploadsPostWithHttpInfo',
    value: function documentUploadsPostWithHttpInfo(content) {
      var postBody = content;

      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling documentUploadsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth_token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _DocumentUploadsBaseProductModel2.default;

      return this.apiClient.callApi('/Document/Uploads', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {module:model/DocumentUploadsDTOContent} content Content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentUploadsBaseProductModel}
     */

  }, {
    key: 'documentUploadsPost',
    value: function documentUploadsPost(content) {
      return this.documentUploadsPostWithHttpInfo(content).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {File} fileToUpload File to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentUploadsProductModel} and HTTP response
     */

  }, {
    key: 'documentUploadsmultipartPostWithHttpInfo',
    value: function documentUploadsmultipartPostWithHttpInfo(fileToUpload) {
      var postBody = null;

      // verify the required parameter 'fileToUpload' is set
      if (fileToUpload === undefined || fileToUpload === null) {
        throw new Error("Missing the required parameter 'fileToUpload' when calling documentUploadsmultipartPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'fileToUpload': fileToUpload
      };

      var authNames = ['oauth_token'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = _DocumentUploadsProductModel2.default;

      return this.apiClient.callApi('/Document/Uploads?multipart', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {File} fileToUpload File to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentUploadsProductModel}
     */

  }, {
    key: 'documentUploadsmultipartPost',
    value: function documentUploadsmultipartPost(fileToUpload) {
      return this.documentUploadsmultipartPostWithHttpInfo(fileToUpload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DocumentUploadsApi;
}();

exports.default = DocumentUploadsApi;