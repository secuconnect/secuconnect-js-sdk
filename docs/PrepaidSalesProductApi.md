# SecuconnectJsSdk.PrepaidSalesProductApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSale**](PrepaidSalesProductApi.md#addSale) | **POST** /Prepaid/Sales | POST Prepaid/Sales


<a name="addSale"></a>
# **addSale**
> PrepaidSalesProductModel addSale(opts)

POST Prepaid/Sales

Create new prepaid transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PrepaidSalesProductApi();

let opts = { 
  'body': new SecuconnectJsSdk.PrepaidSalesProductDTO() // PrepaidSalesProductDTO | Prepaid transaction input properties
};
apiInstance.addSale(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PrepaidSalesProductDTO**](PrepaidSalesProductDTO.md)| Prepaid transaction input properties | [optional] 

### Return type

[**PrepaidSalesProductModel**](PrepaidSalesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

