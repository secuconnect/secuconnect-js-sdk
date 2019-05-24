# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased] - YYYY-MM-DD

### Security

### Deprecated

### Added

### Changed

### Fixed

### Removed


## [1.5.0] - 2019-05-24

## Added endpoints
- GeneralMerchantsApi
  - addMerchants
- PaymentSecupayPayoutApi
- PaymentSecupaySofortApi
- PaymentTransactionsApi
  - revokeAccrual
- PrepaidContractsProductApi
- PrepaidSalesProductApi
- SmartDevicesApi
  - updatePin
- SmartRoutingsApi
- SmartTransactionsApi
  - prepare

## Renamed endpoints
- PaymentTransactionsApi
  - paymentTransactionsGet to getAll
  - paymentTransactionsGetById to getOne
  - paymentTransactionsIdCancelPost to cancel
  - paymentTransactionsIdShippingUrlGet to getShippingUrl

## Removed endpoints
- LoyaltyMerchantcardsApi
  - getRawMerchantCardId

## Added fields in model
- BankAccountDescriptorö
  - purpose | *String*
- GeneralMerchantsDTO
  - salutation | *String*
  - companyname | *String*
  - forename | *String*
  - surname | *String*
  - dob | *String*
  - homepage | *String*
  - email | *String*
  - phone | *String*
  - address | *Address*
  - paymentData | *PaymentInformation*
- GeneralMerchantsProductModel
  - storeName | *String*
- PaymentInformation
  - bankname | *String*
- PaymentTransactionsProductModel
  - store | *GeneralStoresProductModel*
  - incomingPaymentDate | *String*
  - tid | *String*
  - paymentData | *String*
  - storeName | *String*
  - payoutDate | *String*
  - invoiceNumber | *String*
  - transactionHash | *String*
  - referenceId | *String*
  - accrual | *Boolean*
- SecupayBasketItem
  - itemType | *String*
- SecupaySubTransactionProductModel
  - amount | *Number*
  - transactionStatus | *String*
  - status | *String*
  - currency | *String*
- SmartTransactionsBasket
  - type | *String*
- SmartTransactionsBasketProduct
  - itemType | *String*
  - serialNumber | *String*
  - sum | *Number*
  - referenceId | *String*
  - contractId | *String*
  - subBasket | *SmartTransactionsSubBasketProduct*
- SmartTransactionsDTO
  - customer | *PaymentCustomersProductModel*
  - shippingAddress | *PaymentCustomersProductModel*
  - container | *ProductInstanceUID*
  - checkin | *SmartTransactionsCheckin*
  - paymentMethod | *String*
  - isDemo | *Boolean*
  - checkoutLinks | *SmartTransactionsCheckoutLinks*
- SmartTransactionsProductModel
  - shippingAddress | *PaymentCustomersProductModel*
  - container | *ProductInstanceUID*
  - shipmentDetails | *SmartTransactionsShipmentDetails*
  - isDemo | *Boolean*
  - checkoutLinks | *SmartTransactionsCheckoutLinks*

## Changed Date to String in model
- DocumentUploadsBaseProductModel
- LoyaltyCardsProductModel
- LoyaltyCustomersPaymentContainerModel
- LoyaltyCustomersProductModel
- LoyaltyMerchantcardsProductModel
- LoyaltyStoregroupsProductModel
- PaymentContainersProductModel
- PaymentContractsProductModel
- PaymentCustomersProductModel
- PaymentTransactionsProductModel
- PrepaidSalesProductModel
- SmartDevicesProductModel
- SmartTransactionsPickupOptions
- SmartTransactionsProductModel

## Changed type in model
- PaymentTransactionsProductModel
  - merchant from *PaymentTransactionsProductModelMerchant* to *GeneralMerchantsProductModel*
- SecupayTransactionProductDTO
  - redirectUrl from *SecupayTransactionProductDTORedirectUrl* to *SecupayRedirectUrl*
- SecupayTransactionProductModel
  - transferAccount from *SecupayTransactionProductModelTransferAccount* to *PaymentInformation*
  - redirectUrl from *SecupayTransactionProductModelRedirectUrl* to *SecupayRedirectUrl*
- SmartTransactionsDTO
  - receipt from *String* to *SmartTransactionsReceipt*
- SmartTransactionsProductModel
  - customer from *LoyaltyCustomersProductModel* to *PaymentCustomersProductModel*
  - receiptMerchant from *String* to *SmartTransactionsReceipt*
  - transactions from *ProductInstanceUID* to *PaymentTransactionsProductModel*

## Renamed field in model
- SmartTransactionsDTO
  - marketplaceContract to providerContract
- SmartTransactionsProductModel
  - marketplaceContract to providerContract

## Removed field from model
- LoyaltyCustomersProductModel
  - age
  - daysUntilBirthday
- PaymentContractsDTO
  - debitProductId
  - prepayProductId
  - invoiceProductId
  - creditcardProductId
  - allowTransactions
  - allowCloning
  - sepaMandateInform
- PaymentContractsDTOClone
  - allowTransactions
  - debitProductId
  - prepayProductId
  - invoiceProductId
  - creditcardProductId
- PaymentContractsProductModel
  - allowCloning
  - sepaMandateInform
- PaymentTransactionsProductModelCustomer
  - _object
  - id
- PrepaidItemsProductModel
  - eanIntern

## Removed models
- SecupayTransactionProductModelTransferAccount (use *PaymentInformation*)
- SecupayTransactionProductModelRedirectUrl (use *SecupayRedirectUrl*)
- SecupayTransactionProductDTORedirectUrl (use *SecupayRedirectUrl*)
- PaymentTransactionsProductModelMerchant (use *GeneralMerchantsProductModel*)
- PaymentTransactionsCancelList (use *PaymentTransactionCancelDTO*)


## [1.4.0] - 2019-04-08

**DEPRECATED USE VERSION 1.5.0 OR ABOVE**


## [1.3.2] - 2018-12-11

**DEPRECATED USE VERSION 1.5.0 OR ABOVE**


## [1.3.1] - 2018-12-05

**Developer Preview**

Beta version of the swagger generated JS-SDK for the secuconnect API.

- FIX STOMP


## [1.3.0] - 2018-12-03

**Developer Preview**

Beta version of the swagger generated JS-SDK for the secuconnect API.

- Authentication
- STOMP


## [1.2.0] - 2018-11-17

**Developer Preview**

Beta version of the swagger generated JS-SDK for the secuconnect API.

- Mixed-Basket
- STOMP


## [1.1.0] - 2018-11-05

**Developer Preview**

Beta version of the swagger generated JS-SDK for the secuconnect API.


[1.1.0]:https://github.com/secuconnect/secuconnect-js-sdk/releases/tag/v1.1.0
[1.2.0]:https://github.com/secuconnect/secuconnect-js-sdk/compare/1.1.0...1.2.0
[1.3.0]:https://github.com/secuconnect/secuconnect-js-sdk/compare/1.2.0...1.3.0
[1.3.1]:https://github.com/secuconnect/secuconnect-js-sdk/compare/1.3.0...1.3.1
[1.5.0]:https://github.com/secuconnect/secuconnect-js-sdk/compare/1.3.1...1.5.0
