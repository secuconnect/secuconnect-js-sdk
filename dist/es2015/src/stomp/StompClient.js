'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StompFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Stomp = require('./main/Stomp');

var _Stomp2 = _interopRequireDefault(_Stomp);

var _SocketProvider = require('./socket/SocketProvider');

var _SocketProvider2 = _interopRequireDefault(_SocketProvider);

var _stompConfig = require('../../stomp-config.json');

var config = _interopRequireWildcard(_stompConfig);

var _StompGlobals = require('./StompGlobals');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StompClient = function () {
    function StompClient(token, env, debugMode) {
        _classCallCheck(this, StompClient);

        this.SESSION_REFRESH_INTERVAL = 120;

        if (token === undefined) throw 'token is not a valid value';
        if (config.host === '' || config.host === undefined) throw 'invalid host in stomp config';
        if (config.headers.content_type === '' || config.headers.content_type === undefined) throw 'invalid content_type in stomp config';
        if (config.headers.reply_to === '' || config.headers.reply_to === undefined) throw 'invalid reply_to in stomp config';
        if (config.headers.ack === '' || config.headers.ack === undefined) throw 'invalid ack in stomp config';

        if (env === _StompGlobals.Environments.NODE) {
            this.socketProvider = new _SocketProvider2.default(config.host, config.node_env.port, config.node_env.vhost);
        } else {
            this.socketProvider = new _SocketProvider2.default(config.host, config.browser_env.port, config.browser_env.vhost);
        }

        this.socket = this.socketProvider.createSocket(env);
        this.stomp = new _Stomp2.default(token, token, this.socket);
        this.token = token;

        if (!debugMode) {
            console.log = function () {};
        }
    }

    // this is session refresh interval given in seconds


    _createClass(StompClient, [{
        key: 'getToken',
        value: function getToken() {
            return this.token;
        }
    }, {
        key: 'connect',
        value: function connect() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                // possible situations while connecting to socket
                _this.stomp.on('socket-error', function (error) {
                    console.error('Unexpected socket error' + error);

                    reject(error);
                });

                _this.stomp.on('disconnected', function (error) {
                    if (error) {
                        console.error('Disconnected from Stomp with error: ' + error);
                    } else {
                        console.log('Disconnected from Stomp');
                    }

                    reject(error);
                });

                // possible situations while connecting to stomp broker
                _this.stomp.on('error', function (frame) {
                    console.error('Error: ' + frame.body);

                    reject(frame);
                });

                _this.stomp.on('connected', function (frame) {
                    _this.refreshAuthSession();

                    // if successfully connected then set proper listeners for soceket and stomp
                    _this.stomp.on('socket-error', function (error) {
                        console.log('Unexpected socket error' + error);
                    });

                    _this.stomp.on('disconnected', function (error) {
                        if (error) {
                            console.log('Disconnected from Stomp with error: ' + error);
                        } else {
                            console.log('Disconnected from Stomp');
                        }
                    });

                    _this.stomp.on('error', function (frame) {
                        console.error('Error: ' + frame.body);
                    });

                    _this.stomp.on('receipt', function (frame) {
                        console.log('Received receipt: ' + frame.headers['receipt-id']);
                    });

                    _this.stomp.on('message', function (frame) {
                        console.log('Received message: ' + frame.body);
                    });

                    resolve(frame);
                });

                // try connecting
                _this.stomp.connect();
            });
        }
    }, {
        key: 'refreshAuthSession',
        value: function refreshAuthSession() {
            var _this2 = this;

            var destination = '/exchange/connect.api/api:add:Auth.Sessions.refresh';
            var body = JSON.stringify({
                "method": "Auth.Sessions.refresh",
                "action": "exec",
                "pid": "me",
                "data": {
                    "refresh_interval": this.SESSION_REFRESH_INTERVAL
                },
                "action_id": this.generateCorrelationId()
            });

            this.sendMessage(destination, body);
            setInterval(function () {
                return _this2.sendMessage(destination, body);
            }, this.SESSION_REFRESH_INTERVAL * 1000);
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(destination, body, want_receipt) {
            var headers = this.prepareHeaders();
            headers['destination'] = destination;
            this.stomp.send('SEND', headers, body, want_receipt);
        }
    }, {
        key: 'subscribe',
        value: function subscribe(destination, headers) {
            headers['session'] = this.session;
            headers['destination'] = destination;
            this.stomp.send('SUBSCRIBE', headers);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(destination, headers) {
            headers['session'] = this.session;
            headers['destination'] = destination;
            this.stomp.send('UNSUBSCRIBE', headers);
        }
    }, {
        key: 'ack',
        value: function ack(message_id) {
            send('ACK', { 'message-id': message_id });
        }
    }, {
        key: 'nack',
        value: function nack(message_id) {
            send('NACK', { 'message-id': message_id });
        }
    }, {
        key: 'begin',
        value: function begin() {
            // generating random number (the multiplier '99999999999' has to be fairly big)
            var transaction_id = Math.floor(Math.random() * 99999999999).toString();
            send('BEGIN', { 'transaction': transaction_id });
            return transaction_id;
        }
    }, {
        key: 'commit',
        value: function commit(transaction_id) {
            send('COMMIT', { 'transaction': transaction_id });
        }
    }, {
        key: 'abort',
        value: function abort(transaction_id) {
            send('ABORT', { 'transaction': transaction_id });
        }
    }, {
        key: 'setDisconnectedListener',
        value: function setDisconnectedListener(listener) {
            if (this['disconnected']) {
                this.stomp.removeListener('disconnected', this['disconnected']);
            }
            this['disconnected'] = listener;
            this.stomp.on('disconnected', this['disconnected']);
        }
    }, {
        key: 'setSocketErrorListener',
        value: function setSocketErrorListener(listener) {
            if (this['socket-error']) {
                this.stomp.removeListener('socket-error', this['socket-error']);
            }
            this['socket-error'] = listener;
            this.stomp.on('socket-error', this['socket-error']);
        }
    }, {
        key: 'setMessageListener',
        value: function setMessageListener(listener) {
            if (this['message']) {
                this.stomp.removeListener('message', this['message']);
            }
            this['message'] = listener;
            this.stomp.on('message', this['message']);
        }
    }, {
        key: 'setReceiptListener',
        value: function setReceiptListener(listener) {
            if (this['receipt']) {
                this.stomp.removeListener('receipt', this['receipt']);
            }
            this['receipt'] = listener;
            this.stomp.on('receipt', this['receipt']);
        }
    }, {
        key: 'setErrorListener',
        value: function setErrorListener(listener) {
            if (this['error']) {
                this.stomp.removeListener('error', this['error']);
            }
            this['error'] = listener;
            this.stomp.on('error', this['error']);
        }
    }, {
        key: 'generateCorrelationId',
        value: function generateCorrelationId() {
            var date = new Date();
            var startUniquePart = Math.random().toString(36).substr(2, 115);
            var endUniquePart = Math.random().toString(36).substr(2, 115);

            return startUniquePart + '-' + date.toISOString().replace(/ /g, '') + '-' + endUniquePart;
        }
    }, {
        key: 'prepareHeaders',
        value: function prepareHeaders() {
            return {
                "content-type": config.headers.content_type,
                "reply-to": config.headers.reply_to,
                "user-id": this.getToken(),
                "correlation-id": this.generateCorrelationId(),
                "ack": config.headers.ack
            };
        }
    }]);

    return StompClient;
}();

;

var StompFactory = exports.StompFactory = {
    getInstance: function getInstance(token, env) {
        var debugMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (StompFactory.hasOwnProperty('instance')) {
            return StompFactory.instance;
        } else {
            StompFactory.instance = new StompClient(token, env, debugMode);
            StompFactory.instance.constructor = undefined;
            Object.freeze(StompFactory);
            return StompFactory.instance;
        }
    }
};