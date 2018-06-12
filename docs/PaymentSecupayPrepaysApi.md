# SecuConnectApi.PaymentSecupayPrepaysApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayPrepaysCancelById**](PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysCancelById) | **POST** Payment/Secupayprepays/{hash}/cancel | POST Payment/Secupayprepays/{id}/cancel
[**paymentSecupayPrepaysGetById**](PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysGetById) | **GET** Payment/Secupayprepays/{hash} | GET Payment/Secupayprepays/{id}
[**paymentSecupayprepaysPost**](PaymentSecupayPrepaysApi.md#paymentSecupayprepaysPost) | **POST** Payment/Secupayprepays | POST Payment/Secupayprepays


<a name="paymentSecupayPrepaysCancelById"></a>
# **paymentSecupayPrepaysCancelById**
> Object paymentSecupayPrepaysCancelById(hash)

POST Payment/Secupayprepays/{id}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayPrepaysApi();

let hash = "hash_example"; // String | Transaction hash

apiInstance.paymentSecupayPrepaysCancelById(hash).then((data) => {
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

<a name="paymentSecupayPrepaysGetById"></a>
# **paymentSecupayPrepaysGetById**
> SecupayTransactionProductModel paymentSecupayPrepaysGetById(hash)

GET Payment/Secupayprepays/{id}

Get the details of a payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayPrepaysApi();

let hash = "hash_example"; // String | Payment transaction ID

apiInstance.paymentSecupayPrepaysGetById(hash).then((data) => {
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

<a name="paymentSecupayprepaysPost"></a>
# **paymentSecupayprepaysPost**
> SecupayTransactionProductModel paymentSecupayprepaysPost(opts)

POST Payment/Secupayprepays

Start a prepay payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayPrepaysApi();

let opts = { 
  'body': new SecuConnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Prepay payment transaction input properties
};
apiInstance.paymentSecupayprepaysPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SecupayTransactionProductDTO**](SecupayTransactionProductDTO.md)| Prepay payment transaction input properties | [optional] 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

