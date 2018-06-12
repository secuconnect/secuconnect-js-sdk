# SecuConnectApi.PaymentSecupayDebitsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayDebitsCancelById**](PaymentSecupayDebitsApi.md#paymentSecupayDebitsCancelById) | **POST** Payment/Secupaydebits/{hash}/cancel | 
[**paymentSecupayDebitsGetById**](PaymentSecupayDebitsApi.md#paymentSecupayDebitsGetById) | **GET** Payment/Secupaydebits/{hash} | 
[**paymentSecupaydebitsPost**](PaymentSecupayDebitsApi.md#paymentSecupaydebitsPost) | **POST** Payment/Secupaydebits | 


<a name="paymentSecupayDebitsCancelById"></a>
# **paymentSecupayDebitsCancelById**
> Object paymentSecupayDebitsCancelById(hash)

POST Payment/Secupaydebits/{id}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayDebitsApi();

let hash = "hash_example"; // String | Transaction hash

apiInstance.paymentSecupayDebitsCancelById(hash).then((data) => {
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

<a name="paymentSecupayDebitsGetById"></a>
# **paymentSecupayDebitsGetById**
> SecupayTransactionProductModel paymentSecupayDebitsGetById(hash)



Get the details of a payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayDebitsApi();

let hash = "hash_example"; // String | Payment transaction ID

apiInstance.paymentSecupayDebitsGetById(hash).then((data) => {
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

<a name="paymentSecupaydebitsPost"></a>
# **paymentSecupaydebitsPost**
> SecupayTransactionProductModel paymentSecupaydebitsPost(opts)

POST Payment/Secupaydebits

Start a debit payment transaction

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentSecupayDebitsApi();

let opts = { 
  'body': new SecuConnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Debit payment transaction input properties
};
apiInstance.paymentSecupaydebitsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SecupayTransactionProductDTO**](SecupayTransactionProductDTO.md)| Debit payment transaction input properties | [optional] 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

