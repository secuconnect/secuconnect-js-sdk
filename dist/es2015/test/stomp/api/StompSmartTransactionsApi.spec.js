"use strict";

var _Globals = require("../../Globals");

var _StompGlobals = require("../../../src/stomp/StompGlobals");

var _SmartTransactionsDTO = require("../../../src/model/SmartTransactionsDTO");

var _SmartTransactionsDTO2 = _interopRequireDefault(_SmartTransactionsDTO);

var _Authenticator = require("../../../src/authentication/Authenticator");

var _Authenticator2 = _interopRequireDefault(_Authenticator);

var _StompClient = require("../../../src/stomp/StompClient");

var _StompClient2 = _interopRequireDefault(_StompClient);

var _StompSmartTransactionsApi = require("../../../src/stomp/api/StompSmartTransactionsApi");

var _StompSmartTransactionsApi2 = _interopRequireDefault(_StompSmartTransactionsApi);

var _OAuthApplicationUserCredentials = require("../../../src/authentication/OAuthApplicationUserCredentials");

var _OAuthApplicationUserCredentials2 = _interopRequireDefault(_OAuthApplicationUserCredentials);

var _SmartTransactionsIdent = require("../../../src/model/SmartTransactionsIdent");

var _SmartTransactionsIdent2 = _interopRequireDefault(_SmartTransactionsIdent);

var _SecupayBasketItem = require("../../../src/model/SecupayBasketItem");

var _SecupayBasketItem2 = _interopRequireDefault(_SecupayBasketItem);

var _SmartTransactionsBasketInfo = require("../../../src/model/SmartTransactionsBasketInfo");

var _SmartTransactionsBasketInfo2 = _interopRequireDefault(_SmartTransactionsBasketInfo);

var _SmartTransactionsBasket = require("../../../src/model/SmartTransactionsBasket");

var _SmartTransactionsBasket2 = _interopRequireDefault(_SmartTransactionsBasket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StompSmartTransactionsApi', function () {
    var SMART_TRANSACTIONS = 'smart.transactions';
    var environment = _StompGlobals.Environments.NODE;

    var authenticator = void 0;
    var accessToken = void 0;
    var stompClient = void 0;
    var stompSmartTransactionsApi = void 0;
    var smartTransactionsDTO = void 0;
    var smartTransactionsProductModel = void 0;
    var ident = void 0;
    var item = void 0;
    var basketInfo = void 0;
    var basket = void 0;

    beforeAll(function () {
        authenticator = new _Authenticator2.default(_OAuthApplicationUserCredentials2.default.from(_Globals.OAuthApplicationUserCredentials.clientId, _Globals.OAuthApplicationUserCredentials.clientSecret, _Globals.OAuthApplicationUserCredentials.username, _Globals.OAuthApplicationUserCredentials.password, _Globals.OAuthApplicationUserCredentials.device, _Globals.OAuthApplicationUserCredentials.deviceName));

        ident = new _SmartTransactionsIdent2.default();
        ident.type = 'card';
        ident.value = 9991234567890;

        item = new _SecupayBasketItem2.default();
        item.id = 1;
        item.quantity = 1;
        item.priceOne = 209;
        item.desc = 'BRÖTCHENANGEBOT 8 Stück';
        item.tax = 7;

        basketInfo = new _SmartTransactionsBasketInfo2.default();
        basketInfo.sum = 209;
        basketInfo.currency = 'EUR';

        basket = new _SmartTransactionsBasket2.default();
        basket.products = [item];

        smartTransactionsDTO = new _SmartTransactionsDTO2.default();
        smartTransactionsDTO.merchant = 'MRC_2YPYFEYKF2DYG8Z4KHB5T8P2P4H0P6';

        return authenticator.getToken().then(function (token) {
            accessToken = token.access_token;
            stompClient = new _StompClient2.default(accessToken, environment, true);
            stompSmartTransactionsApi = new _StompSmartTransactionsApi2.default(stompClient);
        });
    });

    afterAll(function () {
        stompClient.disconnect();
        authenticator = null;
        accessToken = null;
        stompClient = null;
        stompSmartTransactionsApi = null;
        smartTransactionsDTO = null;
        smartTransactionsProductModel = null;
        ident = null;
        item = null;
        basketInfo = null;
        basket = null;
    });

    describe('StompSmartTransactionsApi methods', function () {
        test('adding new smart transaction', function () {
            return stompSmartTransactionsApi.addTransaction(smartTransactionsDTO).then(function (createdSmartTransactionsProductModel) {
                expect(createdSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);

                smartTransactionsProductModel = createdSmartTransactionsProductModel;
            });
        });

        test('updating existing smart transaction', function () {
            smartTransactionsDTO.idents = [ident];
            smartTransactionsDTO.basket = basket;
            smartTransactionsDTO.basket_info = basketInfo;
            smartTransactionsDTO.merchantRef = 'Kunde234235';
            smartTransactionsDTO.transactionRef = 'Beleg4536676';

            return stompSmartTransactionsApi.updateTransaction(smartTransactionsProductModel.id, smartTransactionsDTO).then(function (updatedSmartTransactionsProductModel) {
                expect(updatedSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
                expect(updatedSmartTransactionsProductModel.merchantRef).toBe(smartTransactionsDTO.merchantRef);
            });
        });

        test('starting selected smart transaction', function () {
            return stompSmartTransactionsApi.startTransaction(smartTransactionsProductModel.id, 'demo').then(function (smartTransactionsProductModelAfterStart) {
                expect(smartTransactionsProductModelAfterStart.object).toBe(SMART_TRANSACTIONS);
            });
        });

        test('checking balance of merchantcard from ident and if possible creating bonus product items for basket', function () {
            return stompSmartTransactionsApi.preTransaction(smartTransactionsProductModel.id).then(function (smartTransactionsProductModel) {
                expect(smartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
            });
        });
    });
});