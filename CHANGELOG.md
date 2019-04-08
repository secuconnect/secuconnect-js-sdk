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


## [1.4.0] - 2019-04-08

**Release candidate**

Last steps to the final release of the swagger generated JS-SDK for the secuconnect API.

- Fix payment transaction cancel call

#### LoyaltyMerchantcardsApi

- Removed an unused Endpoint

#### PaymentTransactionsApi

- Renamed Operation "paymentTransactionsIdCancelPost" to "cancel"
- Renamed Operation "paymentTransactionsGet" to "getAll"
- Renamed Operation "paymentTransactionsGetById" to "getOne"
- Renamed Operation "paymentTransactionsIdShippingUrlGet" to "getShippingUrl"

#### PrepaidSalesProductApi

- Renamed Operation "prepaidSalesPost" to "addSale"

#### SmartDevicesApi

- Fixed endpoint description for "updatePin"

#### SmartRoutingsApi

- Added Smart.Routings endpoints


## [1.3.2] - 2018-12-11

**Developer Preview**

Beta version of the swagger generated JS-SDK for the secuconnect API.

- FIX TLS connection
- FIX for angular environment


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
[1.3.2]:https://github.com/secuconnect/secuconnect-js-sdk/compare/1.3.1...1.3.2
[1.4.0]:https://github.com/secuconnect/secuconnect-js-sdk/compare/1.3.2...1.4.0
