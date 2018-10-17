import { OAuthApplicationUserCredentials as OAuthApplicationUserCredentialsData } from "../../Globals";
import { Environments } from "../../../src/stomp/StompGlobals";
import SmartTransactionsDTO from "../../../src/model/SmartTransactionsDTO";
import Authenticator from "../../../src/authentication/Authenticator";
import StompClient from "../../../src/stomp/StompClient";
import StompSmartTransactionsApi from "../../../src/stomp/api/StompSmartTransactionsApi";
import OAuthApplicationUserCredentials from "../../../src/authentication/OAuthApplicationUserCredentials";
import SmartTransactionsIdent from "../../../src/model/SmartTransactionsIdent";
import SecupayBasketItem from "../../../src/model/SecupayBasketItem";
import SmartTransactionsBasketInfo from "../../../src/model/SmartTransactionsBasketInfo";
import SmartTransactionsBasket from "../../../src/model/SmartTransactionsBasket";

describe('StompSmartTransactionsApi', () => {
    const SMART_TRANSACTIONS = 'smart.transactions';
    const environment = Environments.NODE;

    let authenticator;
    let accessToken;
    let stompClient;
    let stompSmartTransactionsApi;
    let smartTransactionsDTO;
    let smartTransactionsProductModel;
    let ident;
    let item;
    let basketInfo;
    let basket;

    beforeAll(() => {
        authenticator = new Authenticator(
            OAuthApplicationUserCredentials.from(
                OAuthApplicationUserCredentialsData.clientId,
                OAuthApplicationUserCredentialsData.clientSecret,
                OAuthApplicationUserCredentialsData.username,
                OAuthApplicationUserCredentialsData.password,
                OAuthApplicationUserCredentialsData.device,
                OAuthApplicationUserCredentialsData.deviceName
            )
        );

        ident = new SmartTransactionsIdent();
        ident.type = 'card';
        ident.value = 9991234567890;

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
        smartTransactionsDTO.merchant = 'MRC_2YPYFEYKF2DYG8Z4KHB5T8P2P4H0P6';

        return authenticator.getToken().then((token) => {
            accessToken = token.access_token;
            stompClient = new StompClient(accessToken, environment, true);
            stompSmartTransactionsApi = new StompSmartTransactionsApi(stompClient);
        });
    });

    afterAll(() => {
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

    describe('StompSmartTransactionsApi methods', () => {
        test('adding new smart transaction', () => {
            return stompSmartTransactionsApi.addTransaction(smartTransactionsDTO).then((createdSmartTransactionsProductModel) => {
                expect(createdSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);

                smartTransactionsProductModel = createdSmartTransactionsProductModel;
            });
        });

        test('updating existing smart transaction', () => {
            smartTransactionsDTO.idents = [ident];
            smartTransactionsDTO.basket = basket;
            smartTransactionsDTO.basket_info = basketInfo;
            smartTransactionsDTO.merchantRef = 'Kunde234235';
            smartTransactionsDTO.transactionRef = 'Beleg4536676';

            return stompSmartTransactionsApi.updateTransaction(smartTransactionsProductModel.id, smartTransactionsDTO).then((updatedSmartTransactionsProductModel) => {
                expect(updatedSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
                expect(updatedSmartTransactionsProductModel.merchantRef).toBe(smartTransactionsDTO.merchantRef);
            });
        });

        test('starting selected smart transaction', () => {
            return stompSmartTransactionsApi.startTransaction(smartTransactionsProductModel.id, 'demo').then((smartTransactionsProductModelAfterStart) => {
                expect(smartTransactionsProductModelAfterStart.object).toBe(SMART_TRANSACTIONS);
            });
        });

        test('checking balance of merchantcard from ident and if possible creating bonus product items for basket', () => {
            return stompSmartTransactionsApi.preTransaction(smartTransactionsProductModel.id).then((smartTransactionsProductModel) => {
                expect(smartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
            });
        });
    });
});
