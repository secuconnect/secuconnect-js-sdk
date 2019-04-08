# SecuconnectJsSdk.SmartDevicesApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDevice**](SmartDevicesApi.md#addDevice) | **POST** /Smart/Devices | POST Smart/Devices
[**createPrepaidTid**](SmartDevicesApi.md#createPrepaidTid) | **POST** /Smart/Devices/{smartDeviceId}/createPrepaidTid | POST Smart/Devices/{smartDeviceId}/createPrepaidTid
[**createVirtualDevice**](SmartDevicesApi.md#createVirtualDevice) | **POST** /Smart/Devices/{smartDeviceId}/createVirtualDevice | POST Smart/Devices/{smartDeviceId}/createVirtualDevice
[**getAll**](SmartDevicesApi.md#getAll) | **GET** /Smart/Devices | GET Smart/Devices
[**getOne**](SmartDevicesApi.md#getOne) | **GET** /Smart/Devices/{smartDeviceId} | GET Smart/Devices/{smartDeviceId}
[**getRouting**](SmartDevicesApi.md#getRouting) | **GET** /Smart/Devices/{smartDeviceId}/routing/type/{type} | GET Smart/Devices/{smartDeviceId}/routing/type/{type}
[**getSecubaseConfig**](SmartDevicesApi.md#getSecubaseConfig) | **POST** /Smart/Devices/{smartDeviceId}/getSecubaseConfig | POST Smart/Devices/{smartDeviceId}/getSecubaseConfig
[**updateDevice**](SmartDevicesApi.md#updateDevice) | **PUT** /Smart/Devices/{smartDeviceId} | PUT Smart/Devices/{smartDeviceId}
[**updatePin**](SmartDevicesApi.md#updatePin) | **PUT** /Smart/Devices/{smartDeviceId}/pin | PUT /Smart/Devices/{smartDeviceId}/pin


<a name="addDevice"></a>
# **addDevice**
> SmartDevicesProductModel addDevice(smartDeviceProperties)

POST Smart/Devices

Create new smart device

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceProperties = new SecuconnectJsSdk.SmartDevicesDTO(); // SmartDevicesDTO | Smart device properties

apiInstance.addDevice(smartDeviceProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceProperties** | [**SmartDevicesDTO**](SmartDevicesDTO.md)| Smart device properties | 

### Return type

[**SmartDevicesProductModel**](SmartDevicesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createPrepaidTid"></a>
# **createPrepaidTid**
> SmartDevicesProductModel createPrepaidTid(smartDeviceId, prepaidTidProperties)

POST Smart/Devices/{smartDeviceId}/createPrepaidTid

Create prepaid tid

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

let prepaidTidProperties = new SecuconnectJsSdk.SmartDevicesDTOPrepaidTid(); // SmartDevicesDTOPrepaidTid | Prepaid tid properties

apiInstance.createPrepaidTid(smartDeviceId, prepaidTidProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 
 **prepaidTidProperties** | [**SmartDevicesDTOPrepaidTid**](SmartDevicesDTOPrepaidTid.md)| Prepaid tid properties | 

### Return type

[**SmartDevicesProductModel**](SmartDevicesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createVirtualDevice"></a>
# **createVirtualDevice**
> SmartDevicesProductModel createVirtualDevice(smartDeviceId)

POST Smart/Devices/{smartDeviceId}/createVirtualDevice

Create virtual device

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

apiInstance.createVirtualDevice(smartDeviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 

### Return type

[**SmartDevicesProductModel**](SmartDevicesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> SmartDevicesList getAll(opts)

GET Smart/Devices

Get a list of smart devices

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

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

[**SmartDevicesList**](SmartDevicesList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> SmartDevicesProductModel getOne(smartDeviceId)

GET Smart/Devices/{smartDeviceId}

Get one smart device for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

apiInstance.getOne(smartDeviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 

### Return type

[**SmartDevicesProductModel**](SmartDevicesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getRouting"></a>
# **getRouting**
> SmartDevicesList1 getRouting(smartDeviceId, type)

GET Smart/Devices/{smartDeviceId}/routing/type/{type}

Get single routing

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

let type = "type_example"; // String | Payment type

apiInstance.getRouting(smartDeviceId, type).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 
 **type** | **String**| Payment type | 

### Return type

[**SmartDevicesList1**](SmartDevicesList1.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSecubaseConfig"></a>
# **getSecubaseConfig**
> SmartDevicesSecubaseConfig getSecubaseConfig(smartDeviceId, secubaseConfigProperties)

POST Smart/Devices/{smartDeviceId}/getSecubaseConfig

Get secubase config

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

let secubaseConfigProperties = new SecuconnectJsSdk.SmartDevicesDTOSecubaseConfig(); // SmartDevicesDTOSecubaseConfig | Secubase config properties

apiInstance.getSecubaseConfig(smartDeviceId, secubaseConfigProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 
 **secubaseConfigProperties** | [**SmartDevicesDTOSecubaseConfig**](SmartDevicesDTOSecubaseConfig.md)| Secubase config properties | 

### Return type

[**SmartDevicesSecubaseConfig**](SmartDevicesSecubaseConfig.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateDevice"></a>
# **updateDevice**
> SmartDevicesProductModel updateDevice(smartDeviceId, smartDeviceProperties)

PUT Smart/Devices/{smartDeviceId}

Update smart device

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

let smartDeviceProperties = new SecuconnectJsSdk.SmartDevicesDTO(); // SmartDevicesDTO | Smart device properties

apiInstance.updateDevice(smartDeviceId, smartDeviceProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 
 **smartDeviceProperties** | [**SmartDevicesDTO**](SmartDevicesDTO.md)| Smart device properties | 

### Return type

[**SmartDevicesProductModel**](SmartDevicesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updatePin"></a>
# **updatePin**
> SmartDevicesProductModel updatePin(smartDeviceId, smartDeviceProperties)

PUT /Smart/Devices/{smartDeviceId}/pin

Create new smart device

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.SmartDevicesApi();

let smartDeviceId = "smartDeviceId_example"; // String | Smart device id

let smartDeviceProperties = new SecuconnectJsSdk.SmartDeviceUserPin(); // SmartDeviceUserPin | Smart device properties

apiInstance.updatePin(smartDeviceId, smartDeviceProperties).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartDeviceId** | **String**| Smart device id | 
 **smartDeviceProperties** | [**SmartDeviceUserPin**](SmartDeviceUserPin.md)| Smart device properties | 

### Return type

[**SmartDevicesProductModel**](SmartDevicesProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

