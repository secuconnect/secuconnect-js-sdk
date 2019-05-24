# SecuconnectJsSdk.PaymentTransactionsProductModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_object** | **String** | Object of payment transaction | [optional] 
**id** | **String** | Id of payment transaction | [optional] 
**merchant** | [**GeneralMerchantsProductModel**](GeneralMerchantsProductModel.md) | Merchant information | [optional] 
**store** | [**GeneralStoresProductModel**](GeneralStoresProductModel.md) | Merchants store information | [optional] 
**transId** | **Number** | Transaction identifier | [optional] 
**productId** | **Number** | Product identifier | [optional] 
**product** | **String** | Product type | [optional] 
**productRaw** | **String** | the name of the payment product | [optional] 
**zahlungsmittelId** | **Number** | The internal id of the stored payment instrument. | [optional] 
**contractId** | **Number** | Contract identifier | [optional] 
**amount** | **Number** | Total amount of payment in cents (or the smallest cash unit of the relevant currency) | [optional] 
**currency** | **String** | ISO 4217 code of currency, eg EUR for Euro. | [optional] 
**created** | **String** | Created at date | [optional] 
**updated** | **String** | Updated at date | [optional] 
**status** | **Number** | Transaction status ID | [optional] 
**statusText** | **String** | Transaction status description | [optional] 
**incomingPaymentDate** | **String** | Date when the payment was received | [optional] 
**details** | [**PaymentTransactionsProductModelDetails**](PaymentTransactionsProductModelDetails.md) |  | [optional] 
**customer** | [**PaymentTransactionsProductModelCustomer**](PaymentTransactionsProductModelCustomer.md) |  | [optional] 
**tid** | **String** | Terminal-ID | [optional] 
**paymentData** | **String** | Data of the used payment instrument | [optional] 
**storeName** | **String** | Store name | [optional] 
**payoutDate** | **String** | Date when the payout was created | [optional] 
**invoiceNumber** | **String** | Invoice number (from merchant) | [optional] 
**transactionHash** | **String** | Payment-ID | [optional] 
**referenceId** | **String** | Reference ID | [optional] 
**accrual** | **Boolean** | Accrual Flag | [optional] 


