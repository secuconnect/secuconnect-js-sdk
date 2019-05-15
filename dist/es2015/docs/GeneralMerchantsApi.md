# SecuconnectJsSdk.GeneralMerchantsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMerchants**](GeneralMerchantsApi.md#addMerchants) | **POST** /General/Merchants | POST General/Merchants
[**getAll**](GeneralMerchantsApi.md#getAll) | **GET** /General/Merchants | GET General/Merchants
[**getOne**](GeneralMerchantsApi.md#getOne) | **GET** /General/Merchants/{generalMerchantId} | GET General/Merchants/{generalMerchantId}
[**updateMerchant**](GeneralMerchantsApi.md#updateMerchant) | **PUT** /General/Merchants/{generalMerchantId} | PUT General/Merchants/{generalMerchantId}


<a name="addMerchants"></a>
# **addMerchants**
> GeneralMerchantsProductModel addMerchants(body)

POST General/Merchants

Add a new merchant

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralMerchantsApi();

let body = new SecuconnectJsSdk.GeneralMerchantsDTO(); // GeneralMerchantsDTO | general Merchant container properties

apiInstance.addMerchants(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GeneralMerchantsDTO**](GeneralMerchantsDTO.md)| general Merchant container properties | 

### Return type

[**GeneralMerchantsProductModel**](GeneralMerchantsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> GeneralMerchantsList getAll(opts)

GET General/Merchants

Get a list of general merchants

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralMerchantsApi();

let opts = { 
  'count': 56, // Number | The number of items to return.
  'offset': 56, // Number | The position within the whole result set to start returning items (First element is at 0).
  'fields': "fields_example", // String | List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
  'q': "q_example", // String | A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \"*\" for any number of characters  *                      - wildcard \"?\" for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by 'AND', 'OR', 'NOT' operators and parenthesis '(', ')' for grouping.  *                  Property names can be nested like \"prop1.prop2\".  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
  'sort': "sort_example" // String | String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending 'asc', or descending 'dsc' order.
};
apiInstance.getAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **Number**| The number of items to return. | [optional] 
 **offset** | **Number**| The position within the whole result set to start returning items (First element is at 0). | [optional] 
 **fields** | **String**| List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2 | [optional] 
 **q** | **String**| A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \&quot;*\&quot; for any number of characters  *                      - wildcard \&quot;?\&quot; for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by &#39;AND&#39;, &#39;OR&#39;, &#39;NOT&#39; operators and parenthesis &#39;(&#39;, &#39;)&#39; for grouping.  *                  Property names can be nested like \&quot;prop1.prop2\&quot;.  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                   | [optional] 
 **sort** | **String**| String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending &#39;asc&#39;, or descending &#39;dsc&#39; order. | [optional] 

### Return type

[**GeneralMerchantsList**](GeneralMerchantsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> GeneralMerchantsProductModel getOne(generalMerchantId)

GET General/Merchants/{generalMerchantId}

Get one general merchant for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralMerchantsApi();

let generalMerchantId = "generalMerchantId_example"; // String | General merchant id

apiInstance.getOne(generalMerchantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalMerchantId** | **String**| General merchant id | 

### Return type

[**GeneralMerchantsProductModel**](GeneralMerchantsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateMerchant"></a>
# **updateMerchant**
> GeneralMerchantsProductModel updateMerchant(generalMerchantId, body)

PUT General/Merchants/{generalMerchantId}

Update general merchant

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralMerchantsApi();

let generalMerchantId = "generalMerchantId_example"; // String | General merchant id

let body = new SecuconnectJsSdk.GeneralMerchantsDTO(); // GeneralMerchantsDTO | General merchant properties

apiInstance.updateMerchant(generalMerchantId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalMerchantId** | **String**| General merchant id | 
 **body** | [**GeneralMerchantsDTO**](GeneralMerchantsDTO.md)| General merchant properties | 

### Return type

[**GeneralMerchantsProductModel**](GeneralMerchantsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

