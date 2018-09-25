# SecuconnectApi.PaymentTransactionsProductModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | **String** | Object of payment transaction | [optional] 
**id** | **String** | Id of payment transaction | [optional] 
**merchant** | [**PaymentTransactionsProductModelMerchant**](PaymentTransactionsProductModelMerchant.md) |  | [optional] 
**transId** | **Number** | Transaction identifier | [optional] 
**productId** | **Number** | Product identifier | [optional] 
**product** | **String** | Product type | [optional] 
**productRaw** | **String** | the name of the payment product | [optional] 
**zahlungsmittelId** | **Number** | The internal id of the stored payment instrument. | [optional] 
**contractId** | **Number** | Contract identifier | [optional] 
**amount** | **Number** | Total amount of payment in cents (or the smallest cash unit of the relevant currency) | [optional] 
**currency** | **String** | ISO 4217 code of currency, eg EUR for Euro. | [optional] 
**created** | **Date** | Created at date | [optional] 
**updated** | **Date** | Updated at date | [optional] 
**status** | **Number** | WTF?? | [optional] 
**statusText** | **String** | Transaction status | [optional] 
**details** | [**PaymentTransactionsProductModelDetails**](PaymentTransactionsProductModelDetails.md) |  | [optional] 
**customer** | [**PaymentTransactionsProductModelCustomer**](PaymentTransactionsProductModelCustomer.md) |  | [optional] 


