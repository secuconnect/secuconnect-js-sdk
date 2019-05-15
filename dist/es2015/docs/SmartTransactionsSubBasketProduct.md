# SecuconnectJsSdk.SmartTransactionsSubBasketProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Product id | [optional] 
**parent** | **Number** | Parent | [optional] 
**itemType** | **String** | Category of item | [optional] 
**desc** | **String** | Description of the sub-basket product | [optional] 
**articleNumber** | **String** | Article number | [optional] 
**serialNumber** | **String** | The serialnumber of the scanned posa card | [optional] 
**ean** | **String** | international article number | [optional] 
**quantity** | **Number** | Quantity | [optional] 
**priceOne** | **Number** | Price one | [optional] 
**sum** | **Number** |  | [optional] 
**tax** | **Number** | Tax | [optional] 
**referenceId** | **String** | The reference_id must be unique, it&#39;s Referring to the reference_id of SmartTransactionsBasketProduct [example: SmartTransactionsBasketProduct-&gt;reference_id is 1000 then all SmartTransactionsSubBasketProduct must have unique reference_id like 1000.1, 1000.2 etc.] | [optional] 
**contractId** | **String** | contract id | [optional] 
**group** | [**[SmartTransactionsBasketProductGroup]**](SmartTransactionsBasketProductGroup.md) | Group | [optional] 


