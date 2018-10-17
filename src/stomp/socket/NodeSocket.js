import net from 'net';
import tls from 'tls';

export default class NodeSocket {

    constructor(host, port, vhost) {
        this.host = host;
        this.port = port;
        this.vhost = vhost;
        this.connected = false;
    }

    connect() {
        this.socket = tls.connect(this.port, this.host, {}, () => {
            if (this.socket.authorized) {
                this.socket.on('data', this.onmessage);
                this.socket.on('error', this.onerror);
                this.socket.on('close', this.onclose);
                this.onopen();
            } else {
                this.onerror(socket.authorizationError);
                this.close();
            }
        });
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
            throw 'cannot write to an unopened socket';
        }
    }
}