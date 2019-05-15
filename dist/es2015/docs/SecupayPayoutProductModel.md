# SecuconnectJsSdk.SecupayPayoutProductModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | **String** | Product name | [optional] 
**id** | **String** | ID of instance | [optional] 
**transId** | **Number** | ID of transaction | [optional] 
**status** | **String** | Transaction status | [optional] 
**amount** | **Number** | Total amount of transaction lit&#39;s items | [optional] 
**currency** | **String** | ISO 4217 code of currency, eg EUR for Euro. | [optional] 
**purpose** | **String** | The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer. | [optional] 
**orderId** | **String** | Specifying an order number. Depending on the contract setting, this must be unique for each payment. | [optional] 
**transactionStatus** | **String** | Transaction status (number) | [optional] 
**transactionList** | [**[SecupayTransactionListItem]**](SecupayTransactionListItem.md) | A list of transaction items | [optional] 
**transferPurpose** | **String** | The purpose the payer needs to use for his transfer | [optional] 
**transferAccount** | [**PaymentInformation**](PaymentInformation.md) | The bank account the payer needs to use for his transfer | [optional] 


