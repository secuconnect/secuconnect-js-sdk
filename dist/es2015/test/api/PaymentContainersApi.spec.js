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
    instance = new SecuConnectApi.PaymentContainersApi();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('PaymentContainersApi', function () {
    describe('paymentContainersGet', function () {
      it('should call paymentContainersGet successfully', function (done) {
        //uncomment below and update the code to test paymentContainersGet
        //instance.paymentContainersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContainersGetById', function () {
      it('should call paymentContainersGetById successfully', function (done) {
        //uncomment below and update the code to test paymentContainersGetById
        //instance.paymentContainersGetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContainersIdAssignSecondaryIdDelete', function () {
      it('should call paymentContainersIdAssignSecondaryIdDelete successfully', function (done) {
        //uncomment below and update the code to test paymentContainersIdAssignSecondaryIdDelete
        //instance.paymentContainersIdAssignSecondaryIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContainersIdAssignSecondaryIdPost', function () {
      it('should call paymentContainersIdAssignSecondaryIdPost successfully', function (done) {
        //uncomment below and update the code to test paymentContainersIdAssignSecondaryIdPost
        //instance.paymentContainersIdAssignSecondaryIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContainersIdDelete', function () {
      it('should call paymentContainersIdDelete successfully', function (done) {
        //uncomment below and update the code to test paymentContainersIdDelete
        //instance.paymentContainersIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContainersIdPut', function () {
      it('should call paymentContainersIdPut successfully', function (done) {
        //uncomment below and update the code to test paymentContainersIdPut
        //instance.paymentContainersIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentContainersPost', function () {
      it('should call paymentContainersPost successfully', function (done) {
        //uncomment below and update the code to test paymentContainersPost
        //instance.paymentContainersPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});