# SecuconnectJsSdk.PrepaidContractsProductApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mappingZvt**](PrepaidContractsProductApi.md#mappingZvt) | **POST** /Prepaid/Contracts/{prepaidContractId}/mappingZvt | POST Prepaid/Contracts/null/mappingZvt


<a name="mappingZvt"></a>
# **mappingZvt**
> PrepaidMappingZvt mappingZvt(prepaidContractId, opts)

POST Prepaid/Contracts/null/mappingZvt

Gets prepaid item id from product id which is configured in prepaid contracts

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PrepaidContractsProductApi();

let prepaidContractId = "prepaidContractId_example"; // String | Prepaid contract id

let opts = { 
  'body': new SecuconnectJsSdk.PrepaidZvtDTO() // PrepaidZvtDTO | Prepaid transaction input properties
};
apiInstance.mappingZvt(prepaidContractId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepaidContractId** | **String**| Prepaid contract id | 
 **body** | [**PrepaidZvtDTO**](PrepaidZvtDTO.md)| Prepaid transaction input properties | [optional] 

### Return type

[**PrepaidMappingZvt**](PrepaidMappingZvt.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

