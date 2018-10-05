import Stomp from './stomp/Stomp';
import SocketProvider from './socket/SocketProvider';

export default class StompClient {

	constructor(token, secureConnection, host, env, debugMode) {
		if (token === undefined) throw 'token is not a valid value';
		if (secureConnection === undefined) throw 'secureConnection is not a valid value';
		if (host === undefined) throw 'host is not a valid value';

		this.socketProvider = new SocketProvider(secureConnection, host);
		this.socket = this.socketProvider.createSocket(env);
		this.stomp = new Stomp(token, token, this.socket);

		this.setDisconnectedListener(this.defaultDisconnectedListener);
		this.setSocketErrorListener(this.defaultSocketErrorListener);
		this.setConnectedListener(this.defaultConnectedListener);
		this.setMessageListener(this.defaultMessageListener);
		this.setReceiptListener(this.defaultReceiptListener);
		this.setErrorListener(this.defaultErrorListener);

		if (!debugMode) {
			console.log = () => {};
		}
	}

	connect() {
		this.stomp.connect();
	}

	sendMessage(destination, headers, body, want_receipt) {
		headers['destination'] = destination;
		this.stomp.send('SEND', headers, body, want_receipt);
	}

	subscribe(destination, headers) {
		headers['session'] = this.session;

		if (destination instanceof Array) {
			for (let i = 0; i < destination.length; i++) {
				headers.destination = destination[i];
				this.stomp.send('SUBSCRIBE', headers);
			}
		} else {
			this.stomp.send('SUBSCRIBE', headers);
		}
	};

	unsubscribe(destination, headers) {
		headers['session'] = this.session;

		if (destination instanceof Array) {
			for (let i = 0; i < destination.length; i++) {
				headers.destination = destination[i];
				this.stomp.send('UNSUBSCRIBE', headers);
			}
		} else {
			this.stomp.send('UNSUBSCRIBE', headers);
		}
	};

	ack(message_id) {
		send('ACK', { 'message-id': message_id });
	};

	nack(message_id) {
		send('NACK', { 'message-id': message_id });
	};

	begin() {
		let transaction_id = Math.floor(Math.random() * 99999999999).toString();
		send('BEGIN', { 'transaction': transaction_id });
		return transaction_id;
	};

	commit(transaction_id) {
		send('COMMIT', { 'transaction': transaction_id });
	};

	abort(transaction_id) {
		send('ABORT', { 'transaction': transaction_id });
	};

	setDisconnectedListener(listener) {
		if (this['disconnected']) {
			this.stomp.removeListener('disconnected', this['disconnected']);
		}
		this['disconnected'] = listener;
		this.stomp.on('disconnected', listener);
	}

	setSocketErrorListener(listener) {
		if (this['socket-error']) {
			this.stomp.removeListener('socket-error', this['socket-error']);
		}
		this['socket-error'] = listener;
		this.stomp.on('socket-error', listener);
	}

	setConnectedListener(listener) {
		if (this['connected']) {
			this.stomp.removeListener('connected', this['connected']);
		}
		this['connected'] = listener;
		this.stomp.on('connected', listener);
	}

	setMessageListener(listener) {
		if (this['message']) {
			this.stomp.removeListener('message', this['message']);
		}
		this['message'] = listener;
		this.stomp.on('message', listener);
	}

	setReceiptListener(listener) {
		if (this['receipt']) {
			this.stomp.removeListener('receipt', this['receipt']);
		}
		this['receipt'] = listener;
		this.stomp.on('receipt', listener);
	}

	setErrorListener(listener) {
		if (this['error']) {
			this.stomp.removeListener('error', this['error']);
		}
		this['error'] = listener;
		this.stomp.on('error', listener);
	}

	defaultConnectedListener(frame) {
		console.log('Connected to Stomp');
	}

	defaultReceiptListener(frame) {
		console.log('Received receipt: ' + frame.headers['receipt-id']);
	}

	defaultErrorListener(frame) {
		console.error('Error: ' + frame.body);
	}

	defaultMessageListener(frame) {
		console.log('Received message: ' + frame.body);
	}

	defaultDisconnectedListener(error) {
		if (error) {
			console.log('Disconnected from Stomp with error: ' + error);
		} else {
			console.log('Disconnected from Stomp');
		}
	}

	defaultSocketErrorListener(error) {
		console.log('Unexpected socket error' + error);
	}
};