'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Authenticator service.
 * @module authentication/Authenticator
 */
var Authenticator = function () {
  function Authenticator(credentials, apiClient) {
    _classCallCheck(this, Authenticator);

    this.credentials = credentials;
    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(Authenticator, [{
    key: 'getToken',
    value: function getToken() {
      var _this = this;

      return this.apiClient.cachePool.exists(this.credentials.getUniqueKey()).then(function (exists) {
        if (exists) {
          return _this.apiClient.cachePool.getItem(_this.credentials.getUniqueKey());
        } else {
          _this.apiClient.basePath = 'https://connect-testing.secupay-ag.de/';
          return _this.apiClient.callApi('oauth/token', //path
          'POST', //httpMethod
          {}, //pathParams
          {}, //queryParams
          { 'Content-Type': 'application/json' }, //headerParams
          {}, //formParams
          _this.credentials.getCredentials(), //bodyParam
          [], //authNames
          [], //contentTypes
          [] //accepts
          //returnType
          ).then(function (response) {
            return response.response.body;
          }).then(function (value) {
            _this.apiClient.cachePool.setItem(_this.credentials.getUniqueKey(), value);
            return value;
          }).catch(function (err) {
            console.log(err);
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }]);

  return Authenticator;
}();

exports.default = Authenticator;