# SecuconnectApi.LoyaltySalesApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCardgroupsByMerchantId**](LoyaltySalesApi.md#getCardgroupsByMerchantId) | **GET** /Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID | GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID
[**getVirtualTerminalIdByStoreId**](LoyaltySalesApi.md#getVirtualTerminalIdByStoreId) | **GET** /Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore | GET Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore


<a name="getCardgroupsByMerchantId"></a>
# **getCardgroupsByMerchantId**
> [LoyaltyCardgroupsProductModel] getCardgroupsByMerchantId(generalMerchantId)

GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID

Get cardgroups by merchant id

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltySalesApi();

let generalMerchantId = "generalMerchantId_example"; // String | Search by provided id

apiInstance.getCardgroupsByMerchantId(generalMerchantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalMerchantId** | **String**| Search by provided id | 

### Return type

[**[LoyaltyCardgroupsProductModel]**](LoyaltyCardgroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVirtualTerminalIdByStoreId"></a>
# **getVirtualTerminalIdByStoreId**
> Object getVirtualTerminalIdByStoreId(generalStoresId)

GET Loyalty/Sales/{generalStoresId}/VirtualTerminalIdForStore

Get DECODED virtual terminal id by DECODED store id

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltySalesApi();

let generalStoresId = "generalStoresId_example"; // String | DECODED store id

apiInstance.getVirtualTerminalIdByStoreId(generalStoresId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalStoresId** | **String**| DECODED store id | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

