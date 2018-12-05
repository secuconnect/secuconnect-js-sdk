"use strict";

var _SmartTransactionsDTO = require("../../../src/model/SmartTransactionsDTO");

var _SmartTransactionsDTO2 = _interopRequireDefault(_SmartTransactionsDTO);

var _StompSmartTransactionsApi = require("../../../src/stomp/api/StompSmartTransactionsApi");

var _StompSmartTransactionsApi2 = _interopRequireDefault(_StompSmartTransactionsApi);

var _SmartTransactionsIdent = require("../../../src/model/SmartTransactionsIdent");

var _SmartTransactionsIdent2 = _interopRequireDefault(_SmartTransactionsIdent);

var _SecupayBasketItem = require("../../../src/model/SecupayBasketItem");

var _SecupayBasketItem2 = _interopRequireDefault(_SecupayBasketItem);

var _SmartTransactionsBasketInfo = require("../../../src/model/SmartTransactionsBasketInfo");

var _SmartTransactionsBasketInfo2 = _interopRequireDefault(_SmartTransactionsBasketInfo);

var _SmartTransactionsBasket = require("../../../src/model/SmartTransactionsBasket");

var _SmartTransactionsBasket2 = _interopRequireDefault(_SmartTransactionsBasket);

var _Authenticator = require("../../../src/authentication/Authenticator");

var _Authenticator2 = _interopRequireDefault(_Authenticator);

var _Globals = require("../../Globals");

var _OAuthDeviceCredentials = require("../../../src/authentication/OAuthDeviceCredentials");

var _OAuthDeviceCredentials2 = _interopRequireDefault(_OAuthDeviceCredentials);

var _FileCache = require("../../../src/cache/FileCache");

var _FileCache2 = _interopRequireDefault(_FileCache);

var _StompGlobals = require("../../../src/stomp/StompGlobals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SMART_TRANSACTIONS = 'smart.transactions';
var SMART_TRANSACTION_STATUS_AFTER_CREATE = 'created';
var SMART_TRANSACTION_STATUS_AFTER_START = 'ok';

var api = void 0;
var authenticator = void 0;
var smartTransactionsDTO = void 0;
var ident = void 0;
var item = void 0;
var basketInfo = void 0;
var basket = void 0;
var state = 0;

beforeAll(function () {
    authenticator = new _Authenticator2.default(_OAuthDeviceCredentials2.default.fromUuid(_Globals.OAuthDeviceCredentials.clientId, _Globals.OAuthDeviceCredentials.clientSecret, _Globals.OAuthDeviceCredentials.deviceUuid));

    var fileCache = new _FileCache2.default();
    authenticator.getApiClient().setCachePool(fileCache);

    api = new _StompSmartTransactionsApi2.default(authenticator, null, _StompGlobals.Environments.NODE);

    ident = new _SmartTransactionsIdent2.default();
    ident.type = 'card';
    ident.value = '9991234567890';
    ident.valid = false;

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
    smartTransactionsDTO.idents = [ident];
    smartTransactionsDTO.basket = basket;
    smartTransactionsDTO.basket_info = basketInfo;
    smartTransactionsDTO.merchantRef = 'Kunde12345';
    smartTransactionsDTO.transactionRef = 'Beleg12345';
});

test('Test of creating the smart transaction, updating and starting it.', function () {
    api.getConnectedStompClient().then(function (connectedStompClient) {
        connectedStompClient.setMessageListener(function (frame) {
            var response = JSON.parse(frame.body);

            if (response.status === 'ok') {
                if (response.data.result === undefined) {
                    if (state === 0) {
                        var createdSmartTransactionsProductModel = response.data;
                        expect(createdSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
                        expect(createdSmartTransactionsProductModel.idents[0]).toEqual(smartTransactionsDTO.idents[0]);
                        expect(createdSmartTransactionsProductModel.basket[0]).toBe(smartTransactionsDTO.basket[0]);
                        expect(createdSmartTransactionsProductModel.merchantRef).toBe(smartTransactionsDTO.merchantRef);
                        expect(createdSmartTransactionsProductModel.transactionRef).toBe(smartTransactionsDTO.transactionRef);
                        expect(createdSmartTransactionsProductModel.status).toBe(SMART_TRANSACTION_STATUS_AFTER_CREATE);
                        expect(createdSmartTransactionsProductModel.merchant).not.toBeUndefined();

                        smartTransactionsDTO.idents = [ident];

                        smartTransactionsDTO.basket.products[0].quantity = 3;
                        smartTransactionsDTO.basket.products[0].priceOne = 200;
                        smartTransactionsDTO.basket.products[0].desc = 'BRÖTCHENANGEBOT 24 Stück';
                        smartTransactionsDTO.basket.products[0].tax = 7;

                        smartTransactionsDTO.basket_info.sum = 600;

                        smartTransactionsDTO.basket = basket;
                        smartTransactionsDTO.basket_info = basketInfo;
                        smartTransactionsDTO.merchantRef = 'Kunde234235';
                        smartTransactionsDTO.transactionRef = 'Beleg4536676';

                        api.updateTransaction(createdSmartTransactionsProductModel.id, smartTransactionsDTO);
                        state++;
                    } else if (state === 1) {
                        var updatedSmartTransactionsProductModel = response.data;

                        expect(updatedSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
                        expect(updatedSmartTransactionsProductModel.basket[0]).toBe(smartTransactionsDTO.basket[0]);
                        expect(updatedSmartTransactionsProductModel.merchantRef).toBe(smartTransactionsDTO.merchantRef);
                        expect(updatedSmartTransactionsProductModel.transactionRef).toBe(smartTransactionsDTO.transactionRef);

                        api.startTransaction(updatedSmartTransactionsProductModel.id, 'demo');
                        state++;
                    } else if (state === 2) {
                        var smartTransactionsProductModelAfterStart = response.data;

                        expect(smartTransactionsProductModelAfterStart.object).toBe(SMART_TRANSACTIONS);
                        expect(smartTransactionsProductModelAfterStart.status).toBe(SMART_TRANSACTION_STATUS_AFTER_START);
                        expect(smartTransactionsProductModelAfterStart.device_source).not.toBeUndefined();
                    }
                }
            } else {
                console.error(response.error_details);
            }
        });
    });
    api.addTransaction(smartTransactionsDTO);
});