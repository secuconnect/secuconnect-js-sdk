'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowserSocket = function () {
    function BrowserSocket(host, port, vhost, debugMode) {
        _classCallCheck(this, BrowserSocket);

        this.url = 'wss://' + host + ':' + port + vhost;
        this.connected = false;
        this.debugMode = debugMode;
    }

    _createClass(BrowserSocket, [{
        key: 'connect',
        value: function connect() {
            this.socket = new WebSocket(this.url);
            this.socket.onmessage = this.onmessage;
            this.socket.onerror = this.onerror;
            this.socket.onclose = this.onclose;
            this.socket.binaryType = "arraybuffer";
            this.socket.onopen = this.onopen;
        }
    }, {
        key: 'addOnOpenListener',
        value: function addOnOpenListener(onOpen) {
            var _this = this;

            this.onopen = function () {
                _this.connected = true;
                if (_this.debugMode) console.log('Connected to socket');
                onOpen();
            };
        }
    }, {
        key: 'addOnMessageListener',
        value: function addOnMessageListener(onMessage) {
            var _this2 = this;

            this.onmessage = function (messageEvent) {
                if (_this2.debugMode) console.log('Received data on socket');
                onMessage(messageEvent.data);
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
            var _this3 = this;

            this.onclose = function (error) {
                if (_this3.debugMode) console.log('Closing socket');
                _this3.connected = false;
                onClose(error);
            };
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.connected) {
                this.socket.close();
                this.connected = false;
            }
        }
    }, {
        key: 'write',
        value: function write(chunk) {
            if (this.connected) {
                this.socket.send(chunk);
            } else {
                throw 'can not write to an unopened socket';
            }
        }
    }]);

    return BrowserSocket;
}();

exports.default = BrowserSocket;