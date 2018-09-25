# SecuconnectJsSdk.LoyaltyMerchantcardsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMerchantCard**](LoyaltyMerchantcardsApi.md#addMerchantCard) | **POST** /Loyalty/MerchantCards | POST Loyalty/MerchantCards
[**checkCsc**](LoyaltyMerchantcardsApi.md#checkCsc) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc
[**checkPassCode**](LoyaltyMerchantcardsApi.md#checkPassCode) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode
[**createMerchantcards**](LoyaltyMerchantcardsApi.md#createMerchantcards) | **POST** /Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId} | POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}
[**executeTransaction**](LoyaltyMerchantcardsApi.md#executeTransaction) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction
[**getAll**](LoyaltyMerchantcardsApi.md#getAll) | **GET** /Loyalty/MerchantCards | GET Loyalty/MerchantCards
[**getLock**](LoyaltyMerchantcardsApi.md#getLock) | **GET** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock | GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
[**getOne**](LoyaltyMerchantcardsApi.md#getOne) | **GET** /Loyalty/MerchantCards/{loyaltyMerchantCardId} | GET Loyalty/MerchantCards/{loyaltyMerchantCardId}
[**getRawMerchantCardId**](LoyaltyMerchantcardsApi.md#getRawMerchantCardId) | **GET** /Loyalty/MerchantCards/{generalMerchantId}/merchantcard/{loyaltyCardId} | GET Loyalty/MerchantCards/{generalMerchantId}/merchantcard/{loyaltyCardId}
[**getVirtualTerminalData**](LoyaltyMerchantcardsApi.md#getVirtualTerminalData) | **GET** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId} | GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}
[**lock**](LoyaltyMerchantcardsApi.md#lock) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock
[**newPassCode**](LoyaltyMerchantcardsApi.md#newPassCode) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode
[**registerCustomer**](LoyaltyMerchantcardsApi.md#registerCustomer) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer
[**removeMerchantCard**](LoyaltyMerchantcardsApi.md#removeMerchantCard) | **DELETE** /Loyalty/MerchantCards/{loyaltyMerchantCardId} | DELETE Loyalty/MerchantCards/{loyaltyMerchantCardId}
[**resetPassCode**](LoyaltyMerchantcardsApi.md#resetPassCode) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode
[**setCustomer**](LoyaltyMerchantcardsApi.md#setCustomer) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId} | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}
[**unlock**](LoyaltyMerchantcardsApi.md#unlock) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock
[**updateCardGroupOfMerchantCard**](LoyaltyMerchantcardsApi.md#updateCardGroupOfMerchantCard) | **PUT** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId} | PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}
[**updateMerchantCard**](LoyaltyMerchantcardsApi.md#updateMerchantCard) | **PUT** /Loyalty/MerchantCards/{loyaltyMerchantCardId} | PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}
[**validateMerchantCard**](LoyaltyMerchantcardsApi.md#validateMerchantCard) | **POST** /Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard | POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard


<a name="addMerchantCard"></a>
# **addMerchantCard**
> LoyaltyMerchantcardsProductModel addMerchantCard(body)

POST Loyalty/MerchantCards

Add new loyalty merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTO(); // LoyaltyMerchantcardsDTO | Loyalty merchant card properties

apiInstance.addMerchantCard(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoyaltyMerchantcardsDTO**](LoyaltyMerchantcardsDTO.md)| Loyalty merchant card properties | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkCsc"></a>
# **checkCsc**
> Object checkCsc(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc

Check CSC

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOCsc(); // LoyaltyMerchantcardsDTOCsc | Information about card

apiInstance.checkCsc(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOCsc**](LoyaltyMerchantcardsDTOCsc.md)| Information about card | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkPassCode"></a>
# **checkPassCode**
> Object checkPassCode(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode

Function to check the Passcode card with cardnumber

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOCheckPasscode(); // LoyaltyMerchantcardsDTOCheckPasscode | Information about card

apiInstance.checkPassCode(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOCheckPasscode**](LoyaltyMerchantcardsDTOCheckPasscode.md)| Information about card | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createMerchantcards"></a>
# **createMerchantcards**
> [LoyaltyMerchantcardsProductModel] createMerchantcards(generalMerchantId, loyaltyCardgroupId, body)

POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}

Function to create multiple merchantcards for given merchant with given cardgroup

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let generalMerchantId = "generalMerchantId_example"; // String | General merchant id

let loyaltyCardgroupId = "loyaltyCardgroupId_example"; // String | Loyalty card group id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOCardsAmount(); // LoyaltyMerchantcardsDTOCardsAmount | Cards amount

apiInstance.createMerchantcards(generalMerchantId, loyaltyCardgroupId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalMerchantId** | **String**| General merchant id | 
 **loyaltyCardgroupId** | **String**| Loyalty card group id | 
 **body** | [**LoyaltyMerchantcardsDTOCardsAmount**](LoyaltyMerchantcardsDTOCardsAmount.md)| Cards amount | 

### Return type

[**[LoyaltyMerchantcardsProductModel]**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="executeTransaction"></a>
# **executeTransaction**
> LoyaltyMerchantcardsProductWithReceiptModel executeTransaction(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction

Execute transaction from SDK

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOTransaction(); // LoyaltyMerchantcardsDTOTransaction | Transaction properties

apiInstance.executeTransaction(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOTransaction**](LoyaltyMerchantcardsDTOTransaction.md)| Transaction properties | 

### Return type

[**LoyaltyMerchantcardsProductWithReceiptModel**](LoyaltyMerchantcardsProductWithReceiptModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> LoyaltyMerchantcardsList getAll(opts)

GET Loyalty/MerchantCards

Get a list of loyalty merchant cards

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

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

[**LoyaltyMerchantcardsList**](LoyaltyMerchantcardsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLock"></a>
# **getLock**
> LoyaltyMerchantcardsDTOLock getLock(loyaltyMerchantCardId)

GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock

Get loyalty merchant card lock information for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

apiInstance.getLock(loyaltyMerchantCardId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 

### Return type

[**LoyaltyMerchantcardsDTOLock**](LoyaltyMerchantcardsDTOLock.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> LoyaltyMerchantcardsProductModel getOne(loyaltyMerchantCardId)

GET Loyalty/MerchantCards/{loyaltyMerchantCardId}

Get loyalty merchant card for a specific id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Search one by provided id

apiInstance.getOne(loyaltyMerchantCardId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Search one by provided id | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getRawMerchantCardId"></a>
# **getRawMerchantCardId**
> Object getRawMerchantCardId(generalMerchantId, loyaltyCardId)

GET Loyalty/MerchantCards/{generalMerchantId}/merchantcard/{loyaltyCardId}

Get raw merchant card id for merchant id and card id

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let generalMerchantId = "generalMerchantId_example"; // String | Merchant id

let loyaltyCardId = "loyaltyCardId_example"; // String | Card id

apiInstance.getRawMerchantCardId(generalMerchantId, loyaltyCardId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalMerchantId** | **String**| Merchant id | 
 **loyaltyCardId** | **String**| Card id | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVirtualTerminalData"></a>
# **getVirtualTerminalData**
> VirtualTerminalData getVirtualTerminalData(loyaltyMerchantCardId, loyaltyMerchantId)

GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}

Get virtual terminal data for merchant

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Merchant card id

let loyaltyMerchantId = "loyaltyMerchantId_example"; // String | Merchant id

apiInstance.getVirtualTerminalData(loyaltyMerchantCardId, loyaltyMerchantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Merchant card id | 
 **loyaltyMerchantId** | **String**| Merchant id | 

### Return type

[**VirtualTerminalData**](VirtualTerminalData.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="lock"></a>
# **lock**
> LoyaltyMerchantcardsProductModel lock(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock

Lock merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOLock(); // LoyaltyMerchantcardsDTOLock | Information about lock

apiInstance.lock(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOLock**](LoyaltyMerchantcardsDTOLock.md)| Information about lock | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="newPassCode"></a>
# **newPassCode**
> Object newPassCode(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode

Function to save new given passcode for given merchantcard identified by cardnumber

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTONewPasscode(); // LoyaltyMerchantcardsDTONewPasscode | Information about card

apiInstance.newPassCode(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTONewPasscode**](LoyaltyMerchantcardsDTONewPasscode.md)| Information about card | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="registerCustomer"></a>
# **registerCustomer**
> LoyaltyMerchantcardsProductModel registerCustomer(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer

Register new customer for a card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyCustomersDTO(); // LoyaltyCustomersDTO | Loyalty customer properties

apiInstance.registerCustomer(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyCustomersDTO**](LoyaltyCustomersDTO.md)| Loyalty customer properties | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeMerchantCard"></a>
# **removeMerchantCard**
> LoyaltyMerchantcardsProductModel removeMerchantCard(loyaltyMerchantCardId)

DELETE Loyalty/MerchantCards/{loyaltyMerchantCardId}

Delete loyalty merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

apiInstance.removeMerchantCard(loyaltyMerchantCardId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="resetPassCode"></a>
# **resetPassCode**
> Object resetPassCode(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode

Function to reset a passcode for given merchantcard

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOResetPasscode(); // LoyaltyMerchantcardsDTOResetPasscode | Information about card

apiInstance.resetPassCode(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOResetPasscode**](LoyaltyMerchantcardsDTOResetPasscode.md)| Information about card | 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setCustomer"></a>
# **setCustomer**
> LoyaltyMerchantcardsProductModel setCustomer(loyaltyMerchantCardId, loyaltyCustomerId)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}

Set loyalty customer for a loyalty merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let loyaltyCustomerId = "loyaltyCustomerId_example"; // String | Loyalty customer id

apiInstance.setCustomer(loyaltyMerchantCardId, loyaltyCustomerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **loyaltyCustomerId** | **String**| Loyalty customer id | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unlock"></a>
# **unlock**
> LoyaltyMerchantcardsProductModel unlock(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock

Unlock merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOLock(); // LoyaltyMerchantcardsDTOLock | Information about unlock

apiInstance.unlock(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOLock**](LoyaltyMerchantcardsDTOLock.md)| Information about unlock | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCardGroupOfMerchantCard"></a>
# **updateCardGroupOfMerchantCard**
> LoyaltyMerchantcardsProductModel updateCardGroupOfMerchantCard(loyaltyMerchantCardId, loyaltyCardGroupId)

PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}

Update loyalty card group

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let loyaltyCardGroupId = "loyaltyCardGroupId_example"; // String | Loyalty card group id

apiInstance.updateCardGroupOfMerchantCard(loyaltyMerchantCardId, loyaltyCardGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **loyaltyCardGroupId** | **String**| Loyalty card group id | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateMerchantCard"></a>
# **updateMerchantCard**
> LoyaltyMerchantcardsProductModel updateMerchantCard(loyaltyMerchantCardId, body)

PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}

Update loyalty merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTO(); // LoyaltyMerchantcardsDTO | Loyalty merchant card properties

apiInstance.updateMerchantCard(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTO**](LoyaltyMerchantcardsDTO.md)| Loyalty merchant card properties | 

### Return type

[**LoyaltyMerchantcardsProductModel**](LoyaltyMerchantcardsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validateMerchantCard"></a>
# **validateMerchantCard**
> LoyaltyMerchantcardsValidateMerchantCard validateMerchantCard(loyaltyMerchantCardId, body)

POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard

Function to check the merchant card

### Example
```javascript
import SecuconnectJsSdk from 'secuconnect-js-sdk';
let defaultClient = SecuconnectJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectJsSdk.LoyaltyMerchantcardsApi();

let loyaltyMerchantCardId = "loyaltyMerchantCardId_example"; // String | Loyalty merchant card id

let body = new SecuconnectJsSdk.LoyaltyMerchantcardsDTOValidateMerchantCard(); // LoyaltyMerchantcardsDTOValidateMerchantCard | Information about card

apiInstance.validateMerchantCard(loyaltyMerchantCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyMerchantCardId** | **String**| Loyalty merchant card id | 
 **body** | [**LoyaltyMerchantcardsDTOValidateMerchantCard**](LoyaltyMerchantcardsDTOValidateMerchantCard.md)| Information about card | 

### Return type

[**LoyaltyMerchantcardsValidateMerchantCard**](LoyaltyMerchantcardsValidateMerchantCard.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

