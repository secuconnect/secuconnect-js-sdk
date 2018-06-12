# SecuConnectApi.PaymentSecupayCreditcardsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayCreditcardsCancelById**](PaymentSecupayCreditcardsApi.md#paymentSecupayCreditcardsCancelById) | **POST** Payment/Secupaycreditcards/{hash}/cancel | POST Payment/Secupaycreditcards/{id}/cancel
[**paymentSecupayCreditcardsGetById**](PaymentSecupayCreditcardsApi.md#paymentSecupayCreditcardsGetById) | **GET** Payment/Secupaycreditcards/{hash} | GET Payment/Secupaycreditcards/{id}
[**paymentSecupaycreditcardsPost**](PaymentSecupayCreditcardsApi.md#paymentSecupaycreditcardsPost) | **POST** Payment/Secupaycreditcards | POST Payment/Secupaycreditcards


<a name="paymentSecupayCreditcardsCancelById"></a>
# **paymentSecupayCreditcardsCancelById**
> Object paymentSecupayCreditcardsCancelById(hash)

POST Payment/Secupaycreditcards/{id}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayCreditcardsApi();

let hash = "hash_example"; // String | Transaction hash

apiInstance.paymentSecupayCreditcardsCancelById(hash).then((data) => {
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

<a name="paymentSecupayCreditcardsGetById"></a>
# **paymentSecupayCreditcardsGetById**
> SecupayTransactionProductModel paymentSecupayCreditcardsGetById(hash)

GET Payment/Secupaycreditcards/{id}

Get the details of a payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayCreditcardsApi();

let hash = "hash_example"; // String | Payment transaction ID

apiInstance.paymentSecupayCreditcardsGetById(hash).then((data) => {
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

<a name="paymentSecupaycreditcardsPost"></a>
# **paymentSecupaycreditcardsPost**
> SecupayTransactionProductModel paymentSecupaycreditcardsPost(opts)

POST Payment/Secupaycreditcards

Start a credit card payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayCreditcardsApi();

let opts = { 
  'body': new SecuConnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Credit card payment transaction input properties
};
apiInstance.paymentSecupaycreditcardsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SecupayTransactionProductDTO**](SecupayTransactionProductDTO.md)| Credit card payment transaction input properties | [optional] 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

