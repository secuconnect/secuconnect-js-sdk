# SecuconnectJsSdk.DefaultApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignExternalInvoicePdf**](DefaultApi.md#assignExternalInvoicePdf) | **POST** /Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId} | POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}


<a name="assignExternalInvoicePdf"></a>
# **assignExternalInvoicePdf**
> SecupayTransactionExternalInvoicePdf assignExternalInvoicePdf(paymentMethod, paymentId, documentId, body)

POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}

Assign external invoice pdf

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.DefaultApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (debit, prepay, ...)

let paymentId = "paymentId_example"; // String | Payment id

let documentId = "documentId_example"; // String | Document id

let body = new SecuconnectJsSdk.SecupayTransactionDTOExternalInvoicePdf(); // SecupayTransactionDTOExternalInvoicePdf | Request body for assigning external invoice pdf

apiInstance.assignExternalInvoicePdf(paymentMethod, paymentId, documentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (debit, prepay, ...) | 
 **paymentId** | **String**| Payment id | 
 **documentId** | **String**| Document id | 
 **body** | [**SecupayTransactionDTOExternalInvoicePdf**](SecupayTransactionDTOExternalInvoicePdf.md)| Request body for assigning external invoice pdf | 

### Return type

[**SecupayTransactionExternalInvoicePdf**](SecupayTransactionExternalInvoicePdf.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

