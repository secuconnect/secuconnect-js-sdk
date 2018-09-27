# SecuconnectJsSdk.GeneralStoresApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStore**](GeneralStoresApi.md#addStore) | **POST** /General/Stores | POST General/Stores
[**assignGoogleKey**](GeneralStoresApi.md#assignGoogleKey) | **POST** /General/Stores/{generalStoreId}/assign/{googleKey} | POST General/Stores/{generalStoreId}/assign/{googleKey}
[**checkIn**](GeneralStoresApi.md#checkIn) | **POST** /General/Stores/{generalStoreId}/checkin | POST General/Stores/{generalStoreId}/checkin
[**getAll**](GeneralStoresApi.md#getAll) | **GET** /General/Stores | GET General/Stores
[**getOne**](GeneralStoresApi.md#getOne) | **GET** /General/Stores/{generalStoreId} | GET General/Stores/{generalStoreId}
[**setDefault**](GeneralStoresApi.md#setDefault) | **POST** /General/Stores/{generalStoreId}/setDefault | POST General/Stores/{generalStoreId}/setDefault
[**updateStore**](GeneralStoresApi.md#updateStore) | **PUT** /General/Stores/{generalStoreId} | PUT General/Stores/{generalStoreId}


<a name="addStore"></a>
# **addStore**
> GeneralStoresProductModel addStore(body)

POST General/Stores

Create general store

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

let body = new SecuconnectJsSdk.GeneralStoresDTO(); // GeneralStoresDTO | General store properties

apiInstance.addStore(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GeneralStoresDTO**](GeneralStoresDTO.md)| General store properties | 

### Return type

[**GeneralStoresProductModel**](GeneralStoresProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="assignGoogleKey"></a>
# **assignGoogleKey**
> Object assignGoogleKey(generalStoreId, googleKey)

POST General/Stores/{generalStoreId}/assign/{googleKey}

Assign some object to general store

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

let generalStoreId = "generalStoreId_example"; // String | General store id

let googleKey = "googleKey_example"; // String | Google key

apiInstance.assignGoogleKey(generalStoreId, googleKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalStoreId** | **String**| General store id | 
 **googleKey** | **String**| Google key | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkIn"></a>
# **checkIn**
> Object checkIn(generalStoreId, body)

POST General/Stores/{generalStoreId}/checkin

Check in

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

let generalStoreId = "generalStoreId_example"; // String | General store id

let body = new SecuconnectJsSdk.GeneralStoresDTOType(); // GeneralStoresDTOType | Type

apiInstance.checkIn(generalStoreId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalStoreId** | **String**| General store id | 
 **body** | [**GeneralStoresDTOType**](GeneralStoresDTOType.md)| Type | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> GeneralStoresList getAll(opts)

GET General/Stores

Get a list of general stores

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

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

[**GeneralStoresList**](GeneralStoresList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> GeneralStoresProductModel getOne(generalStoreId)

GET General/Stores/{generalStoreId}

Get one general store for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

let generalStoreId = "generalStoreId_example"; // String | General store id

apiInstance.getOne(generalStoreId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalStoreId** | **String**| General store id | 

### Return type

[**GeneralStoresProductModel**](GeneralStoresProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setDefault"></a>
# **setDefault**
> Object setDefault(generalStoreId, opts)

POST General/Stores/{generalStoreId}/setDefault

Set default flag on general store

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

let generalStoreId = "generalStoreId_example"; // String | General store id

let opts = { 
  'body': new SecuconnectJsSdk.GeneralStoresDTOReason() // GeneralStoresDTOReason | Reason
};
apiInstance.setDefault(generalStoreId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalStoreId** | **String**| General store id | 
 **body** | [**GeneralStoresDTOReason**](GeneralStoresDTOReason.md)| Reason | [optional] 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateStore"></a>
# **updateStore**
> GeneralStoresProductModel updateStore(generalStoreId, body)

PUT General/Stores/{generalStoreId}

Update general store

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.GeneralStoresApi();

let generalStoreId = "generalStoreId_example"; // String | General store id

let body = new SecuconnectJsSdk.GeneralStoresDTO(); // GeneralStoresDTO | General store properties

apiInstance.updateStore(generalStoreId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalStoreId** | **String**| General store id | 
 **body** | [**GeneralStoresDTO**](GeneralStoresDTO.md)| General store properties | 

### Return type

[**GeneralStoresProductModel**](GeneralStoresProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

