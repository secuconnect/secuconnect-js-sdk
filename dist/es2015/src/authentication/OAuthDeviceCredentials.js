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
 * OAuthDeviceCredentials service.
 * @module authentication/OAuthDeviceCredentials
 */

var OAuthDeviceCredentials = function (_AuthenticationCreden) {
    _inherits(OAuthDeviceCredentials, _AuthenticationCreden);

    function OAuthDeviceCredentials() {
        _classCallCheck(this, OAuthDeviceCredentials);

        return _possibleConstructorReturn(this, (OAuthDeviceCredentials.__proto__ || Object.getPrototypeOf(OAuthDeviceCredentials)).apply(this, arguments));
    }

    _createClass(OAuthDeviceCredentials, [{
        key: 'getUniqueKey',
        value: function getUniqueKey() {
            return (0, _md2.default)(this.credentials.grant_type + this.credentials.client_id + this.credentials.uuid);
        }
    }], [{
        key: 'from',
        value: function from(clientId, clientSecret, deviceUuid) {
            var credentials = new OAuthDeviceCredentials();
            credentials.credentials = {
                'grant_type': 'device',
                'client_id': clientId,
                'client_secret': clientSecret,
                'uuid': deviceUuid
            };
            return credentials;
        }
    }]);

    return OAuthDeviceCredentials;
}(_AuthenticationCredentials2.default);

exports.default = OAuthDeviceCredentials;