# SecuconnectJsSdk.PaymentSecupayPayoutApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecupaypayout**](PaymentSecupayPayoutApi.md#getSecupaypayout) | **GET** /Payment/Secupaypayout/{paymentPayoutId} | GET Payment/Secupaypayout/{paymentPayoutId}
[**paymentSecupaypayoutPost**](PaymentSecupayPayoutApi.md#paymentSecupaypayoutPost) | **POST** /Payment/Secupaypayout | POST Payment/Secupaypayout


<a name="getSecupaypayout"></a>
# **getSecupaypayout**
> SecupayPayoutProductModel getSecupaypayout(paymentPayoutId)

GET Payment/Secupaypayout/{paymentPayoutId}

Get the details of a payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPayoutApi();

let paymentPayoutId = "paymentPayoutId_example"; // String | Payment payout id

apiInstance.getSecupaypayout(paymentPayoutId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPayoutId** | **String**| Payment payout id | 

### Return type

[**SecupayPayoutProductModel**](SecupayPayoutProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupaypayoutPost"></a>
# **paymentSecupaypayoutPost**
> SecupayPayoutProductModel paymentSecupaypayoutPost(opts)

POST Payment/Secupaypayout

Start a payout transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPayoutApi();

let opts = { 
  'body': new SecuconnectJsSdk.SecupayPayoutDTO() // SecupayPayoutDTO | Payout payment transaction input properties
};
apiInstance.paymentSecupaypayoutPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SecupayPayoutDTO**](SecupayPayoutDTO.md)| Payout payment transaction input properties | [optional] 

### Return type

[**SecupayPayoutProductModel**](SecupayPayoutProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

