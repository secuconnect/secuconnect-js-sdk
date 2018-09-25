# SecuconnectApi.PaymentTransactionsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentTransactionsGet**](PaymentTransactionsApi.md#paymentTransactionsGet) | **GET** /Payment/Transactions | GET Payment/Transactions
[**paymentTransactionsGetById**](PaymentTransactionsApi.md#paymentTransactionsGetById) | **GET** /Payment/Transactions/{paymentTransactionId} | GET Payment/Transactions/{paymentTransactionId}
[**paymentTransactionsPaymentTransactionIdCancelPost**](PaymentTransactionsApi.md#paymentTransactionsPaymentTransactionIdCancelPost) | **POST** /Payment/Transactions/{paymentTransactionId}/cancel | POST Payment/Transactions/{paymentTransactionId}/cancel
[**paymentTransactionsPaymentTransactionIdShippingUrlGet**](PaymentTransactionsApi.md#paymentTransactionsPaymentTransactionIdShippingUrlGet) | **GET** /Payment/Transactions/{paymentTransactionId}/ShippingUrl | GET Payment/Transactions/{paymentTransactionId}/ShippingUrl


<a name="paymentTransactionsGet"></a>
# **paymentTransactionsGet**
> PaymentTransactionsList paymentTransactionsGet(opts)

GET Payment/Transactions

Get a list of payment transactions

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentTransactionsApi();

let opts = { 
  'count': 56, // Number | The number of items to return.
  'offset': 56, // Number | The position within the whole result set to start returning items (First element is at 0).
  'fields': "fields_example", // String | List of fields to include in the result. Nested properties can be accessed with this notation: prop1.prop2  Example: prop3,prop1.prop2
  'q': "q_example", // String | A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form property:condition.  *                  A condition may contain:  *                      - wildcard \"*\" for any number of characters  *                      - wildcard \"?\" for one character  *                      - ranges in the form [value TO value]  *  *                  Single expressions may combined by 'AND', 'OR', 'NOT' operators and parenthesis '(', ')' for grouping.  *                  Property names can be nested like \"prop1.prop2\".  *                  Example: (NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])  *                  
  'sort': "sort_example" // String | String with comma separated pairs of field:order (e.g. contact.surname:asc,contact.comapnyname:desc). Result set will be sorted by included fields, in ascending 'asc', or descending 'dsc' order.
};
apiInstance.paymentTransactionsGet(opts).then((data) => {
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

[**PaymentTransactionsList**](PaymentTransactionsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentTransactionsGetById"></a>
# **paymentTransactionsGetById**
> PaymentTransactionsProductModel paymentTransactionsGetById(paymentTransactionId)

GET Payment/Transactions/{paymentTransactionId}

Get all payment transactions

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentTransactionsApi();

let paymentTransactionId = "paymentTransactionId_example"; // String | Payment transaction id

apiInstance.paymentTransactionsGetById(paymentTransactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentTransactionId** | **String**| Payment transaction id | 

### Return type

[**PaymentTransactionsProductModel**](PaymentTransactionsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentTransactionsPaymentTransactionIdCancelPost"></a>
# **paymentTransactionsPaymentTransactionIdCancelPost**
> [PaymentTransactionsCancelList] paymentTransactionsPaymentTransactionIdCancelPost(paymentTransactionId)

POST Payment/Transactions/{paymentTransactionId}/cancel

Cancel a payment transaction

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentTransactionsApi();

let paymentTransactionId = "paymentTransactionId_example"; // String | Payment transaction id

apiInstance.paymentTransactionsPaymentTransactionIdCancelPost(paymentTransactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentTransactionId** | **String**| Payment transaction id | 

### Return type

[**[PaymentTransactionsCancelList]**](PaymentTransactionsCancelList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentTransactionsPaymentTransactionIdShippingUrlGet"></a>
# **paymentTransactionsPaymentTransactionIdShippingUrlGet**
> PaymentTransactionsShippingUrl paymentTransactionsPaymentTransactionIdShippingUrlGet(paymentTransactionId)

GET Payment/Transactions/{paymentTransactionId}/ShippingUrl

Get the url where you can fill the shipping information

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.PaymentTransactionsApi();

let paymentTransactionId = "paymentTransactionId_example"; // String | Payment transaction id

apiInstance.paymentTransactionsPaymentTransactionIdShippingUrlGet(paymentTransactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentTransactionId** | **String**| Payment transaction id | 

### Return type

[**PaymentTransactionsShippingUrl**](PaymentTransactionsShippingUrl.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

