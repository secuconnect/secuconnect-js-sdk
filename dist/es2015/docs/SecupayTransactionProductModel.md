# SecuconnectJsSdk.SecupayTransactionProductModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | **String** | Product name | [optional] 
**id** | **String** | ID of instance | [optional] 
**transId** | **Number** | Transaction identifier | [optional] 
**status** | **String** | Transaction status | [optional] 
**amount** | **Number** | Total amount of payment in cents (or the smallest cash unit of the relevant currency) | [optional] 
**currency** | **String** | ISO 4217 code of currency, eg EUR for Euro. | [optional] 
**purpose** | **String** | The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer. | [optional] 
**orderId** | **String** | Specifying an order number. Depending on the contract setting, this must be unique for each payment. | [optional] 
**basket** | [**[SecupayBasketItem]**](SecupayBasketItem.md) | A list of items that are being purchased. | [optional] 
**transactionStatus** | **String** | Transaction status (number) | [optional] 
**accrual** | **Boolean** | Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE. | [optional] 
**paymentAction** | **String** | Specifies whether a pre-authorization (\&quot;authorization\&quot;) or instant payment ( \&quot;sale\&quot;) is to be performed. Standard value here is \&quot;sale\&quot;. The collection of the pre-authorized payment is made with the \&quot;capture\&quot; command. | [optional] 
**transferPurpose** | **String** | The purpose the payer needs to use for his transfer | [optional] 
**transferAccount** | [**PaymentInformation**](PaymentInformation.md) | The bank account the payer needs to use for his transfer | [optional] 
**customer** | [**PaymentCustomersProductModel**](PaymentCustomersProductModel.md) | The customer object | [optional] 
**usedPaymentInstrument** | [**SecupayTransactionProductModelUsedPaymentInstrument**](SecupayTransactionProductModelUsedPaymentInstrument.md) |  | [optional] 
**redirectUrl** | [**SecupayRedirectUrl**](SecupayRedirectUrl.md) | A list of redirect urls used for the payment checkout page | [optional] 
**iframeUrl** | **String** | The url of the payment checkout iframe | [optional] 
**container** | [**PaymentContainersProductModel**](PaymentContainersProductModel.md) | The container object | [optional] 
**subTransactions** | [**[SecupaySubTransactionProductModel]**](SecupaySubTransactionProductModel.md) | A list of sub-transactions (for mixed basket) | [optional] 


