import SmartTransactionsDTO from "../../../src/model/SmartTransactionsDTO";
import StompSmartTransactionsApi from "../../../src/stomp/api/StompSmartTransactionsApi";
import SmartTransactionsIdent from "../../../src/model/SmartTransactionsIdent";
import SecupayBasketItem from "../../../src/model/SecupayBasketItem";
import SmartTransactionsBasketInfo from "../../../src/model/SmartTransactionsBasketInfo";
import SmartTransactionsBasket from "../../../src/model/SmartTransactionsBasket";
import Authenticator from "../../../src/authentication/Authenticator";
import { OAuthApplicationUserCredentials as OAuthApplicationUserCredentialsData } from "../../Globals";
import OAuthApplicationUserCredentials from "../../../src/authentication/OAuthApplicationUserCredentials";

describe('StompSmartTransactionsApi', () => {
    const SMART_TRANSACTIONS = 'smart.transactions';
    
    let api;
    let authenticator;
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

        api = new StompSmartTransactionsApi(authenticator);

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

    });

    afterAll(() => {
        authenticator = null;
        accessToken = null;
        api = null;
        smartTransactionsDTO = null;
        smartTransactionsProductModel = null;
        ident = null;
        item = null;
        basketInfo = null;
        basket = null;
    });

    describe('StompSmartTransactionsApi methods', () => {
        test('adding new smart transaction', () => {
            return api.addTransaction(smartTransactionsDTO).then((createdSmartTransactionsProductModel) => {
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

            return api.updateTransaction(smartTransactionsProductModel.id, smartTransactionsDTO).then((updatedSmartTransactionsProductModel) => {
                expect(updatedSmartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
                expect(updatedSmartTransactionsProductModel.merchantRef).toBe(smartTransactionsDTO.merchantRef);
            });
        });

        test('starting selected smart transaction', () => {
            return api.startTransaction(smartTransactionsProductModel.id, 'demo').then((smartTransactionsProductModelAfterStart) => {
                expect(smartTransactionsProductModelAfterStart.object).toBe(SMART_TRANSACTIONS);
            });
        });

        test('checking balance of merchantcard from ident and if possible creating bonus product items for basket', () => {
            return api.preTransaction(smartTransactionsProductModel.id).then((smartTransactionsProductModel) => {
                expect(smartTransactionsProductModel.object).toBe(SMART_TRANSACTIONS);
            });
        });
    });
});
