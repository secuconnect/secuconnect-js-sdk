'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _AuthenticationCredentials = require('./AuthenticationCredentials');

var _AuthenticationCredentials2 = _interopRequireDefault(_AuthenticationCredentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * OAuthApplicationUserCredentials service.
 * @module authentication/OAuthApplicationUserCredentials
 */

var OAuthApplicationUserCredentials = function (_AuthenticationCreden) {
    _inherits(OAuthApplicationUserCredentials, _AuthenticationCreden);

    function OAuthApplicationUserCredentials() {
        _classCallCheck(this, OAuthApplicationUserCredentials);

        return _possibleConstructorReturn(this, (OAuthApplicationUserCredentials.__proto__ || Object.getPrototypeOf(OAuthApplicationUserCredentials)).apply(this, arguments));
    }

    _createClass(OAuthApplicationUserCredentials, [{
        key: 'getUniqueKey',
        value: function getUniqueKey() {
            return (0, _md2.default)(this.credentials.grant_type + this.credentials.client_id + this.credentials.username + this.credentials.device + this.credentials['deviceinfo[name]']);
        }
    }], [{
        key: 'from',
        value: function from(clientId, clientSecret, username, password, device, deviceName) {
            var credentials = new OAuthApplicationUserCredentials();
            credentials.credentials = {
                'grant_type': 'appuser',
                'client_id': clientId,
                'client_secret': clientSecret,
                'username': username,
                'password': password,
                'device': device,
                'deviceinfo[name]': deviceName
            };

            return credentials;
        }
    }]);

    return OAuthApplicationUserCredentials;
}(_AuthenticationCredentials2.default);

exports.default = OAuthApplicationUserCredentials;