'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['../../src/index'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.SecuConnectApi);
  }
})(undefined, function (SecuConnectApi) {
  'use strict';

  var instance;

  beforeEach(function () {
    instance = new SecuConnectApi.PaymentSecupayCreditcardsApi();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('PaymentSecupayCreditcardsApi', function () {
    describe('paymentSecupaycreditcardsHashCancelPost', function () {
      it('should call paymentSecupaycreditcardsHashCancelPost successfully', function (done) {
        //uncomment below and update the code to test paymentSecupaycreditcardsHashCancelPost
        //instance.paymentSecupaycreditcardsHashCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentSecupaycreditcardsHashGet', function () {
      it('should call paymentSecupaycreditcardsHashGet successfully', function (done) {
        //uncomment below and update the code to test paymentSecupaycreditcardsHashGet
        //instance.paymentSecupaycreditcardsHashGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentSecupaycreditcardsPost', function () {
      it('should call paymentSecupaycreditcardsPost successfully', function (done) {
        //uncomment below and update the code to test paymentSecupaycreditcardsPost
        //instance.paymentSecupaycreditcardsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});