# SecuconnectApi.PaymentSecupayPrepaysApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayPrepaysCancelById**](PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysCancelById) | **POST** /Payment/Secupayprepays/{paymentPrepayId}/cancel | POST Payment/Secupayprepays/{paymentPrepayId}/cancel
[**paymentSecupayPrepaysGetById**](PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysGetById) | **GET** /Payment/Secupayprepays/{paymentPrepayId} | GET Payment/Secupayprepays/{paymentPrepayId}
[**paymentSecupayprepaysPost**](PaymentSecupayPrepaysApi.md#paymentSecupayprepaysPost) | **POST** /Payment/Secupayprepays | POST Payment/Secupayprepays


<a name="paymentSecupayPrepaysCancelById"></a>
# **paymentSecupayPrepaysCancelById**
> Object paymentSecupayPrepaysCancelById(paymentPrepayId)

POST Payment/Secupayprepays/{paymentPrepayId}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayPrepaysApi();

let paymentPrepayId = "paymentPrepayId_example"; // String | Payment prepay id

apiInstance.paymentSecupayPrepaysCancelById(paymentPrepayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPrepayId** | **String**| Payment prepay id | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayPrepaysGetById"></a>
# **paymentSecupayPrepaysGetById**
> SecupayTransactionProductModel paymentSecupayPrepaysGetById(paymentPrepayId)

GET Payment/Secupayprepays/{paymentPrepayId}

Get the details of a payment transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayPrepaysApi();

let paymentPrepayId = "paymentPrepayId_example"; // String | Payment prepay id

apiInstance.paymentSecupayPrepaysGetById(paymentPrepayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPrepayId** | **String**| Payment prepay id | 

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
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayPrepaysApi();

let opts = { 
  'body': new SecuconnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Prepay payment transaction input properties
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

