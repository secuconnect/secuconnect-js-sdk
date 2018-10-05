'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Stomp = require('./stomp/Stomp');

var _Stomp2 = _interopRequireDefault(_Stomp);

var _SocketProvider = require('./socket/SocketProvider');

var _SocketProvider2 = _interopRequireDefault(_SocketProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StompClient = function () {
	function StompClient(token, secureConnection, host, env, debugMode) {
		_classCallCheck(this, StompClient);

		if (token === undefined) throw 'token is not a valid value';
		if (secureConnection === undefined) throw 'secureConnection is not a valid value';
		if (host === undefined) throw 'host is not a valid value';

		this.socketProvider = new _SocketProvider2.default(secureConnection, host);
		this.socket = this.socketProvider.createSocket(env);
		this.stomp = new _Stomp2.default(token, token, this.socket);

		this.setDisconnectedListener(this.defaultDisconnectedListener);
		this.setSocketErrorListener(this.defaultSocketErrorListener);
		this.setConnectedListener(this.defaultConnectedListener);
		this.setMessageListener(this.defaultMessageListener);
		this.setReceiptListener(this.defaultReceiptListener);
		this.setErrorListener(this.defaultErrorListener);

		if (!debugMode) {
			console.log = function () {};
		}
	}

	_createClass(StompClient, [{
		key: 'connect',
		value: function connect() {
			this.stomp.connect();
		}
	}, {
		key: 'sendMessage',
		value: function sendMessage(destination, headers, body, want_receipt) {
			headers['destination'] = destination;
			this.stomp.send('SEND', headers, body, want_receipt);
		}
	}, {
		key: 'subscribe',
		value: function subscribe(destination, headers) {
			headers['session'] = this.session;

			if (destination instanceof Array) {
				for (var i = 0; i < destination.length; i++) {
					headers.destination = destination[i];
					this.stomp.send('SUBSCRIBE', headers);
				}
			} else {
				this.stomp.send('SUBSCRIBE', headers);
			}
		}
	}, {
		key: 'unsubscribe',
		value: function unsubscribe(destination, headers) {
			headers['session'] = this.session;

			if (destination instanceof Array) {
				for (var i = 0; i < destination.length; i++) {
					headers.destination = destination[i];
					this.stomp.send('UNSUBSCRIBE', headers);
				}
			} else {
				this.stomp.send('UNSUBSCRIBE', headers);
			}
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
			this.stomp.on('disconnected', listener);
		}
	}, {
		key: 'setSocketErrorListener',
		value: function setSocketErrorListener(listener) {
			if (this['socket-error']) {
				this.stomp.removeListener('socket-error', this['socket-error']);
			}
			this['socket-error'] = listener;
			this.stomp.on('socket-error', listener);
		}
	}, {
		key: 'setConnectedListener',
		value: function setConnectedListener(listener) {
			if (this['connected']) {
				this.stomp.removeListener('connected', this['connected']);
			}
			this['connected'] = listener;
			this.stomp.on('connected', listener);
		}
	}, {
		key: 'setMessageListener',
		value: function setMessageListener(listener) {
			if (this['message']) {
				this.stomp.removeListener('message', this['message']);
			}
			this['message'] = listener;
			this.stomp.on('message', listener);
		}
	}, {
		key: 'setReceiptListener',
		value: function setReceiptListener(listener) {
			if (this['receipt']) {
				this.stomp.removeListener('receipt', this['receipt']);
			}
			this['receipt'] = listener;
			this.stomp.on('receipt', listener);
		}
	}, {
		key: 'setErrorListener',
		value: function setErrorListener(listener) {
			if (this['error']) {
				this.stomp.removeListener('error', this['error']);
			}
			this['error'] = listener;
			this.stomp.on('error', listener);
		}
	}, {
		key: 'defaultConnectedListener',
		value: function defaultConnectedListener(frame) {
			console.log('Connected to Stomp');
		}
	}, {
		key: 'defaultReceiptListener',
		value: function defaultReceiptListener(frame) {
			console.log('Received receipt: ' + frame.headers['receipt-id']);
		}
	}, {
		key: 'defaultErrorListener',
		value: function defaultErrorListener(frame) {
			console.error('Error: ' + frame.body);
		}
	}, {
		key: 'defaultMessageListener',
		value: function defaultMessageListener(frame) {
			console.log('Received message: ' + frame.body);
		}
	}, {
		key: 'defaultDisconnectedListener',
		value: function defaultDisconnectedListener(error) {
			if (error) {
				console.log('Disconnected from Stomp with error: ' + error);
			} else {
				console.log('Disconnected from Stomp');
			}
		}
	}, {
		key: 'defaultSocketErrorListener',
		value: function defaultSocketErrorListener(error) {
			console.log('Unexpected socket error' + error);
		}
	}]);

	return StompClient;
}();

exports.default = StompClient;
;