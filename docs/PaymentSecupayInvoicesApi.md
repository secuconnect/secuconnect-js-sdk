# SecuconnectApi.PaymentSecupayInvoicesApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayInvoicesCancelById**](PaymentSecupayInvoicesApi.md#paymentSecupayInvoicesCancelById) | **POST** /Payment/Secupayinvoices/{paymentInvoiceId}/cancel | POST Payment/Secupayinvoices/{paymentInvoiceId}/cancel
[**paymentSecupayInvoicesGetById**](PaymentSecupayInvoicesApi.md#paymentSecupayInvoicesGetById) | **GET** /Payment/Secupayinvoices/{paymentInvoiceId} | GET Payment/Secupayinvoices/{paymentInvoiceId}
[**paymentSecupayinvoicesPost**](PaymentSecupayInvoicesApi.md#paymentSecupayinvoicesPost) | **POST** /Payment/Secupayinvoices | POST Payment/Secupayinvoices


<a name="paymentSecupayInvoicesCancelById"></a>
# **paymentSecupayInvoicesCancelById**
> Object paymentSecupayInvoicesCancelById(paymentInvoiceId)

POST Payment/Secupayinvoices/{paymentInvoiceId}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayInvoicesApi();

let paymentInvoiceId = "paymentInvoiceId_example"; // String | Payment invoice id

apiInstance.paymentSecupayInvoicesCancelById(paymentInvoiceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentInvoiceId** | **String**| Payment invoice id | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayInvoicesGetById"></a>
# **paymentSecupayInvoicesGetById**
> SecupayTransactionProductModel paymentSecupayInvoicesGetById(paymentInvoiceId)

GET Payment/Secupayinvoices/{paymentInvoiceId}

Get the details of a payment transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayInvoicesApi();

let paymentInvoiceId = "paymentInvoiceId_example"; // String | Payment transaction ID

apiInstance.paymentSecupayInvoicesGetById(paymentInvoiceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentInvoiceId** | **String**| Payment transaction ID | 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayinvoicesPost"></a>
# **paymentSecupayinvoicesPost**
> SecupayTransactionProductModel paymentSecupayinvoicesPost(opts)

POST Payment/Secupayinvoices

Start a invoice payment transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayInvoicesApi();

let opts = { 
  'body': new SecuconnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Invoice payment transaction input properties
};
apiInstance.paymentSecupayinvoicesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SecupayTransactionProductDTO**](SecupayTransactionProductDTO.md)| Invoice payment transaction input properties | [optional] 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

