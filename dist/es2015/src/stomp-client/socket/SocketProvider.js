"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Environment = require("../environment/Environment");

var _Environment2 = _interopRequireDefault(_Environment);

var _BrowserSocket = require("../socket/BrowserSocket");

var _BrowserSocket2 = _interopRequireDefault(_BrowserSocket);

var _NodeSocket = require("../socket/NodeSocket");

var _NodeSocket2 = _interopRequireDefault(_NodeSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketProvider = function () {
    function SocketProvider(secureConnection, host) {
        _classCallCheck(this, SocketProvider);

        this.env = new _Environment2.default();
        this.secureConnection = secureConnection;
        this.host = host;
    }

    _createClass(SocketProvider, [{
        key: "createSocket",
        value: function createSocket(env) {
            switch (env) {
                case this.env.NODE:
                    return new _NodeSocket2.default(this.secureConnection, this.host, 61614, '');
                default:
                    // defaults to browser env
                    return new _BrowserSocket2.default(this.secureConnection, this.host, 15671, '/stomp/websocket');
            }
        }
    }]);

    return SocketProvider;
}();

exports.default = SocketProvider;