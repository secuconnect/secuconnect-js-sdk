import { EventEmitter } from "events";
import Frame from '../frame/Frame';
import { StompFrameCommands } from "../StompGlobals";

export default class Stomp extends EventEmitter {

    constructor(login, passcode, socket, debugMode) {
        super();
        EventEmitter.call(this);

        this.login = login; // broker's user login
        this.passcode = passcode; // broker's user passcode (password)
        this.socket = socket; // socket used to connect to broker
        this.session = null; // session id
        this.debugMode = debugMode;
    }

    connect() {
        this.socket.addOnOpenListener(() => {
            if (this.debugMode) console.log('Connecting to Stomp');
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

        if (this.debugMode) console.log('sending frame:\n' + frame.toString());

        if (this.socket.write(frame.toString()) === false) {
            if (this.debugMode) console.log('Write buffered');
        }
    };

    disconnect() {
        this.socket.end();

        if (this.socket.readyState == 'readOnly') {
            this.socket.destroy();
        }

        if (this.debugMode) console.log('disconnect called');
    }

    handleFrame(frame) {
        switch (frame.command) {
            case StompFrameCommands.MESSAGE:
                if (this.debugMode) console.log('Recived message from broker');
                this.emit('message', frame);
                break;
            case StompFrameCommands.RECEIPT:
                if (this.debugMode) console.log('Received receipt');
                this.emit('receipt', frame);
                break;
            case StompFrameCommands.CONNECTED:
                if (this.debugMode) console.log('Connected to Stomp broker');
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