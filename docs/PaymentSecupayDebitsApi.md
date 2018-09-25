# SecuconnectApi.PaymentSecupayDebitsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentSecupayDebitsCancelById**](PaymentSecupayDebitsApi.md#paymentSecupayDebitsCancelById) | **POST** /Payment/Secupaydebits/{paymentDebitId}/cancel | POST Payment/Secupaydebits/{paymentDebitId}/cancel
[**paymentSecupayDebitsGetById**](PaymentSecupayDebitsApi.md#paymentSecupayDebitsGetById) | **GET** /Payment/Secupaydebits/{paymentDebitId} | GET Payment/Secupaydebits/{paymentDebitId}
[**paymentSecupaydebitsPost**](PaymentSecupayDebitsApi.md#paymentSecupaydebitsPost) | **POST** /Payment/Secupaydebits | POST Payment/Secupaydebits


<a name="paymentSecupayDebitsCancelById"></a>
# **paymentSecupayDebitsCancelById**
> Object paymentSecupayDebitsCancelById(paymentDebitId)

POST Payment/Secupaydebits/{paymentDebitId}/cancel

Function to cancel the transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayDebitsApi();

let paymentDebitId = "paymentDebitId_example"; // String | Payment debit id

apiInstance.paymentSecupayDebitsCancelById(paymentDebitId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentDebitId** | **String**| Payment debit id | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayDebitsGetById"></a>
# **paymentSecupayDebitsGetById**
> SecupayTransactionProductModel paymentSecupayDebitsGetById(paymentDebitId)

GET Payment/Secupaydebits/{paymentDebitId}

Get the details of a payment transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayDebitsApi();

let paymentDebitId = "paymentDebitId_example"; // String | Payment debit id

apiInstance.paymentSecupayDebitsGetById(paymentDebitId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentDebitId** | **String**| Payment debit id | 

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
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentSecupayDebitsApi();

let opts = { 
  'body': new SecuconnectApi.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Debit payment transaction input properties
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

