import net from 'net';
import tls from 'tls';

export default class NodeSocket {

    constructor(secureConnection, host, port, vhost) {
        this.secureConnection = secureConnection;
        this.host = host;
        this.port = port;
        this.vhost = vhost;
        this.connected = false;
    }

    connect() {
        if (this.secureConnection) {
            this.socket = tls.connect(this.port, this.host, {}, () => {
                if (!this.socket.authorized) {
                    this.onerror(socket.authorizationError);
                    this.close();
                } else {
                    this.socket.on('data', this.onmessage);
                    this.socket.on('error', this.onerror);
                    this.socket.on('close', this.onclose);
                    this.onopen();
                }
            });
        } else {
            this.socket = new net.Socket();
            this.socket.on('connect', this.onopen);
            this.socket.on('data', this.onmessage);
            this.socket.on('error', this.onerror);
            this.socket.on('close', this.onclose);
            this.socket.connect(this.port, this.host);
        }
    }

    addOnOpenListener(onOpen) {
        this.onopen = () => {
            this.connected = true;
            console.log('Connected to socket');
            onOpen();
        };
    }

    addOnMessageListener(onMessage) {
        this.onmessage = (binaryData) => {
            console.log('Received data on socket');
            onMessage('' + binaryData);
        };
    }

    addOnErrorListener(onError) {
        this.onerror = (error) => {
            console.error('Socket error');
            onError(error);
        };
    }

    addOnCloseListener(onClose) {
        this.onclose = (error) => {
            console.log('Closing socket');
            onClose(error);
        };
    }

    close() {
        if (this.connected) {
            socket.end();
            if (socket.readyState == 'readOnly') {
                socket.destroy();
            }
            this.connected = false;
        }
    }

    write(chunk) {
        if (this.connected) {
            this.socket.write(chunk);
        } else {
            throw 'can not write to an unopened socket';
        }
    }
}