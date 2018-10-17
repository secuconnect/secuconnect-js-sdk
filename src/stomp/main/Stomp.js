import { EventEmitter } from "events";
import Frame from '../frame/Frame';
import { StompFrameCommands } from "../StompGlobals";

export default class Stomp extends EventEmitter {

    constructor(login, passcode, socket) {
        super();
        EventEmitter.call(this);

        this.login = login; // broker's user login
        this.passcode = passcode; // broker's user passcode (password)
        this.socket = socket; // socket used to connect to broker
        this.session = null; // session id
    }

    connect() {
        this.socket.addOnOpenListener(() => {
            console.log('Connecting to Stomp');
            let headers = {};
            headers['login'] = this.login;
            headers['passcode'] = this.passcode;

            this.send('CONNECT', headers);
        });

        this.socket.addOnMessageListener((data) => {
            let frames = data.split('\0\n');

            if (frames.length == 1) {
                frames = data.split('\0');
                if (frames.length == 1) {
                    console.error('Unexpected error when receiving data chunk from broker: ' + data, true);
                }
            }
            frames.pop();

            let frame = null;
            while (frame = frames.shift()) {
                this.handleFrame(new Frame().parseChunk(frame));
            }
        });

        this.socket.addOnErrorListener((error) => {
            this.emit("socket-error", error);
        });

        this.socket.addOnCloseListener((error) => {
            this.emit("disconnected", error);
        });
        
        this.socket.connect();
    };

    send(command, headers, body, want_receipt) {
        let frame = new Frame(command, headers, body, want_receipt);

        console.log('sending frame:\n' + frame.toString());

        if (this.socket.write(frame.toString()) === false) {
            console.log('Write buffered');
        }
    };

    disconnect() {
        this.socket.end();

        if (this.socket.readyState == 'readOnly') {
            this.socket.destroy();
        }

        console.log('disconnect called');
    }

    handleFrame(frame) {
        switch (frame.command) {
            case StompFrameCommands.MESSAGE:
                console.log('Recived message from broker');
                this.emit('message', frame);
                break;
            case StompFrameCommands.RECEIPT:
                console.log('Received receipt');
                this.emit('receipt', frame);
                break;
            case StompFrameCommands.CONNECTED:
                console.log('Connected to Stomp broker');
                this.session = frame.headers['session'];
                this.emit('connected', frame);
                break;
            case StompFrameCommands.ERROR:
                console.warn('Received error message');
                this.emit('error', frame);
                break;
            default:
                console.error("Unknown command: " + frame.command, true);
        }
    };
};