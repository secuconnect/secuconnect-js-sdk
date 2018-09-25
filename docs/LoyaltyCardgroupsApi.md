# SecuconnectApi.LoyaltyCardgroupsApi

All URIs are relative to *https://connect-testing.secupay-ag.de/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCardGroup**](LoyaltyCardgroupsApi.md#addCardGroup) | **POST** /Loyalty/Cardgroups | POST Loyalty/Cardgroups
[**checkPassCodeEnabled**](LoyaltyCardgroupsApi.md#checkPassCodeEnabled) | **POST** /Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled | POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled
[**getAll**](LoyaltyCardgroupsApi.md#getAll) | **GET** /Loyalty/Cardgroups | GET Loyalty/Cardgroups
[**getOne**](LoyaltyCardgroupsApi.md#getOne) | **GET** /Loyalty/Cardgroups/{loyaltyCardGroupId} | GET Loyalty/Cardgroups/{loyaltyCardGroupId}
[**updateCardGroup**](LoyaltyCardgroupsApi.md#updateCardGroup) | **PUT** /Loyalty/Cardgroups/{loyaltyCardGroupId} | PUT Loyalty/Cardgroups/{loyaltyCardGroupId}


<a name="addCardGroup"></a>
# **addCardGroup**
> LoyaltyCardgroupsProductModel addCardGroup(body)

POST Loyalty/Cardgroups

Add loyalty card group

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltyCardgroupsApi();

let body = new SecuconnectApi.LoyaltyCardgroupsDTO(); // LoyaltyCardgroupsDTO | Loyalty card group properties

apiInstance.addCardGroup(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoyaltyCardgroupsDTO**](LoyaltyCardgroupsDTO.md)| Loyalty card group properties | 

### Return type

[**LoyaltyCardgroupsProductModel**](LoyaltyCardgroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkPassCodeEnabled"></a>
# **checkPassCodeEnabled**
> Object checkPassCodeEnabled(loyaltyCardGroupId, opts)

POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled

Check whether passcode check is enabled

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltyCardgroupsApi();

let loyaltyCardGroupId = "loyaltyCardGroupId_example"; // String | Loyalty card group id

let opts = { 
  'body': new SecuconnectApi.LoyaltyCardgroupsDTOCheckPasscodeEnabled() // LoyaltyCardgroupsDTOCheckPasscodeEnabled | Check passcode details
};
apiInstance.checkPassCodeEnabled(loyaltyCardGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyCardGroupId** | **String**| Loyalty card group id | 
 **body** | [**LoyaltyCardgroupsDTOCheckPasscodeEnabled**](LoyaltyCardgroupsDTOCheckPasscodeEnabled.md)| Check passcode details | [optional] 

### Return type

**Object**

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAll"></a>
# **getAll**
> LoyaltyCardgroupsList getAll(opts)

GET Loyalty/Cardgroups

Get a list of loyalty card groups

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltyCardgroupsApi();

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

[**LoyaltyCardgroupsList**](LoyaltyCardgroupsList.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOne"></a>
# **getOne**
> LoyaltyCardgroupsProductModel getOne(loyaltyCardGroupId)

GET Loyalty/Cardgroups/{loyaltyCardGroupId}

Get loyalty card group for a specific id

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltyCardgroupsApi();

let loyaltyCardGroupId = "loyaltyCardGroupId_example"; // String | Search one by provided id

apiInstance.getOne(loyaltyCardGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyCardGroupId** | **String**| Search one by provided id | 

### Return type

[**LoyaltyCardgroupsProductModel**](LoyaltyCardgroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCardGroup"></a>
# **updateCardGroup**
> LoyaltyCardgroupsProductModel updateCardGroup(loyaltyCardGroupId, body)

PUT Loyalty/Cardgroups/{loyaltyCardGroupId}

Update loyalty card group

### Example
```javascript
import SecuconnectApi from 'secuconnect_api';
let defaultClient = SecuconnectApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_token
let oauth_token = defaultClient.authentications['oauth_token'];
oauth_token.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SecuconnectApi.LoyaltyCardgroupsApi();

let loyaltyCardGroupId = "loyaltyCardGroupId_example"; // String | Loyalty card group id

let body = new SecuconnectApi.LoyaltyCardgroupsDTO(); // LoyaltyCardgroupsDTO | Loyalty card group properties

apiInstance.updateCardGroup(loyaltyCardGroupId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyCardGroupId** | **String**| Loyalty card group id | 
 **body** | [**LoyaltyCardgroupsDTO**](LoyaltyCardgroupsDTO.md)| Loyalty card group properties | 

### Return type

[**LoyaltyCardgroupsProductModel**](LoyaltyCardgroupsProductModel.md)

### Authorization

[oauth_token](../README.md#oauth_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

