import Stomp from './main/Stomp';
import SocketProvider from './socket/SocketProvider';
import * as config from "../../stomp-config.json";
import { Environments } from './StompGlobals';

class StompClient {

    // this is session refresh interval given in seconds
    SESSION_REFRESH_INTERVAL = 120;

    constructor(token, env, debugMode) {
        if (token === undefined) throw 'token is not a valid value';
        if (config.host === '' || config.host === undefined) throw 'invalid host in stomp config';
        if (config.headers.content_type === '' || config.headers.content_type === undefined) throw 'invalid content_type in stomp config';
        if (config.headers.reply_to === '' || config.headers.reply_to === undefined) throw 'invalid reply_to in stomp config';
        if (config.headers.ack === '' || config.headers.ack === undefined) throw 'invalid ack in stomp config';

        if (env === Environments.NODE) {
            this.socketProvider = new SocketProvider(config.host, config.node_env.port, config.node_env.vhost, debugMode);
        } else {
            this.socketProvider = new SocketProvider(config.host, config.browser_env.port, config.browser_env.vhost, debugMode);
        }

        this.socket = this.socketProvider.createSocket(env);
        this.stomp = new Stomp(token, token, this.socket, debugMode);
        this.token = token;
        this.debugMode = debugMode;
    }

    getToken() {
        return this.token;
    }

    connect() {
        return new Promise((resolve, reject) => {
            // possible situations while connecting to socket
            this.stomp.on('socket-error', (error) => {
                console.error('Unexpected socket error' + error);

                reject(error);
            });

            this.stomp.on('disconnected', (error) => {
                if (error) {
                    console.error('Disconnected from Stomp with error: ' + error);
                } else {
                    if (this.debugMode) console.log('Disconnected from Stomp');
                }

                reject(error);
            });

            // possible situations while connecting to stomp broker
            this.stomp.on('error', (frame) => {
                console.error('Error: ' + frame.body);

                reject(frame);
            });

            this.stomp.on('connected', (frame) => {
                this.refreshAuthSession();

                // if successfully connected then set proper listeners for soceket and stomp
                this.stomp.on('socket-error', (error) => {
                    if (this.debugMode) console.log('Unexpected socket error' + error);
                });

                this.stomp.on('disconnected', (error) => {
                    if (error) {
                        if (this.debugMode) console.log('Disconnected from Stomp with error: ' + error);
                    } else {
                        if (this.debugMode) console.log('Disconnected from Stomp');
                    }
                });

                this.stomp.on('error', (frame) => {
                    console.error('Error: ' + frame.body);
                });

                this.stomp.on('receipt', (frame) => {
                    if (this.debugMode) console.log('Received receipt: ' + frame.headers['receipt-id']);
                });

                this.stomp.on('message', (frame) => {
                    if (this.debugMode) console.log('Received message: ' + frame.body);
                });

                resolve(frame);
            });

            // try connecting
            this.stomp.connect();
        });
    }

    refreshAuthSession() {
        let destination = '/exchange/connect.api/api:add:Auth.Sessions.refresh';
        let body = JSON.stringify({
            "method": "Auth.Sessions.refresh",
            "action": "exec",
            "pid": "me",
            "data": {
                "refresh_interval": this.SESSION_REFRESH_INTERVAL
            },
            "action_id": this.generateCorrelationId()
        });

        this.sendMessage(destination, body);
        setInterval(() => this.sendMessage(destination, body), this.SESSION_REFRESH_INTERVAL * 1000);
    }

    sendMessage(destination, body, want_receipt) {
        let headers = this.prepareHeaders();
        headers['destination'] = destination;
        this.stomp.send('SEND', headers, body, want_receipt);
    }

    subscribe(destination, headers) {
        headers['session'] = this.session;
        headers['destination'] = destination;
        this.stomp.send('SUBSCRIBE', headers);
    };

    unsubscribe(destination, headers) {
        headers['session'] = this.session;
        headers['destination'] = destination;
        this.stomp.send('UNSUBSCRIBE', headers);
    };

    ack(message_id) {
        send('ACK', { 'message-id': message_id });
    };

    nack(message_id) {
        send('NACK', { 'message-id': message_id });
    };

    begin() {
        // generating random number (the multiplier '99999999999' has to be fairly big)
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
        this.stomp.on('disconnected', this['disconnected']);
    }

    setSocketErrorListener(listener) {
        if (this['socket-error']) {
            this.stomp.removeListener('socket-error', this['socket-error']);
        }
        this['socket-error'] = listener;
        this.stomp.on('socket-error', this['socket-error']);
    }

    setMessageListener(listener) {
        if (this['message']) {
            this.stomp.removeListener('message', this['message']);
        }
        this['message'] = listener;
        this.stomp.on('message', this['message']);
    }

    setReceiptListener(listener) {
        if (this['receipt']) {
            this.stomp.removeListener('receipt', this['receipt']);
        }
        this['receipt'] = listener;
        this.stomp.on('receipt', this['receipt']);
    }

    setErrorListener(listener) {
        if (this['error']) {
            this.stomp.removeListener('error', this['error']);
        }
        this['error'] = listener;
        this.stomp.on('error', this['error']);
    }

    generateCorrelationId() {
        let date = new Date();
        let startUniquePart = Math.random().toString(36).substr(2, 115);
        let endUniquePart = Math.random().toString(36).substr(2, 115);

        return startUniquePart + '-' + date.toISOString().replace(/ /g, '') + '-' + endUniquePart;
    }

    prepareHeaders() {
        return {
            "content-type": config.headers.content_type,
            "reply-to": config.headers.reply_to,
            "user-id": this.getToken(),
            "correlation-id": this.generateCorrelationId(),
            "ack": config.headers.ack
        };
    }
};

export const StompFactory = {
    getInstance: (token, env, debugMode = false) => {
        if (StompFactory.hasOwnProperty('instance')) {
            return StompFactory.instance;
        } else {
            StompFactory.instance = new StompClient(token, env, debugMode);
            StompFactory.instance.constructor = undefined;
            Object.freeze(StompFactory);
            return StompFactory.instance;
        }
    }
}