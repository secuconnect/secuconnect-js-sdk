"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StompClient = require("../StompClient");

var _StompGlobals = require("../StompGlobals");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StompSmartTransactionsApi = function () {
    function StompSmartTransactionsApi(authenticator) {
        var _this = this;

        var stompClient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var environment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _StompGlobals.Environments.BROWSER;

        _classCallCheck(this, StompSmartTransactionsApi);

        this.destination = ["/exchange/connect.api/api:", ":Smart.Transactions"];
        this.authenticator = authenticator;

        if (stompClient != null && stompClient instanceof StompClient) {
            this.stompClient = stompClient;
            this.connected = this.stompClient.connect();
        } else {
            this.connected = new Promise(function (resolve) {
                _this.authenticator.getToken().then(function (token) {
                    _this.stompClient = _StompClient.StompFactory.getInstance(token.access_token, environment);
                    _this.stompClient.connect().then(function (connectedFrame) {
                        if (connectedFrame) {
                            resolve(connectedFrame);
                        } else {
                            reject('Connection error');
                        }
                    });
                });
            });
        }
    }

    _createClass(StompSmartTransactionsApi, [{
        key: "getConnectedStompClient",
        value: function getConnectedStompClient() {
            var _this2 = this;

            return this.connected.then(function () {
                return _this2.stompClient;
            });
        }
    }, {
        key: "addTransaction",
        value: function addTransaction(smartTransactionProperties) {
            var _this3 = this;

            this.connected.then(function () {
                _this3.stompClient.sendMessage(_this3.destination[0] + 'add' + _this3.destination[1], JSON.stringify({
                    'data': smartTransactionProperties }));
            });
        }
    }, {
        key: "updateTransaction",
        value: function updateTransaction(smartTransactionId, smartTransactionProperties) {
            var _this4 = this;

            this.connected.then(function () {
                _this4.stompClient.sendMessage(_this4.destination[0] + 'update' + _this4.destination[1], JSON.stringify({
                    'pid': smartTransactionId,
                    'data': smartTransactionProperties
                }));
            });
        }
    }, {
        key: "startTransaction",
        value: function startTransaction(smartTransactionId, paymentMethod) {
            var _this5 = this;

            this.connected.then(function () {
                _this5.stompClient.sendMessage(_this5.destination[0] + 'add' + _this5.destination[1] + '.Start', JSON.stringify({
                    'pid': smartTransactionId,
                    'sid': paymentMethod
                }));
            });
        }
    }, {
        key: "preTransaction",
        value: function preTransaction(smartTransactionId) {
            var _this6 = this;

            this.connected.then(function () {
                _this6.stompClient.sendMessage(_this6.destination[0] + 'add' + _this6.destination[1] + '.Pretransaction', JSON.stringify({
                    'pid': smartTransactionId
                }));
            });
        }
    }]);

    return StompSmartTransactionsApi;
}();

exports.default = StompSmartTransactionsApi;