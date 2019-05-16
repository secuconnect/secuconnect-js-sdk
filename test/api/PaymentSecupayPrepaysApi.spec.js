import SecupayTransactionProductDTO from "../../src/model/SecupayTransactionProductDTO";
import Contact from "../../src/model/Contact";
import PaymentCustomersDTO from "../../src/model/PaymentCustomersDTO";
import SecupayRedirectUrl from "../../src/model/SecupayRedirectUrl";
import { OAuthClientCredentials, OAuthApplicationUserCredentials, OAuthDeviceCredentials } from '../Globals';
import FileCache from "../../src/cache/FileCache";

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.SecuConnectApi);
  }
}(this, function(SecuConnectApi) {
  'use strict';
  jest.setTimeout(20000);

  let authenticator;
  let prepayApi;
  let customerApi;
  let prepaysData;
  let customer;
  let basket;
  let prepayTransactionData;

  beforeAll(function () {
    authenticator = new SecuConnectApi.Authenticator(
      SecuConnectApi.OAuthClientCredentials.from(
        OAuthClientCredentials.clientId,
        OAuthClientCredentials.clientSecret
      )
    );

    let fileCache = new FileCache();
    authenticator.getApiClient().setCachePool(fileCache);

    prepayApi = new SecuConnectApi.PaymentSecupayPrepaysApi();
    customerApi = new SecuConnectApi.PaymentCustomersApi();

    let accessToken = authenticator.getToken();

    prepayApi.apiClient.authentications.oauth_token.accessToken = accessToken;
    customerApi.apiClient.authentications.oauth_token.accessToken = accessToken;

    let contact = new Contact();
    contact.forename = 'John';
    contact.surname = 'Doe';
    contact.companyname = 'Example Inc.';

    customer = new PaymentCustomersDTO();
    customer.contact = contact;

    prepaysData = new SecupayTransactionProductDTO();
    prepaysData.amount = 100;
    prepaysData.currency = 'EUR';
    prepaysData.purpose = 'for what text';
    prepaysData.order_id = 'ZZZZZZ';

    basket = [];

    let basketItem1 = new SecuConnectApi.SecupayBasketItem();
    let basketItem2 = new SecuConnectApi.SecupayBasketItem();
    let basketItem3 = new SecuConnectApi.SecupayBasketItem();

    basketItem1.item_type = 'shipping';
    basketItem1.name = 'standard delivery';
    basketItem1.tax = 19;
    basketItem1.total = 200;
    basket.push(basketItem1);

    basketItem2.item_type = 'article';
    basketItem2.article_number = 3211;
    basketItem2.quantity = 2;
    basketItem2.name = 'Product 3211';
    basketItem2.ean = 4123412341243;
    basketItem2.tax = 19;
    basketItem2.total = 2000;
    basketItem2.price = 1000;
    basket.push(basketItem2);

    basketItem3.item_type = 'article';
    basketItem3.article_number = 48875;
    basketItem3.quantity = 2;
    basketItem3.name = 'Product 48875';
    basketItem3.ean = 4123412341236;
    basketItem3.tax = 19;
    basketItem3.total = 4000;
    basketItem3.price = 2000;
    basket.push(basketItem3);

    prepaysData.basket = basket;

    prepaysData.redirect_url = new SecupayRedirectUrl();
    prepaysData.redirect_url.url_success = 'http://shop.example.com?success=true';
    prepaysData.redirect_url.url_failure = 'http://shop.example.com?success=false';
    prepaysData.redirect_url.url_push = 'https://requestb.in/14f6a1j1';
  });

  beforeEach(function() {

  });

  let getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  };

  let setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  };

  describe('PaymentCustomersApi', () => {
    describe('paymentCustomersPost', () => {
      it('should create customer successfully', () => {
        return customerApi.paymentCustomersPost(customer)
          .then((createdCustomer) => {
            prepaysData.customer = createdCustomer.id;

            expect(createdCustomer.contact.forename).toBe('John');
            expect(createdCustomer.contact.surname).toBe('Doe');
            expect(createdCustomer.contact.companyname).toBe('Example Inc.');
          });
      });

      describe('paymentSecupayprepaysPost', function () {
        it('should create prepay transaction successfully', function() {
          return prepayApi.paymentSecupayprepaysPost({"body": prepaysData})
            .then((prepayTransaction) => {
              prepayTransactionData = prepayTransaction;

              expect(prepayTransaction).toBeInstanceOf(SecuConnectApi.SecupayTransactionProductModel);
              expect(prepayTransaction.object).toBe('payment.secupayprepays');
              expect(prepayTransaction.id).not.toBeNull();
              expect(prepayTransaction.trans_id).not.toBeNull();
              expect(prepayTransaction.status).not.toBeNull();
              expect(prepayTransaction.amount).toBe(100);
              expect(prepayTransaction.currency).toBe('EUR');
              expect(prepayTransaction.purpose).toBe('for what text');
              expect(prepayTransaction.order_id).toBe('ZZZZZZ');
              expect(prepayTransaction.basket).toHaveLength(3);
              expect(prepayTransaction.basket[0].item_type).toBe(basket[0].item_type);
              expect(prepayTransaction.basket[0].name).toBe(basket[0].name);
              expect(prepayTransaction.basket[0].total).toBe(basket[0].total);
              expect(prepayTransaction.basket[1].item_type).toBe(basket[1].item_type);
              expect(prepayTransaction.basket[1].article_number).toBe(basket[1].article_number.toString());
              expect(prepayTransaction.basket[1].quantity).toBe(basket[1].quantity);
              expect(prepayTransaction.basket[1].name).toBe(basket[1].name);
              expect(prepayTransaction.basket[1].ean).toBe(basket[1].ean.toString());
              expect(prepayTransaction.basket[1].tax).toBe(basket[1].tax.toString());
              expect(prepayTransaction.basket[1].total).toBe(basket[1].total);
              expect(prepayTransaction.basket[1].price).toBe(basket[1].price);
              expect(prepayTransaction.basket[2].item_type).toBe(basket[2].item_type);
              expect(prepayTransaction.basket[2].article_number).toBe(basket[2].article_number.toString());
              expect(prepayTransaction.basket[2].quantity).toBe(basket[2].quantity);
              expect(prepayTransaction.basket[2].name).toBe(basket[2].name);
              expect(prepayTransaction.basket[2].ean).toBe(basket[2].ean.toString());
              expect(prepayTransaction.basket[2].tax).toBe(basket[2].tax.toString());
              expect(prepayTransaction.basket[2].total).toBe(basket[2].total);
              expect(prepayTransaction.basket[2].price).toBe(basket[2].price);
              expect(prepayTransaction.transaction_status).not.toBeNull();
              expect(prepayTransaction.accrual).toBe(undefined);
              expect(prepayTransaction.payment_action).toBe('sale');
              expect(prepayTransaction.transfer_purpose).not.toBeNull();
              expect(prepayTransaction.transfer_account.iban).not.toBeNull();
              expect(prepayTransaction.transfer_account.bic).not.toBeNull();
              expect(prepayTransaction.transfer_account.accountnumber).not.toBeNull();
              expect(prepayTransaction.transfer_account.bankcode).not.toBeNull();
              expect(prepayTransaction.transfer_account.account_owner).not.toBeNull();
              expect(prepayTransaction.customer.object).toBe('payment.customers');
              expect(prepayTransaction.customer.id).not.toBeNull();
              expect(prepayTransaction.customer.contract.object).toBe('payment.contracts');
              expect(prepayTransaction.customer.contract.id).not.toBeNull();
              expect(prepayTransaction.customer.contact.forename).toBe(customer.contact.forename);
              expect(prepayTransaction.customer.contact.surname).toBe(customer.contact.surname);
              expect(prepayTransaction.customer.contact.companyname).toBe(customer.contact.companyname);
              expect(prepayTransaction.redirect_url.iframe_url).not.toBeNull();
              expect(prepayTransaction.redirect_url.url_success).not.toBeNull();
              expect(prepayTransaction.redirect_url.url_failure).not.toBeNull();
              expect(prepayTransaction.redirect_url.iframe_url).toBe(prepayTransaction.iframe_url);
              expect(prepayTransaction.container).toBe(undefined);
            })
            .catch(reason => {
              console.log(reason);
            });
        });
      });

      describe('paymentSecupayprepaysHashGet', function() {
        it('should get prepay transaction data successfully', function() {
          return prepayApi.paymentSecupayPrepaysGetById(prepayTransactionData.id)
            .then((prepayTransaction) => {
              expect(prepayTransaction).toBeInstanceOf(SecuConnectApi.SecupayTransactionProductModel);
              expect(prepayTransaction.object).toBe('payment.secupayprepays');
              expect(prepayTransaction.id).not.toBeNull();
              expect(prepayTransaction.trans_id).not.toBeNull();
              expect(prepayTransaction.status).not.toBeNull();
              expect(prepayTransaction.amount).toBe(100);
              expect(prepayTransaction.currency).toBe('EUR');
              expect(prepayTransaction.purpose).toBe('for what text');
              expect(prepayTransaction.order_id).toBe('ZZZZZZ');
              expect(prepayTransaction.basket).toHaveLength(3);
              expect(prepayTransaction.basket[0].item_type).toBe(prepayTransactionData.basket[0].item_type);
              expect(prepayTransaction.basket[0].name).toBe(prepayTransactionData.basket[0].name);
              expect(prepayTransaction.basket[0].total).toBe(prepayTransactionData.basket[0].total);
              expect(prepayTransaction.basket[1].item_type).toBe(prepayTransactionData.basket[1].item_type);
              expect(prepayTransaction.basket[1].article_number).toBe(prepayTransactionData.basket[1].article_number);
              expect(prepayTransaction.basket[1].quantity).toBe(prepayTransactionData.basket[1].quantity);
              expect(prepayTransaction.basket[1].name).toBe(prepayTransactionData.basket[1].name);
              expect(prepayTransaction.basket[1].ean).toBe(prepayTransactionData.basket[1].ean);
              expect(prepayTransaction.basket[1].tax).toBe(prepayTransactionData.basket[1].tax);
              expect(prepayTransaction.basket[1].total).toBe(prepayTransactionData.basket[1].total);
              expect(prepayTransaction.basket[1].price).toBe(prepayTransactionData.basket[1].price);
              expect(prepayTransaction.basket[2].item_type).toBe(prepayTransactionData.basket[2].item_type);
              expect(prepayTransaction.basket[2].article_number).toBe(prepayTransactionData.basket[2].article_number);
              expect(prepayTransaction.basket[2].quantity).toBe(prepayTransactionData.basket[2].quantity);
              expect(prepayTransaction.basket[2].name).toBe(prepayTransactionData.basket[2].name);
              expect(prepayTransaction.basket[2].ean).toBe(prepayTransactionData.basket[2].ean);
              expect(prepayTransaction.basket[2].tax).toBe(prepayTransactionData.basket[2].tax);
              expect(prepayTransaction.basket[2].total).toBe(prepayTransactionData.basket[2].total);
              expect(prepayTransaction.basket[2].price).toBe(prepayTransactionData.basket[2].price);
              expect(prepayTransaction.transaction_status).not.toBeNull();
              expect(prepayTransaction.accrual).toBe(undefined);
              expect(prepayTransaction.payment_action).toBe('sale');
              expect(prepayTransaction.transfer_purpose).not.toBeNull();
              expect(prepayTransaction.transfer_account.iban).not.toBeNull();
              expect(prepayTransaction.transfer_account.bic).not.toBeNull();
              expect(prepayTransaction.transfer_account.accountnumber).not.toBeNull();
              expect(prepayTransaction.transfer_account.bankcode).not.toBeNull();
              expect(prepayTransaction.transfer_account.account_owner).not.toBeNull();
              expect(prepayTransaction.customer.object).toBe('payment.customers');
              expect(prepayTransaction.customer.id).not.toBeNull();
              expect(prepayTransaction.customer.contract.object).toBe('payment.contracts');
              expect(prepayTransaction.customer.contract.id).not.toBeNull();
              expect(prepayTransaction.customer.contact.forename).toBe(prepayTransactionData.customer.contact.forename);
              expect(prepayTransaction.customer.contact.surname).toBe(prepayTransactionData.customer.contact.surname);
              expect(prepayTransaction.customer.contact.companyname).toBe(prepayTransactionData.customer.contact.companyname);
              expect(prepayTransaction.redirect_url.iframe_url).not.toBeNull();
              expect(prepayTransaction.redirect_url.url_success).not.toBeNull();
              expect(prepayTransaction.redirect_url.url_failure).not.toBeNull();
              expect(prepayTransaction.redirect_url.iframe_url).toBe(prepayTransactionData.iframe_url);
              expect(prepayTransaction.container).toBe(undefined);
            })
            .catch(reason => {
              console.log(reason);
            });
        });
      });

      describe('paymentSecupayprepaysHashCancelPost', function() {
        it('should cancel prepay transaction successfully', function() {
          return prepayApi.paymentSecupayPrepaysCancelById(prepayTransactionData.id)
            .then((data) => {
              expect(typeof data).toBe('object');
            })
            .catch(reason => {
              console.log(reason);
            });
        });
      });

      describe('PaymentCustomersApi', () => {
        it('should delete the customer successfully', function () {
          return customerApi.paymentCustomersIdDelete(prepaysData.customer)
            .then((deletedCustomer) => {
              expect(deletedCustomer[0].contact.forename).toBe('John');
              expect(deletedCustomer[0].contact.surname).toBe('Doe');
              expect(deletedCustomer[0].contact.companyname).toBe('Example Inc.');
            })
            .catch(reason => {
              console.log(reason);
            });
        });
      });
    });
  });
}));
