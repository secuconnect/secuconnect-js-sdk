# SecuconnectJsSdk.SecupayBasketItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemType** | **String** | Category of item | [optional] [default to &#39;article&#39;]
**articleNumber** | **String** | Article number of item | [optional] 
**quantity** | **Number** | Quantity of articles in item | [optional] 
**name** | **String** | Descriptive name of item | [optional] 
**model** | **String** | Model of item | [optional] 
**ean** | **String** | EAN, European Article Number | [optional] 
**tax** | **String** | Applicable tax in percentages | [optional] 
**total** | **Number** | Total price | [optional] 
**price** | **Number** | Price of single article, if item is of article category | [optional] 
**apikey** | **String** | Special param for stakeholder payments | [optional] 
**transactionHash** | **String** | Special param for payout payments | [optional] 
**contractId** | **String** | Contract id - Special param for stakeholder payments | [optional] 
**referenceId** | **String** | Reference id - must be unique for the entire basket | [optional] 
**subBasket** | [**[SecupayBasketItem]**](SecupayBasketItem.md) | Mixed-Basket: All basket items for one merchant. | [optional] 


