export default class BrowserSocket {

    constructor(secureConnection, host, port, vhost) {
        this.url = (secureConnection ? 'wss://' : 'ws://') + host + ':' + port + vhost;
        this.connected = false;
    }

    connect() {
        this.socket = new WebSocket(this.url);
        this.socket.onopen = this.onopen;
        this.socket.onmessage = this.onmessage;
        this.socket.onerror = this.onerror;
        this.socket.onclose = this.onclose;
        this.socket.binaryType = "arraybuffer";
    }

    addOnOpenListener(onOpen) {
        this.onopen = () => {
            this.connected = true;
            console.log('Connected to socket');
            onOpen();
        };
    }

    addOnMessageListener(onMessage) {
        this.onmessage = (messageEvent) => {
            console.log('Received data on socket');
            onMessage(messageEvent.data);
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
            this.socket.close();
            this.connected = false;
        }
    }

    write(chunk) {
        if (this.connected) {
            this.socket.send(chunk);
        } else {
            throw 'can not write to an unopened socket';
        }
    }
}
