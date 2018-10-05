# SecuconnectJsSdk.PaymentContractsDTOClone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | **String** | Name of the project (must be unique) | [optional] 
**paymentData** | [**PaymentInformation**](PaymentInformation.md) | Merchants bank account for the payout | [optional] 
**payinAccount** | **Boolean** | Pay in account | [optional] [default to false]
**allowTransactions** | **Boolean** | DEPRECATED: Should allow transactions for this sub-contract? | [optional] 
**urlPush** | **String** | The default URL where your service listen for push notifications of the secuconnect service | [optional] 
**debitProductId** | **String** | DEPRECATED: Contract debit product id | [optional] 
**prepayProductId** | **String** | DEPRECATED: Contracts prepay product id | [optional] 
**invoiceProductId** | **String** | DEPRECATED: Contracts invoice product id | [optional] 
**creditcardProductId** | **String** | DEPRECATED: Contracts credit card product id | [optional] 


