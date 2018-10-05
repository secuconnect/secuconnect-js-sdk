# SecuconnectJsSdk.DocumentUploadsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentUploadsPost**](DocumentUploadsApi.md#documentUploadsPost) | **POST** /Document/Uploads | POST Document/Uploads
[**documentUploadsmultipartPost**](DocumentUploadsApi.md#documentUploadsmultipartPost) | **POST** /Document/Uploads?multipart | POST Document/Uploads


<a name="documentUploadsPost"></a>
# **documentUploadsPost**
> DocumentUploadsBaseProductModel documentUploadsPost(content)

POST Document/Uploads

Store uploaded file

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.DocumentUploadsApi();

let content = new SecuconnectJsSdk.DocumentUploadsDTOContent(); // DocumentUploadsDTOContent | Content

apiInstance.documentUploadsPost(content).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | [**DocumentUploadsDTOContent**](DocumentUploadsDTOContent.md)| Content | 

### Return type

[**DocumentUploadsBaseProductModel**](DocumentUploadsBaseProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="documentUploadsmultipartPost"></a>
# **documentUploadsmultipartPost**
> DocumentUploadsProductModel documentUploadsmultipartPost(fileToUpload)

POST Document/Uploads

Store uploaded file

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.DocumentUploadsApi();

let fileToUpload = "/path/to/file.txt"; // File | File to upload

apiInstance.documentUploadsmultipartPost(fileToUpload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileToUpload** | **File**| File to upload | 

### Return type

[**DocumentUploadsProductModel**](DocumentUploadsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

