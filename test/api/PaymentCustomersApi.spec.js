
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SecuConnectApi);
  }
}(this, function(SecuConnectApi) {
  'use strict';

  var instance;

    beforeEach(function() {

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

  describe('PaymentCustomersApi', function() {
    describe('paymentCustomersGet', function() {
      it('should call paymentCustomersGet successfully', function(done) {
        //uncomment below and update the code to test paymentCustomersGet
        //instance.paymentCustomersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentCustomersGetById', function() {
      it('should call paymentCustomersGetById successfully', function(done) {
        //uncomment below and update the code to test paymentCustomersGetById
        //instance.paymentCustomersGetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentCustomersIdDelete', function() {
      it('should call paymentCustomersIdDelete successfully', function(done) {
        //uncomment below and update the code to test paymentCustomersIdDelete
        //instance.paymentCustomersIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentCustomersIdPut', function() {
      it('should call paymentCustomersIdPut successfully', function(done) {
        //uncomment below and update the code to test paymentCustomersIdPut
        //instance.paymentCustomersIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentCustomersPost', function() {
      it('should call paymentCustomersPost successfully', function() {
            // uncomment below and update the code to test paymentCustomersPost

          // var authenticator = new SecuConnectApi.Authenticator(
          //     SecuConnectApi.OAuthClientCredentials.from(
          //         '09ae83af7c37121b2de929b211bad944',
          //         '9c5f250b69f6436cb38fd780349bc00810d8d5051d3dcf821e428f65a32724bd'
          //     ));
          // instance = new SecuConnectApi.PaymentCustomersApi();
          // instance.apiClient.authentications.oauth_token.accessToken = authenticator.getToken();
          //
          //   var customer = new SecuConnectApi.PaymentCustomersDTO();
          //   customer.contact =
          //       {
          //           "salutation": "Mr.",
          //           "title": "Dr.",
          //           "forename": "John",
          //           "surname": "Doe",
          //           "companyname": "Example Inc.",
          //           "dob": "1901-02-03",
          //           "email": "example@example.com",
          //           "phone": "0049-123-456789",
          //           "mobile": "0049-987-654321",
          //           "address": {
          //               "street": "Example Street",
          //               "street_number": "6a",
          //               "postal_code": "01234",
          //               "city": "Examplecity",
          //               "country": "Germany"
          //           }
          //       };
          //
          //   return instance.paymentCustomersPost(customer)
          //       .then(function(data) {
          //           expect(data).to.be.an('object');
          //           expect(data).to.have.property('salutation');
          //       });
        });
    });
  });

}));
