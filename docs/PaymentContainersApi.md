# SecuConnectApi.PaymentContainersApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentContainersGet**](PaymentContainersApi.md#paymentContainersGet) | **GET** Payment/Containers | GET Payment/Containers
[**paymentContainersGetById**](PaymentContainersApi.md#paymentContainersGetById) | **GET** Payment/Containers/{id} | GET Payment/Containers/{id}
[**paymentContainersIdAssignSecondaryIdDelete**](PaymentContainersApi.md#paymentContainersIdAssignSecondaryIdDelete) | **DELETE** Payment/Containers/{id}/assign/{secondary-id} | DELETE Payment/Containers/{id}/assign/{secondary-id}
[**paymentContainersIdAssignSecondaryIdPost**](PaymentContainersApi.md#paymentContainersIdAssignSecondaryIdPost) | **POST** Payment/Containers/{id}/assign/{secondary-id} | POST Payment/Containers/{id}/assign/{secondary-id}
[**paymentContainersIdDelete**](PaymentContainersApi.md#paymentContainersIdDelete) | **DELETE** Payment/Containers/{id} | DELETE Payment/Containers/{id}
[**paymentContainersIdPut**](PaymentContainersApi.md#paymentContainersIdPut) | **PUT** Payment/Containers/{id} | PUT Payment/Containers/{id}
[**paymentContainersPost**](PaymentContainersApi.md#paymentContainersPost) | **POST** Payment/Containers | POST Payment/Containers


<a name="paymentContainersGet"></a>
# **paymentContainersGet**
> PaymentContainersList paymentContainersGet(opts)

GET Payment/Containers

Get a list of payment containers

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let opts = { 
  'count': 56, // Number | The number of items to return.
  'offset': 56, // Number | The position within the whole result set to start returning items (First element is at 0).
  'fields': "fields_example", // String | List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
  'q': "q_example", // String | A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \"*\" for any number of characters  *                      - wildcard \"?\" for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by 'AND', 'OR', 'NOT' operators and parenthesis '(', ')' for grouping.  *                  Property names can be nested like \"prop1.prop2\".  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
  'sort': "sort_example" // String | String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending 'asc', or descending 'dsc' order.
};
apiInstance.paymentContainersGet(opts).then((data) => {
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

[**PaymentContainersList**](PaymentContainersList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContainersGetById"></a>
# **paymentContainersGetById**
> PaymentContainersProductModel paymentContainersGetById(id)

GET Payment/Containers/{id}

Get all payment containers

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let id = "id_example"; // String | Search one by provided id

apiInstance.paymentContainersGetById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Search one by provided id | 

### Return type

[**PaymentContainersProductModel**](PaymentContainersProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContainersIdAssignSecondaryIdDelete"></a>
# **paymentContainersIdAssignSecondaryIdDelete**
> [PaymentContainersProductModel] paymentContainersIdAssignSecondaryIdDelete(id, secondaryId)

DELETE Payment/Containers/{id}/assign/{secondary-id}

Removes an existing payment container assignment

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let id = "id_example"; // String | Payment container id

let secondaryId = "secondaryId_example"; // String | Id for which container is currently assigned to

apiInstance.paymentContainersIdAssignSecondaryIdDelete(id, secondaryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Payment container id | 
 **secondaryId** | **String**| Id for which container is currently assigned to | 

### Return type

[**[PaymentContainersProductModel]**](PaymentContainersProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContainersIdAssignSecondaryIdPost"></a>
# **paymentContainersIdAssignSecondaryIdPost**
> PaymentContainersProductModel paymentContainersIdAssignSecondaryIdPost(id, secondaryId)

POST Payment/Containers/{id}/assign/{secondary-id}

Assign an existing payment container to ...

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let id = "id_example"; // String | Payment container id

let secondaryId = "secondaryId_example"; // String | Id to which container will be assigned

apiInstance.paymentContainersIdAssignSecondaryIdPost(id, secondaryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Payment container id | 
 **secondaryId** | **String**| Id to which container will be assigned | 

### Return type

[**PaymentContainersProductModel**](PaymentContainersProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContainersIdDelete"></a>
# **paymentContainersIdDelete**
> [PaymentContainersProductModel] paymentContainersIdDelete(id)

DELETE Payment/Containers/{id}

Delete payment container

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let id = "id_example"; // String | Payment container id

apiInstance.paymentContainersIdDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Payment container id | 

### Return type

[**[PaymentContainersProductModel]**](PaymentContainersProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContainersIdPut"></a>
# **paymentContainersIdPut**
> PaymentContainersProductModel paymentContainersIdPut(id, body)

PUT Payment/Containers/{id}

Update payment container

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let id = "id_example"; // String | Payment container id

let body = new SecuConnectApi.PaymentContainersDTO(); // PaymentContainersDTO | Payment container properties

apiInstance.paymentContainersIdPut(id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Payment container id | 
 **body** | [**PaymentContainersDTO**](PaymentContainersDTO.md)| Payment container properties | 

### Return type

[**PaymentContainersProductModel**](PaymentContainersProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentContainersPost"></a>
# **paymentContainersPost**
> PaymentContainersProductModel paymentContainersPost(body)

POST Payment/Containers

Add new containers

### Example
```javascript
import SecuConnectApi from 'secu_connect_api';
let defaultClient = SecuConnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuConnectApi.PaymentContainersApi();

let body = new SecuConnectApi.PaymentContainersDTO(); // PaymentContainersDTO | Payment container properties

apiInstance.paymentContainersPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentContainersDTO**](PaymentContainersDTO.md)| Payment container properties | 

### Return type

[**PaymentContainersProductModel**](PaymentContainersProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

