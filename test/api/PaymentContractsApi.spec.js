
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

  beforeEach(function() {
    instance = new SecuConnectApi.PaymentContractsApi();
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

  describe('PaymentContractsApi', function() {
    describe('paymentContractsGet', function() {
      it('should call paymentContractsGet successfully', function(done) {
        //uncomment below and update the code to test paymentContractsGet
        //instance.paymentContractsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsGetById', function() {
      it('should call paymentContractsGetById successfully', function(done) {
        //uncomment below and update the code to test paymentContractsGetById
        //instance.paymentContractsGetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsIdClonePost', function() {
      it('should call paymentContractsIdClonePost successfully', function(done) {
        //uncomment below and update the code to test paymentContractsIdClonePost
        //instance.paymentContractsIdClonePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsIdDelete', function() {
      it('should call paymentContractsIdDelete successfully', function(done) {
        //uncomment below and update the code to test paymentContractsIdDelete
        //instance.paymentContractsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsIdPaymentMethodsGet', function() {
      it('should call paymentContractsIdPaymentMethodsGet successfully', function(done) {
        //uncomment below and update the code to test paymentContractsIdPaymentMethodsGet
        //instance.paymentContractsIdPaymentMethodsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsIdPut', function() {
      it('should call paymentContractsIdPut successfully', function(done) {
        //uncomment below and update the code to test paymentContractsIdPut
        //instance.paymentContractsIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsIdRequestIdPost', function() {
      it('should call paymentContractsIdRequestIdPost successfully', function(done) {
        //uncomment below and update the code to test paymentContractsIdRequestIdPost
        //instance.paymentContractsIdRequestIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContractsPost', function() {
      it('should call paymentContractsPost successfully', function(done) {
        //uncomment below and update the code to test paymentContractsPost
        //instance.paymentContractsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
