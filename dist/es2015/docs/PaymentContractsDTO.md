# SecuconnectJsSdk.PaymentContractsDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant** | **String** | Contracts Merchant | [optional] 
**internalReference** | **String** | The internal user id | [optional] 
**contractId** | **String** | Contracts id | [optional] 
**demo** | **String** | Is this a demo contract | [optional] 
**urlPush** | **String** | An URL where your service listen for push notifications of the secuconnect service | [optional] 
**uniqueOrderId** | **Boolean** | Bool, default FALSE. If TRUE, an error message will be thrown if you try to create a new payment transaction with the same order_id of an previous transaction. | [optional] 
**scoring** | **Boolean** | Bool, default TRUE. If FALSE, the customer scoring is disabled for your payment contract | [optional] 


