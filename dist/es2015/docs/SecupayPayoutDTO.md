# SecuconnectJsSdk.SecupayPayoutDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**demo** | **Number** | demo env value | [optional] 
**redirectUrl** | [**SecupayRedirectUrl**](SecupayRedirectUrl.md) | A list of redirect urls used for the payment checkout page | [optional] 
**customer** | [**PaymentCustomersProductModel**](PaymentCustomersProductModel.md) | The customer object | [optional] 
**optData** | [**SecupayPayoutDTOOptData**](SecupayPayoutDTOOptData.md) |  | [optional] 
**amount** | **Number** | Total amount of transaction lit&#39;s items | [optional] 
**currency** | **String** | ISO 4217 code of currency, eg EUR for Euro. | [optional] 
**purpose** | **String** | The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer. | [optional] 
**orderId** | **String** | Specifying an order number. Depending on the contract setting, this must be unique for each payment. | [optional] 
**transactionList** | [**[SecupayTransactionListItem]**](SecupayTransactionListItem.md) | A list of transaction items | [optional] 


