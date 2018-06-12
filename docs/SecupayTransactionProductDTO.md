# SecuConnectApi.SecupayTransactionProductDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Total amount of payment in cents (or the smallest cash unit of the relevant currency) | [optional] 
**currency** | **String** | ISO 4217 code of currency, eg EUR for Euro. | [optional] 
**purpose** | **String** | The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer. | [optional] 
**orderId** | **String** | Specifying an order number. Depending on the contract setting, this must be unique for each payment. | [optional] 
**basket** | [**[SecupayBasketItem]**](SecupayBasketItem.md) | A list of items that are being purchased. | [optional] 
**accrual** | **Boolean** | Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE. | [optional] 
**paymentAction** | **String** | Specifies whether a pre-authorization (\&quot;authorization\&quot;) or instant payment (\&quot;sale\&quot;) is to be performed. Standard value here is \&quot;sale\&quot;. The collection of the pre-authorized payment is made with the \&quot;capture\&quot; command. | [optional] 
**customer** | [**PaymentCustomersDTO**](PaymentCustomersDTO.md) | The customer object | [optional] 
**redirectUrl** | [**SecupayTransactionProductDTORedirectUrl**](SecupayTransactionProductDTORedirectUrl.md) |  | [optional] 
**contract** | **String** | Contract id | [optional] 
**container** | **String** | Container id | [optional] 
**optData** | [**SecupayTransactionProductDTOOptData**](SecupayTransactionProductDTOOptData.md) |  | [optional] 
**subscription** | [**SecupayTransactionProductDTOSubscription**](SecupayTransactionProductDTOSubscription.md) |  | [optional] 
**experience** | [**SecupayTransactionProductDTOExperience**](SecupayTransactionProductDTOExperience.md) |  | [optional] 


