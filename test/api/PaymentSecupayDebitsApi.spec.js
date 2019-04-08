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

  var instance;
  var container;
  var customer;
  var transaction;
  var authenticator;

  beforeEach(function() {
    jest.setTimeout(10000);
    instance = new SecuConnectApi.PaymentSecupayDebitsApi();
    authenticator = new SecuConnectApi.Authenticator(
        SecuConnectApi.OAuthClientCredentials.from(
            OAuthClientCredentials.clientId,
            OAuthClientCredentials.clientSecret
        ));

    let fileCache = new FileCache();
    authenticator.getApiClient().setCachePool(fileCache);

    instance = new SecuConnectApi.PaymentSecupayDebitsApi();
    instance.apiClient.authentications.oauth_token.accessToken = authenticator.getToken();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentSecupayDebitsApi', function() {
    describe('PaymentSecupayDebits', function() {
      it('should create customer successfully', function() {
        var customerAPI = new SecuConnectApi.PaymentCustomersApi();
        customerAPI.apiClient.authentications.oauth_token.accessToken = authenticator.getToken();

        var customerDTO = new SecuConnectApi.PaymentCustomersDTO();
        var contact = new SecuConnectApi.Contact();
        var address = new SecuConnectApi.Address();
        customerDTO.contact = contact;
        contact.surname = "John R.";
        contact.forename = "Hacker";
        contact.address = address;
        address.country = "PL";
        address.city = "Wroclaw";
        address.street = "Kurkowa";
        address.postal_code = "50-000";
        address.street_number = "14";

        return customerAPI.paymentCustomersPost(customerDTO).then(function(data) {
            customer = data;
            expect(data).toBeInstanceOf(SecuConnectApi.PaymentCustomersProductModel);
        }, function(error) {
            console.error(error);
        });
      });

      it('should create container successfully', function() {
        var containerAPI = new SecuConnectApi.PaymentContainersApi();
        containerAPI.apiClient.authentications.oauth_token.accessToken = authenticator.getToken();

        var containerDTO = new SecuConnectApi.PaymentContainersDTO();
        var containerCustomer = new SecuConnectApi.PaymentContainersDTOCustomer();
        var privateInfo = new SecuConnectApi.PaymentContainersDTOPrivate();
        containerDTO.contact = containerCustomer;
        containerCustomer.id = customer.id;
        containerDTO.private = privateInfo;
        privateInfo.bic = "ABCDDE12XXX";
        privateInfo.iban = "DE12500105170648489890";
        privateInfo.owner = "John R. Hacker";

        return containerAPI.paymentContainersPost(containerDTO).then(function(data) {
            container = data;
            expect(data).toBeInstanceOf(SecuConnectApi.PaymentContainersProductModel);
        }, function(error) {
            console.error(error);
        });
      });

      it('should create transaction successfully', function() {
        var transactionDTO = new SecuConnectApi.SecupayTransactionProductDTO();
        var basketItem1 = new SecuConnectApi.SecupayBasketItem();
        var basketItem2 = new SecuConnectApi.SecupayBasketItem();
        var basketItem3 = new SecuConnectApi.SecupayBasketItem();
        transactionDTO.customer = customer.id;
        transactionDTO.container = container;
        transactionDTO.amount = "6324";
        transactionDTO.currency = "EUR";
        transactionDTO.purpose = "Because";
        transactionDTO.order_id = "100100100";
        transactionDTO.basket = [basketItem1, basketItem2, basketItem3];
        basketItem1.type = "shipping";
        basketItem1.name = "standard delivery";
        basketItem1.tax = 19;
        basketItem1.total = 1324;
        basketItem2.type = "article";
        basketItem2.article_number = 3211;
        basketItem2.quantity = 2;
        basketItem2.name = "Testname 2";
        basketItem2.ean = 4213412341243;
        basketItem2.tax = 19;
        basketItem2.total = 2000;
        basketItem2.price = 1000;
        basketItem3.type = "article";
        basketItem3.article_number = 48875;
        basketItem3.quantity = 3;
        basketItem3.name = "Testname 3";
        basketItem3.ean = 4123412341236;
        basketItem3.tax = 19;
        basketItem3.total = 3000;
        basketItem3.price = 1000;


          return instance.paymentSecupaydebitsPost({"body":transactionDTO}).then(function(data) {
            transaction = data;
            expect(data).toBeInstanceOf(SecuConnectApi.SecupayTransactionProductModel);
        }, function(error) {
            console.error(error);
        });
      });

      it('should retrieve transaction successfully', function () {
        return instance.paymentSecupayDebitsGetById(transaction.id).then(function(data) {
          expect(data).toBeInstanceOf(SecuConnectApi.SecupayTransactionProductModel);
          expect(data.id).toBe(transaction.id);
          expect(typeof data.basket).toBe('object');
          expect(data.basket[0]).toBeInstanceOf(SecuConnectApi.SecupayBasketItem);
        }, function (error) {
          console.error(error);
        });
      });

      it('should delete container successfully', function () {
        var containerAPI = new SecuConnectApi.PaymentContainersApi();
        containerAPI.apiClient.authentications.oauth_token.accessToken = authenticator.getToken();

        return containerAPI.paymentContainersIdDelete(transaction.container.id).then(function(data) {
          expect(data[0]).toBeInstanceOf(SecuConnectApi.PaymentContainersProductModel);
        }, function(error) {
          console.error(error);
        });
      });

      it('should delete customer successfully', function () {
        var customerAPI = new SecuConnectApi.PaymentCustomersApi();
        customerAPI.apiClient.authentications.oauth_token.accessToken = authenticator.getToken();

        return customerAPI.paymentCustomersIdDelete(transaction.customer.id).then(function(data) {
          expect(data[0]).toBeInstanceOf(SecuConnectApi.PaymentCustomersProductModel);
        }, function(error) {
          console.error(error);
        });
      });
    });
  });

}));
