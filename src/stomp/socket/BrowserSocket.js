export default class BrowserSocket {

    constructor(host, port, vhost) {
        this.url = 'wss://' + host + ':' + port + vhost;
        this.connected = false;
    }

    connect() {
        this.socket = new WebSocket(this.url);
        this.socket.onmessage = this.onmessage;
        this.socket.onerror = this.onerror;
        this.socket.onclose = this.onclose;
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onopen;
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
