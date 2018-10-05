# SecuconnectJsSdk.PaymentSecupayPrepaysApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignExternalInvoicePdf**](PaymentSecupayPrepaysApi.md#assignExternalInvoicePdf) | **POST** /Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId} | POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}
[**cancelPaymentTransactionById**](PaymentSecupayPrepaysApi.md#cancelPaymentTransactionById) | **POST** /Payment/{paymentMethod}/{paymentId}/cancel | POST Payment/{paymentMethod}/{paymentId}/cancel
[**capturePaymentTransactionById**](PaymentSecupayPrepaysApi.md#capturePaymentTransactionById) | **POST** /Payment/{paymentMethod}/{paymentId}/capture | POST Payment/{paymentMethod}/{paymentId}/capture
[**paymentSecupayPrepaysCancelById**](PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysCancelById) | **POST** /Payment/Secupayprepays/{paymentPrepayId}/cancel | POST Payment/Secupayprepays/{paymentPrepayId}/cancel
[**paymentSecupayPrepaysGetById**](PaymentSecupayPrepaysApi.md#paymentSecupayPrepaysGetById) | **GET** /Payment/Secupayprepays/{paymentPrepayId} | GET Payment/Secupayprepays/{paymentPrepayId}
[**paymentSecupayprepaysPost**](PaymentSecupayPrepaysApi.md#paymentSecupayprepaysPost) | **POST** /Payment/Secupayprepays | POST Payment/Secupayprepays
[**reverseAccrualByPaymentId**](PaymentSecupayPrepaysApi.md#reverseAccrualByPaymentId) | **PUT** /Payment/{paymentMethod}/{paymentId}/accrual | PUT Payment/{paymentMethod}/{paymentId}/accrual
[**setShippingInformationByPaymentId**](PaymentSecupayPrepaysApi.md#setShippingInformationByPaymentId) | **PUT** /Payment/{paymentMethod}/{paymentId}/shippingInformation | PUT Payment/{paymentMethod}/{paymentId}/shippingInformation
[**updateBasketByPaymentId**](PaymentSecupayPrepaysApi.md#updateBasketByPaymentId) | **PUT** /Payment/{paymentMethod}/{paymentId}/basket | PUT Payment/{paymentMethod}/{paymentId}/basket


<a name="assignExternalInvoicePdf"></a>
# **assignExternalInvoicePdf**
> SecupayTransactionExternalInvoicePdf assignExternalInvoicePdf(paymentMethod, paymentId, documentId, body)

POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}

Assign external invoice pdf

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)

let paymentId = "paymentId_example"; // String | Payment id

let documentId = "documentId_example"; // String | Document id

let body = new SecuconnectJsSdk.SecupayTransactionDTOExternalInvoicePdf(); // SecupayTransactionDTOExternalInvoicePdf | Request body for assigning external invoice pdf

apiInstance.assignExternalInvoicePdf(paymentMethod, paymentId, documentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (secupaydebits, secupayprepays, secupayinvoices, ...) | 
 **paymentId** | **String**| Payment id | 
 **documentId** | **String**| Document id | 
 **body** | [**SecupayTransactionDTOExternalInvoicePdf**](SecupayTransactionDTOExternalInvoicePdf.md)| Request body for assigning external invoice pdf | 

### Return type

[**SecupayTransactionExternalInvoicePdf**](SecupayTransactionExternalInvoicePdf.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cancelPaymentTransactionById"></a>
# **cancelPaymentTransactionById**
> Object cancelPaymentTransactionById(paymentMethod, paymentId, opts)

POST Payment/{paymentMethod}/{paymentId}/cancel

Function to cancel the payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)

let paymentId = "paymentId_example"; // String | Payment id

let opts = { 
  'body': new SecuconnectJsSdk.SecupayTransactionCancelDTO() // SecupayTransactionCancelDTO | Cancel payment transaction input properties
};
apiInstance.cancelPaymentTransactionById(paymentMethod, paymentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (secupaydebits, secupayprepays, secupayinvoices, ...) | 
 **paymentId** | **String**| Payment id | 
 **body** | [**SecupayTransactionCancelDTO**](SecupayTransactionCancelDTO.md)| Cancel payment transaction input properties | [optional] 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="capturePaymentTransactionById"></a>
# **capturePaymentTransactionById**
> SecupayTransactionProductModel capturePaymentTransactionById(paymentMethod, paymentId, opts)

POST Payment/{paymentMethod}/{paymentId}/capture

Function to cancel the payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)

let paymentId = "paymentId_example"; // String | Payment id

let opts = { 
  'body': new SecuconnectJsSdk.SecupayTransactionCaptureDTO() // SecupayTransactionCaptureDTO | Capture payment transaction input properties
};
apiInstance.capturePaymentTransactionById(paymentMethod, paymentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (secupaydebits, secupayprepays, secupayinvoices, ...) | 
 **paymentId** | **String**| Payment id | 
 **body** | [**SecupayTransactionCaptureDTO**](SecupayTransactionCaptureDTO.md)| Capture payment transaction input properties | [optional] 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayPrepaysCancelById"></a>
# **paymentSecupayPrepaysCancelById**
> Object paymentSecupayPrepaysCancelById(paymentPrepayId)

POST Payment/Secupayprepays/{paymentPrepayId}/cancel

DEPRECATED: use cancelPaymentTransactionById

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentPrepayId = "paymentPrepayId_example"; // String | Payment prepay id

apiInstance.paymentSecupayPrepaysCancelById(paymentPrepayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPrepayId** | **String**| Payment prepay id | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayPrepaysGetById"></a>
# **paymentSecupayPrepaysGetById**
> SecupayTransactionProductModel paymentSecupayPrepaysGetById(paymentPrepayId)

GET Payment/Secupayprepays/{paymentPrepayId}

Get the details of a payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentPrepayId = "paymentPrepayId_example"; // String | Payment prepay id

apiInstance.paymentSecupayPrepaysGetById(paymentPrepayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPrepayId** | **String**| Payment prepay id | 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentSecupayprepaysPost"></a>
# **paymentSecupayprepaysPost**
> SecupayTransactionProductModel paymentSecupayprepaysPost(opts)

POST Payment/Secupayprepays

Start a prepay payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let opts = { 
  'body': new SecuconnectJsSdk.SecupayTransactionProductDTO() // SecupayTransactionProductDTO | Prepay payment transaction input properties
};
apiInstance.paymentSecupayprepaysPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SecupayTransactionProductDTO**](SecupayTransactionProductDTO.md)| Prepay payment transaction input properties | [optional] 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reverseAccrualByPaymentId"></a>
# **reverseAccrualByPaymentId**
> SecupayTransactionProductModel reverseAccrualByPaymentId(paymentMethod, paymentId, body)

PUT Payment/{paymentMethod}/{paymentId}/accrual

Update the accrual flag of an existing payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)

let paymentId = "paymentId_example"; // String | Payment id

let body = new SecuconnectJsSdk.SecupayTransactionReverseAccrualDTO(); // SecupayTransactionReverseAccrualDTO | Reverse accrual input properties

apiInstance.reverseAccrualByPaymentId(paymentMethod, paymentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (secupaydebits, secupayprepays, secupayinvoices, ...) | 
 **paymentId** | **String**| Payment id | 
 **body** | [**SecupayTransactionReverseAccrualDTO**](SecupayTransactionReverseAccrualDTO.md)| Reverse accrual input properties | 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setShippingInformationByPaymentId"></a>
# **setShippingInformationByPaymentId**
> SecupayTransactionProductModel setShippingInformationByPaymentId(paymentMethod, paymentId, body)

PUT Payment/{paymentMethod}/{paymentId}/shippingInformation

Update the accrual flag of an existing payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)

let paymentId = "paymentId_example"; // String | Payment id

let body = new SecuconnectJsSdk.SecupayTransactionSetShippingInformationDTO(); // SecupayTransactionSetShippingInformationDTO | Shipping information properties

apiInstance.setShippingInformationByPaymentId(paymentMethod, paymentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (secupaydebits, secupayprepays, secupayinvoices, ...) | 
 **paymentId** | **String**| Payment id | 
 **body** | [**SecupayTransactionSetShippingInformationDTO**](SecupayTransactionSetShippingInformationDTO.md)| Shipping information properties | 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateBasketByPaymentId"></a>
# **updateBasketByPaymentId**
> SecupayTransactionProductModel updateBasketByPaymentId(paymentMethod, paymentId, body)

PUT Payment/{paymentMethod}/{paymentId}/basket

Update a basket of an existing payment transaction

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.PaymentSecupayPrepaysApi();

let paymentMethod = "paymentMethod_example"; // String | Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)

let paymentId = "paymentId_example"; // String | Payment id

let body = new SecuconnectJsSdk.SecupayTransactionUpdateBasketDTO(); // SecupayTransactionUpdateBasketDTO | Update basket input properties

apiInstance.updateBasketByPaymentId(paymentMethod, paymentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethod** | **String**| Payment method (secupaydebits, secupayprepays, secupayinvoices, ...) | 
 **paymentId** | **String**| Payment id | 
 **body** | [**SecupayTransactionUpdateBasketDTO**](SecupayTransactionUpdateBasketDTO.md)| Update basket input properties | 

### Return type

[**SecupayTransactionProductModel**](SecupayTransactionProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

