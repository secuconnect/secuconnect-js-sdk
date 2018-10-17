'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _tls = require('tls');

var _tls2 = _interopRequireDefault(_tls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NodeSocket = function () {
    function NodeSocket(host, port, vhost) {
        _classCallCheck(this, NodeSocket);

        this.host = host;
        this.port = port;
        this.vhost = vhost;
        this.connected = false;
    }

    _createClass(NodeSocket, [{
        key: 'connect',
        value: function connect() {
            var _this = this;

            this.socket = _tls2.default.connect(this.port, this.host, {}, function () {
                if (_this.socket.authorized) {
                    _this.socket.on('data', _this.onmessage);
                    _this.socket.on('error', _this.onerror);
                    _this.socket.on('close', _this.onclose);
                    _this.onopen();
                } else {
                    _this.onerror(socket.authorizationError);
                    _this.close();
                }
            });
        }
    }, {
        key: 'addOnOpenListener',
        value: function addOnOpenListener(onOpen) {
            var _this2 = this;

            this.onopen = function () {
                _this2.connected = true;
                console.log('Connected to socket');
                onOpen();
            };
        }
    }, {
        key: 'addOnMessageListener',
        value: function addOnMessageListener(onMessage) {
            this.onmessage = function (binaryData) {
                console.log('Received data on socket');
                onMessage('' + binaryData);
            };
        }
    }, {
        key: 'addOnErrorListener',
        value: function addOnErrorListener(onError) {
            this.onerror = function (error) {
                console.error('Socket error');
                onError(error);
            };
        }
    }, {
        key: 'addOnCloseListener',
        value: function addOnCloseListener(onClose) {
            this.onclose = function (error) {
                console.log('Closing socket');
                onClose(error);
            };
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.connected) {
                socket.end();
                if (socket.readyState == 'readOnly') {
                    socket.destroy();
                }
                this.connected = false;
            }
        }
    }, {
        key: 'write',
        value: function write(chunk) {
            if (this.connected) {
                this.socket.write(chunk);
            } else {
                throw 'cannot write to an unopened socket';
            }
        }
    }]);

    return NodeSocket;
}();

exports.default = NodeSocket;