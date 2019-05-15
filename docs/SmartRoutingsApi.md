# SecuconnectJsSdk.SmartRoutingsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRouting**](SmartRoutingsApi.md#addRouting) | **POST** /Smart/Routings | POST Smart/Routings
[**assignDeviceToRouting**](SmartRoutingsApi.md#assignDeviceToRouting) | **POST** /Smart/Routings/{smartRoutingId}/assign/{smartDeviceId} | POST Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}
[**getAll**](SmartRoutingsApi.md#getAll) | **GET** /Smart/Routings | GET Smart/Routings
[**getOne**](SmartRoutingsApi.md#getOne) | **GET** /Smart/Routings/{smartRoutingId} | GET Smart/Routings/{smartRoutingId}
[**removeRouting**](SmartRoutingsApi.md#removeRouting) | **DELETE** /Smart/Routings/{smartRoutingId} | DELETE Smart/Routings/{smartRoutingId}
[**removeSmartRoutingAssignment**](SmartRoutingsApi.md#removeSmartRoutingAssignment) | **DELETE** /Smart/Routings/{smartRoutingId}/assign/{smartDeviceId} | DELETE Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}
[**updateRouting**](SmartRoutingsApi.md#updateRouting) | **PUT** /Smart/Routings/{smartRoutingId} | PUT Smart/Routings/{smartRoutingId}


<a name="addRouting"></a>
# **addRouting**
> SmartRoutingsProductModel addRouting(smartRoutingProperties)

POST Smart/Routings

Create new smart routing

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

let smartRoutingProperties = new SecuconnectJsSdk.SmartRoutingsDTO(); // SmartRoutingsDTO | Smart routing properties

apiInstance.addRouting(smartRoutingProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartRoutingProperties** | [**SmartRoutingsDTO**](SmartRoutingsDTO.md)| Smart routing properties | 

### Return type

[**SmartRoutingsProductModel**](SmartRoutingsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="assignDeviceToRouting"></a>
# **assignDeviceToRouting**
> SmartRoutingsProductModel assignDeviceToRouting(smartRoutingId, smartDeviceId, opts)

POST Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}

Assign the specific smart device to the specific smart routing

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

let smartRoutingId = "smartRoutingId_example"; // String | Smart routing id

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

let opts = { 
  'smartRoutingAssignmentProperties': new SecuconnectJsSdk.SmartRoutingPriority() // SmartRoutingPriority | Smart routing assignment properties
};
apiInstance.assignDeviceToRouting(smartRoutingId, smartDeviceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartRoutingId** | **String**| Smart routing id | 
 **smartDeviceId** | **String**| Smart device id | 
 **smartRoutingAssignmentProperties** | [**SmartRoutingPriority**](SmartRoutingPriority.md)| Smart routing assignment properties | [optional] 

### Return type

[**SmartRoutingsProductModel**](SmartRoutingsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> SmartRoutingsList getAll(opts)

GET Smart/Routings

Get a list of smart routings

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

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

[**SmartRoutingsList**](SmartRoutingsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> SmartRoutingsProductModel getOne(smartRoutingId)

GET Smart/Routings/{smartRoutingId}

Get one smart routing for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

let smartRoutingId = "smartRoutingId_example"; // String | Smart routing id

apiInstance.getOne(smartRoutingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartRoutingId** | **String**| Smart routing id | 

### Return type

[**SmartRoutingsProductModel**](SmartRoutingsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeRouting"></a>
# **removeRouting**
> [SmartRoutingsProductModel] removeRouting(smartRoutingId)

DELETE Smart/Routings/{smartRoutingId}

Remove specific smart roting

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

let smartRoutingId = "smartRoutingId_example"; // String | Smart routing id

apiInstance.removeRouting(smartRoutingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartRoutingId** | **String**| Smart routing id | 

### Return type

[**[SmartRoutingsProductModel]**](SmartRoutingsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeSmartRoutingAssignment"></a>
# **removeSmartRoutingAssignment**
> SmartRoutingsProductModel removeSmartRoutingAssignment(smartRoutingId, smartDeviceId)

DELETE Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}

Remove smart routing assignment

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

let smartRoutingId = "smartRoutingId_example"; // String | Smart routing id

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

apiInstance.removeSmartRoutingAssignment(smartRoutingId, smartDeviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartRoutingId** | **String**| Smart routing id | 
 **smartDeviceId** | **String**| Smart device id | 

### Return type

[**SmartRoutingsProductModel**](SmartRoutingsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateRouting"></a>
# **updateRouting**
> SmartRoutingsProductModel updateRouting(smartRoutingId, smartRoutingProperties)

PUT Smart/Routings/{smartRoutingId}

Update specific smart routing

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartRoutingsApi();

let smartRoutingId = "smartRoutingId_example"; // String | Smart routing id

let smartRoutingProperties = new SecuconnectJsSdk.SmartRoutingsDTO(); // SmartRoutingsDTO | Smart routing properties

apiInstance.updateRouting(smartRoutingId, smartRoutingProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartRoutingId** | **String**| Smart routing id | 
 **smartRoutingProperties** | [**SmartRoutingsDTO**](SmartRoutingsDTO.md)| Smart routing properties | 

### Return type

[**SmartRoutingsProductModel**](SmartRoutingsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

