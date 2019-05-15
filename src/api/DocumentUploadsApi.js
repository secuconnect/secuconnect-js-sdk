
import ApiClient from "../ApiClient";
import DocumentUploadsBaseProductModel from '../model/DocumentUploadsBaseProductModel';
import DocumentUploadsDTOContent from '../model/DocumentUploadsDTOContent';
import DocumentUploadsProductModel from '../model/DocumentUploadsProductModel';
import ProductExceptionPayload from '../model/ProductExceptionPayload';

/**
* DocumentUploads service.
* @module api/DocumentUploadsApi
*/
export default class DocumentUploadsApi {

    /**
    * Constructs a new DocumentUploadsApi. 
    * @alias module:api/DocumentUploadsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {File} fileToUpload File to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentUploadsProductModel} and HTTP response
     */
    documentUploadsMultipartPostWithHttpInfo(fileToUpload) {
      let postBody = null;

      // verify the required parameter 'fileToUpload' is set
      if (fileToUpload === undefined || fileToUpload === null) {
        throw new Error("Missing the required parameter 'fileToUpload' when calling documentUploadsMultipartPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'fileToUpload': fileToUpload
      };

      let authNames = ['oauth_token'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = DocumentUploadsProductModel;

      return this.apiClient.callApi(
        '/Document/Uploads?multipart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {File} fileToUpload File to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentUploadsProductModel}
     */
    documentUploadsMultipartPost(fileToUpload) {
      return this.documentUploadsMultipartPostWithHttpInfo(fileToUpload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {module:model/DocumentUploadsDTOContent} content Content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentUploadsBaseProductModel} and HTTP response
     */
    documentUploadsPostWithHttpInfo(content) {
      let postBody = content;

      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling documentUploadsPost");
      }


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
      let returnType = DocumentUploadsBaseProductModel;

      return this.apiClient.callApi(
        '/Document/Uploads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * POST Document/Uploads
     * Store uploaded file
     * @param {module:model/DocumentUploadsDTOContent} content Content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentUploadsBaseProductModel}
     */
    documentUploadsPost(content) {
      return this.documentUploadsPostWithHttpInfo(content)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
