import SmartTransactionsDTO from "../../../src/model/SmartTransactionsDTO";
import StompSmartTransactionsApi from "../../../src/stomp/api/StompSmartTransactionsApi";
import SmartTransactionsIdent from "../../../src/model/SmartTransactionsIdent";
import SecupayBasketItem from "../../../src/model/SecupayBasketItem";
import SmartTransactionsBasketInfo from "../../../src/model/SmartTransactionsBasketInfo";
import SmartTransactionsBasket from "../../../src/model/SmartTransactionsBasket";
import Authenticator from "../../../src/authentication/Authenticator";
import { OAuthDeviceCredentials as OAuthDeviceCredentialsData } from "../../Globals";
import OAuthDeviceCredentials from "../../../src/authentication/OAuthDeviceCredentials";
import FileCache from "../../../src/cache/FileCache";
import {Environments} from "../../../src/stomp/StompGlobals";


const SMART_TRANSACTIONS = 'smart.transactions';
const SMART_TRANSACTION_STATUS_AFTER_CREATE = 'created';
const SMART_TRANSACTION_STATUS_AFTER_START = 'ok';

let api;
let authenticator;
let smartTransactionsDTO;
let ident;
let item;
let basketInfo;
let basket;
let state = 0;

beforeAll(() => {
    authenticator = new Authenticator(
        OAuthDeviceCredentials.fromUuid(
            OAuthDeviceCredentialsData.clientId,
            OAuthDeviceCredentialsData.clientSecret,
            OAuthDeviceCredentialsData.deviceUuid
        )
    );

    let fileCache = new FileCache();
    authenticator.getApiClient().setCachePool(fileCache);

    api = new StompSmartTransactionsApi(authenticator, null, Environments.NODE);

    ident = new SmartTransactionsIdent();
    ident.type = 'card';
    ident.value = '9991234567890';
    ident.valid = false;

    item = new SecupayBasketItem();
    item.id = 1;
    item.quantity = 1;
    item.priceOne = 209;
    item.desc = 'BRÖTCHENANGEBOT 8 Stück';
    item.tax = 7;

    basketInfo = new SmartTransactionsBasketInfo();
    basketInfo.sum = 209;
    basketInfo.currency = 'EUR';

    basket = new SmartTransactionsBasket();
    basket.products = [item];

    smartTransactionsDTO = new SmartTransactionsDTO();
    smartTransactionsDTO.idents = [ident];
    smartTransactionsDTO.basket = basket;
    smartTransactionsDTO.basket_info = basketInfo;
    smartTransactionsDTO.merchantRef = 'Kunde12345';
    smartTransactionsDTO.transactionRef = 'Beleg12345';
});

test('Test of creating the smart transaction, updating and starting it.', () => {
    api.getConnectedStompClient().then((connectedStompClient) => {
        connectedStompClient.setMessageListener((frame) => {
            let response = JSON.parse(frame.body);

            if (response.status === 'ok') {
                if (response.data.result === undefined) {
                    if (state === 0) {
                        let createdSmartTransactionsProductModel = response.data;
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
                        let updatedSmartTransactionsProductModel = response.data;

                        expect(updatedSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
                        expect(updatedSmartTransactionsProductModel.basket[0]).toBe(smartTransactionsDTO.basket[0]);
                        expect(updatedSmartTransactionsProductModel.merchantRef).toBe(smartTransactionsDTO.merchantRef);
                        expect(updatedSmartTransactionsProductModel.transactionRef).toBe(smartTransactionsDTO.transactionRef);


                        api.startTransaction(updatedSmartTransactionsProductModel.id, 'demo');
                        state++;
                    } else if (state === 2) {
                        let smartTransactionsProductModelAfterStart = response.data;

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