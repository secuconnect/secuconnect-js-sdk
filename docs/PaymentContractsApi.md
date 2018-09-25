# SecuconnectApi.PaymentContractsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentContractsGet**](PaymentContractsApi.md#paymentContractsGet) | **GET** /Payment/Contracts | GET Payment/Contracts
[**paymentContractsGetById**](PaymentContractsApi.md#paymentContractsGetById) | **GET** /Payment/Contracts/{paymentContractId} | GET Payment/Contracts/{paymentContractId}
[**paymentContractsPaymentContractIdClonePost**](PaymentContractsApi.md#paymentContractsPaymentContractIdClonePost) | **POST** /Payment/Contracts/{paymentContractId}/clone | POST Payment/Contracts/{paymentContractId}/clone
[**paymentContractsPaymentContractIdDelete**](PaymentContractsApi.md#paymentContractsPaymentContractIdDelete) | **DELETE** /Payment/Contracts/{paymentContractId} | DELETE Payment/Contracts/{paymentContractId}
[**paymentContractsPaymentContractIdPaymentMethodsGet**](PaymentContractsApi.md#paymentContractsPaymentContractIdPaymentMethodsGet) | **GET** /Payment/Contracts/{paymentContractId}/PaymentMethods | GET Payment/Contracts/{paymentContractId}/PaymentMethods
[**paymentContractsPaymentContractIdPut**](PaymentContractsApi.md#paymentContractsPaymentContractIdPut) | **PUT** /Payment/Contracts/{paymentContractId} | PUT Payment/Contracts/{paymentContractId}
[**paymentContractsPaymentContractIdRequestIdPost**](PaymentContractsApi.md#paymentContractsPaymentContractIdRequestIdPost) | **POST** /Payment/Contracts/{paymentContractId}/requestId | POST Payment/Contracts/{paymentContractId}/requestId
[**paymentContractsPost**](PaymentContractsApi.md#paymentContractsPost) | **POST** /Payment/Contracts | POST Payment/Contracts


<a name="paymentContractsGet"></a>
# **paymentContractsGet**
> PaymentContractsList paymentContractsGet(opts)

GET Payment/Contracts

Get a list of payment contracts

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let opts = { 
  'count': 56, // Number | The number of items to return.
  'offset': 56, // Number | The position within the whole result set to start returning items (First element is at 0).
  'fields': "fields_example", // String | List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
  'q': "q_example", // String | A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \"*\" for any number of characters  *                      - wildcard \"?\" for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by 'AND', 'OR', 'NOT' operators and parenthesis '(', ')' for grouping.  *                  Property names can be nested like \"prop1.prop2\".  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
  'sort': "sort_example" // String | String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending 'asc', or descending 'dsc' order.
};
apiInstance.paymentContractsGet(opts).then((data) => {
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

[**PaymentContractsList**](PaymentContractsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsGetById"></a>
# **paymentContractsGetById**
> PaymentContractsProductModel paymentContractsGetById(paymentContractId)

GET Payment/Contracts/{paymentContractId}

Get all payment contracts

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let paymentContractId = "paymentContractId_example"; // String | Search one by provided id

apiInstance.paymentContractsGetById(paymentContractId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentContractId** | **String**| Search one by provided id | 

### Return type

[**PaymentContractsProductModel**](PaymentContractsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsPaymentContractIdClonePost"></a>
# **paymentContractsPaymentContractIdClonePost**
> PaymentContractsProductModel paymentContractsPaymentContractIdClonePost(paymentContractId)

POST Payment/Contracts/{paymentContractId}/clone

Clone an existing payment contract

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let paymentContractId = "paymentContractId_example"; // String | Contract identifier

apiInstance.paymentContractsPaymentContractIdClonePost(paymentContractId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentContractId** | **String**| Contract identifier | 

### Return type

[**PaymentContractsProductModel**](PaymentContractsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsPaymentContractIdDelete"></a>
# **paymentContractsPaymentContractIdDelete**
> [PaymentContractsProductModel] paymentContractsPaymentContractIdDelete(paymentContractId)

DELETE Payment/Contracts/{paymentContractId}

Delete payment contract

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let paymentContractId = "paymentContractId_example"; // String | Payment contract id

apiInstance.paymentContractsPaymentContractIdDelete(paymentContractId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentContractId** | **String**| Payment contract id | 

### Return type

[**[PaymentContractsProductModel]**](PaymentContractsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsPaymentContractIdPaymentMethodsGet"></a>
# **paymentContractsPaymentContractIdPaymentMethodsGet**
> [&#39;String&#39;] paymentContractsPaymentContractIdPaymentMethodsGet(paymentContractId)

GET Payment/Contracts/{paymentContractId}/PaymentMethods

Get available payment methods for given contract

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let paymentContractId = "paymentContractId_example"; // String | Contract identifier

apiInstance.paymentContractsPaymentContractIdPaymentMethodsGet(paymentContractId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentContractId** | **String**| Contract identifier | 

### Return type

**[&#39;String&#39;]**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsPaymentContractIdPut"></a>
# **paymentContractsPaymentContractIdPut**
> PaymentContractsProductModel paymentContractsPaymentContractIdPut(paymentContractId, body)

PUT Payment/Contracts/{paymentContractId}

Update payment contract

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let paymentContractId = "paymentContractId_example"; // String | Payment contract id

let body = new SecuconnectApi.PaymentContractsDTO(); // PaymentContractsDTO | Payment contract properties

apiInstance.paymentContractsPaymentContractIdPut(paymentContractId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentContractId** | **String**| Payment contract id | 
 **body** | [**PaymentContractsDTO**](PaymentContractsDTO.md)| Payment contract properties | 

### Return type

[**PaymentContractsProductModel**](PaymentContractsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsPaymentContractIdRequestIdPost"></a>
# **paymentContractsPaymentContractIdRequestIdPost**
> PaymentContractsRequestIdResult paymentContractsPaymentContractIdRequestIdPost(paymentContractId)

POST Payment/Contracts/{paymentContractId}/requestId

This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let paymentContractId = "paymentContractId_example"; // String | Contract identifier

apiInstance.paymentContractsPaymentContractIdRequestIdPost(paymentContractId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentContractId** | **String**| Contract identifier | 

### Return type

[**PaymentContractsRequestIdResult**](PaymentContractsRequestIdResult.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContractsPost"></a>
# **paymentContractsPost**
> PaymentContractsProductModel paymentContractsPost(body)

POST Payment/Contracts

Add new contract

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentContractsApi();

let body = new SecuconnectApi.PaymentContractsDTO(); // PaymentContractsDTO | Payment contracts properties

apiInstance.paymentContractsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentContractsDTO**](PaymentContractsDTO.md)| Payment contracts properties | 

### Return type

[**PaymentContractsProductModel**](PaymentContractsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

