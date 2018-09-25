
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
    instance = new SecuConnectApi.PaymentSecupayInvoicesApi();
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

  describe('PaymentSecupayInvoicesApi', function() {
    describe('paymentSecupayinvoicesHashCancelPost', function() {
      it('should call paymentSecupayinvoicesHashCancelPost successfully', function(done) {
        //uncomment below and update the code to test paymentSecupayinvoicesHashCancelPost
        //instance.paymentSecupayinvoicesHashCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentSecupayinvoicesHashGet', function() {
      it('should call paymentSecupayinvoicesHashGet successfully', function(done) {
        //uncomment below and update the code to test paymentSecupayinvoicesHashGet
        //instance.paymentSecupayinvoicesHashGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentSecupayinvoicesPost', function() {
      it('should call paymentSecupayinvoicesPost successfully', function(done) {
        //uncomment below and update the code to test paymentSecupayinvoicesPost
        //instance.paymentSecupayinvoicesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
