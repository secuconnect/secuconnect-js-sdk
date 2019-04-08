"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StompGlobals = require("../StompGlobals");

var _BrowserSocket = require("../socket/BrowserSocket");

var _BrowserSocket2 = _interopRequireDefault(_BrowserSocket);

var _NodeSocket = require("../socket/NodeSocket");

var _NodeSocket2 = _interopRequireDefault(_NodeSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketProvider = function () {
    function SocketProvider(host, port, vhost, debugMode) {
        _classCallCheck(this, SocketProvider);

        this.host = host;
        this.port = port;
        this.vhost = vhost;
        this.debugMode = debugMode;
    }

    _createClass(SocketProvider, [{
        key: "createSocket",
        value: function createSocket(env) {
            switch (env) {
                case _StompGlobals.Environments.NODE:
                    return new _NodeSocket2.default(this.host, this.port, this.vhost, this.debugMode);
                default:
                    // defaults to browser env
                    return new _BrowserSocket2.default(this.host, this.port, this.vhost, this.debugMode);
            }
        }
    }]);

    return SocketProvider;
}();

exports.default = SocketProvider;