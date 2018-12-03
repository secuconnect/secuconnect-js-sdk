"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StompClient = require("../StompClient");

var _ApiClient = require("../../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartTransactionsProductModel = require("../../model/SmartTransactionsProductModel");

var _SmartTransactionsProductModel2 = _interopRequireDefault(_SmartTransactionsProductModel);

var _StompGlobals = require("../StompGlobals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StompSmartTransactionsApi = function () {
    function StompSmartTransactionsApi(authenticator) {
        var _this = this;

        var stompClient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, StompSmartTransactionsApi);

        this.destination = ["/exchange/connect.api/api:", ":Smart.Transactions"];
        this.authenticator = authenticator;

        if (stompClient != null && stompClient instanceof StompClient) {
            this.stompClient = stompClient;
            this.connected = this.stompClient.connect();
        } else {
            this.connected = new Promise(function (resolve, reject) {
                _this.authenticator.getToken().then(function (token) {
                    _this.stompClient = _StompClient.StompFactory.getInstance(token.access_token, _StompGlobals.Environments.BROWSER);
                    _this.stompClient.connect().then(function (connectedFrame) {
                        resolve(connectedFrame);
                    });
                });
            });
        }
    }

    _createClass(StompSmartTransactionsApi, [{
        key: "addTransaction",
        value: function addTransaction(smartTransactionProperties) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.connected.then(function (connectedFrame) {
                    _this2.stompClient.sendMessage(_this2.destination[0] + 'add' + _this2.destination[1], JSON.stringify({
                        'data': smartTransactionProperties }));

                    _this2.stompClient.setMessageListener(function (frame) {
                        var response = JSON.parse(frame.body);

                        if (response.status === _StompGlobals.ResponseStatus.ok) {
                            var smartTransaction = _ApiClient2.default.convertToType(response.data, _SmartTransactionsProductModel2.default);
                            resolve(smartTransaction);
                        } else {
                            reject(response.error_details);
                        }
                    });
                });
            });
        }
    }, {
        key: "updateTransaction",
        value: function updateTransaction(smartTransactionId, smartTransactionProperties) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.connected.then(function () {
                    _this3.stompClient.sendMessage(_this3.destination[0] + 'update' + _this3.destination[1], JSON.stringify({
                        'pid': smartTransactionId,
                        'data': smartTransactionProperties
                    }));

                    _this3.stompClient.setMessageListener(function (frame) {
                        var response = JSON.parse(frame.body);

                        if (response.status === _StompGlobals.ResponseStatus.ok) {
                            var smartTransaction = _ApiClient2.default.convertToType(response.data, _SmartTransactionsProductModel2.default);
                            resolve(smartTransaction);
                        } else {
                            reject(response.error_details);
                        }
                    });
                });
            });
        }
    }, {
        key: "startTransaction",
        value: function startTransaction(smartTransactionId, paymentMethod) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.connected.then(function () {
                    _this4.stompClient.sendMessage(_this4.destination[0] + 'update' + _this4.destination[1] + 'Start', JSON.stringify({
                        'pid': smartTransactionId,
                        'sid': paymentMethod
                    }));

                    _this4.stompClient.setMessageListener(function (frame) {
                        var response = JSON.parse(frame.body);

                        if (response.status === _StompGlobals.ResponseStatus.ok) {
                            var smartTransaction = _ApiClient2.default.convertToType(response.data, _SmartTransactionsProductModel2.default);
                            resolve(smartTransaction);
                        } else {
                            reject(response.error_details);
                        }
                    });
                });
            });
        }
    }, {
        key: "preTransaction",
        value: function preTransaction(smartTransactionId) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
                _this5.connected.then(function () {
                    _this5.stompClient.sendMessage(_this5.destination[0] + 'update' + _this5.destination[1] + 'Pretransaction', JSON.stringify({
                        'pid': smartTransactionId
                    }));

                    _this5.stompClient.setMessageListener(function (frame) {
                        var response = JSON.parse(frame.body);

                        if (response.status === _StompGlobals.ResponseStatus.ok) {
                            var smartTransaction = _ApiClient2.default.convertToType(response.data, _SmartTransactionsProductModel2.default);
                            resolve(smartTransaction);
                        } else {
                            reject(response.error_details);
                        }
                    });
                });
            });
        }
    }]);

    return StompSmartTransactionsApi;
}();

exports.default = StompSmartTransactionsApi;