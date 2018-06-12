# SecuConnectApi.PaymentSecupayInvoicesApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayInvoicesCancelById**](PaymentSecupayInvoicesApi.md#paymentSecupayInvoicesCancelById) | **POST** Payment/Secupayinvoices/{hash}/cancel | POST Payment/Secupayinvoices/{id}/cancel
[**paymentSecupayInvoicesGetById**](PaymentSecupayInvoicesApi.md#paymentSecupayInvoicesGetById) | **GET** Payment/Secupayinvoices/{hash} | GET Payment/Secupayinvoices/{id}
[**paymentSecupayinvoicesPost**](PaymentSecupayInvoicesApi.md#paymentSecupayinvoicesPost) | **POST** Payment/Secupayinvoices | POST Payment/Secupayinvoices


<a name="paymentSecupayInvoicesCancelById"></a>
# **paymentSecupayInvoicesCancelById**
> Object paymentSecupayInvoicesCancelById(hash)

POST Payment/Secupayinvoices/{id}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayInvoicesApi();

let hash = "hash_example"; // String | Transaction hash

apiInstance.paymentSecupayInvoicesCancelById(hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Transaction hash | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayInvoicesGetById"></a>
# **paymentSecupayInvoicesGetById**
> SecupayTransactionProductModel paymentSecupayInvoicesGetById(hash)

GET Payment/Secupayinvoices/{id}

Get the details of a payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayInvoicesApi();

let hash = "hash_example"; // String | Payment transaction ID

apiInstance.paymentSecupayInvoicesGetById(hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Payment transaction ID | 

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
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayInvoicesApi();

let opts = { 
  'body': new SecuConnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Invoice payment transaction input properties
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

