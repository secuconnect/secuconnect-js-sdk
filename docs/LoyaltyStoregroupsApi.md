# SecuconnectJsSdk.LoyaltyStoregroupsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStoreGroup**](LoyaltyStoregroupsApi.md#addStoreGroup) | **POST** /Loyalty/Storegroups | POST Loyalty/Storegroups
[**getAll**](LoyaltyStoregroupsApi.md#getAll) | **GET** /Loyalty/StoreGroups | GET Loyalty/StoreGroups
[**getOne**](LoyaltyStoregroupsApi.md#getOne) | **GET** /Loyalty/StoreGroups/{loyaltyStoreGroupId} | GET Loyalty/StoreGroups/{loyaltyStoreGroupId}
[**removeStoreGroup**](LoyaltyStoregroupsApi.md#removeStoreGroup) | **DELETE** /Loyalty/StoreGroups/{loyaltyStoreGroupId} | DELETE Loyalty/StoreGroups/{loyaltyStoreGroupId}
[**updateStoreGroup**](LoyaltyStoregroupsApi.md#updateStoreGroup) | **PUT** /Loyalty/StoreGroups/{loyaltyStoreGroupId} | PUT Loyalty/StoreGroups/{loyaltyStoreGroupId}


<a name="addStoreGroup"></a>
# **addStoreGroup**
> LoyaltyStoregroupsProductModel addStoreGroup(body)

POST Loyalty/Storegroups

Add new loyalty store group

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyStoregroupsApi();

let body = new SecuconnectJsSdk.LoyaltyStoregroupsDTO(); // LoyaltyStoregroupsDTO | Loyalty store group properties

apiInstance.addStoreGroup(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoyaltyStoregroupsDTO**](LoyaltyStoregroupsDTO.md)| Loyalty store group properties | 

### Return type

[**LoyaltyStoregroupsProductModel**](LoyaltyStoregroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> LoyaltyStoregroupsList getAll(opts)

GET Loyalty/StoreGroups

Get a list of loyalty store groups

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyStoregroupsApi();

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

[**LoyaltyStoregroupsList**](LoyaltyStoregroupsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> LoyaltyStoregroupsProductModel getOne(loyaltyStoreGroupId)

GET Loyalty/StoreGroups/{loyaltyStoreGroupId}

Get loyalty store group for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyStoregroupsApi();

let loyaltyStoreGroupId = "loyaltyStoreGroupId_example"; // String | loyalty store group id

apiInstance.getOne(loyaltyStoreGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyStoreGroupId** | **String**| loyalty store group id | 

### Return type

[**LoyaltyStoregroupsProductModel**](LoyaltyStoregroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeStoreGroup"></a>
# **removeStoreGroup**
> [LoyaltyStoregroupsProductModel] removeStoreGroup(loyaltyStoreGroupId)

DELETE Loyalty/StoreGroups/{loyaltyStoreGroupId}

Remove loyalty store group

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyStoregroupsApi();

let loyaltyStoreGroupId = "loyaltyStoreGroupId_example"; // String | Loyalty store group id

apiInstance.removeStoreGroup(loyaltyStoreGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyStoreGroupId** | **String**| Loyalty store group id | 

### Return type

[**[LoyaltyStoregroupsProductModel]**](LoyaltyStoregroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateStoreGroup"></a>
# **updateStoreGroup**
> LoyaltyStoregroupsProductModel updateStoreGroup(loyaltyStoreGroupId, body)

PUT Loyalty/StoreGroups/{loyaltyStoreGroupId}

Update loyalty store group

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyStoregroupsApi();

let loyaltyStoreGroupId = "loyaltyStoreGroupId_example"; // String | Loyalty store group id

let body = new SecuconnectJsSdk.LoyaltyStoregroupsDTO(); // LoyaltyStoregroupsDTO | Loyalty store group properties

apiInstance.updateStoreGroup(loyaltyStoreGroupId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyStoreGroupId** | **String**| Loyalty store group id | 
 **body** | [**LoyaltyStoregroupsDTO**](LoyaltyStoregroupsDTO.md)| Loyalty store group properties | 

### Return type

[**LoyaltyStoregroupsProductModel**](LoyaltyStoregroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

