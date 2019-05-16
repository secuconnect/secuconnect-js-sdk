"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require("events");

var _Frame = require("../frame/Frame");

var _Frame2 = _interopRequireDefault(_Frame);

var _StompGlobals = require("../StompGlobals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stomp = function (_EventEmitter) {
    _inherits(Stomp, _EventEmitter);

    function Stomp(login, passcode, socket, debugMode) {
        _classCallCheck(this, Stomp);

        var _this = _possibleConstructorReturn(this, (Stomp.__proto__ || Object.getPrototypeOf(Stomp)).call(this));

        _events.EventEmitter.call(_this);

        _this.login = login; // broker's user login
        _this.passcode = passcode; // broker's user passcode (password)
        _this.socket = socket; // socket used to connect to broker
        _this.session = null; // session id
        _this.debugMode = debugMode;
        return _this;
    }

    _createClass(Stomp, [{
        key: "connect",
        value: function connect() {
            var _this2 = this;

            this.socket.addOnOpenListener(function () {
                if (_this2.debugMode) console.log('Connecting to Stomp');
                var headers = {};
                headers['login'] = _this2.login;
                headers['passcode'] = _this2.passcode;

                _this2.send('CONNECT', headers);
            });

            this.socket.addOnMessageListener(function (data) {
                var frames = data.split('\0\n');

                if (frames.length == 1) {
                    frames = data.split('\0');
                    if (frames.length == 1) {
                        console.error('Unexpected error when receiving data chunk from broker: ' + data, true);
                    }
                }
                frames.pop();

                var frame = null;
                while (frame = frames.shift()) {
                    _this2.handleFrame(new _Frame2.default().parseChunk(frame));
                }
            });

            this.socket.addOnErrorListener(function (error) {
                _this2.emit("socket-error", error);
            });

            this.socket.addOnCloseListener(function (error) {
                _this2.emit("disconnected", error);
            });

            this.socket.connect();
        }
    }, {
        key: "send",
        value: function send(command, headers, body, want_receipt) {
            var frame = new _Frame2.default(command, headers, body, want_receipt);

            if (this.debugMode) console.log('sending frame:\n' + frame.toString());

            if (this.socket.write(frame.toString()) === false) {
                if (this.debugMode) console.log('Write buffered');
            }
        }
    }, {
        key: "disconnect",
        value: function disconnect() {
            this.socket.end();

            if (this.socket.readyState == 'readOnly') {
                this.socket.destroy();
            }

            if (this.debugMode) console.log('disconnect called');
        }
    }, {
        key: "handleFrame",
        value: function handleFrame(frame) {
            switch (frame.command) {
                case _StompGlobals.StompFrameCommands.MESSAGE:
                    if (this.debugMode) console.log('Recived message from broker');
                    this.emit('message', frame);
                    break;
                case _StompGlobals.StompFrameCommands.RECEIPT:
                    if (this.debugMode) console.log('Received receipt');
                    this.emit('receipt', frame);
                    break;
                case _StompGlobals.StompFrameCommands.CONNECTED:
                    if (this.debugMode) console.log('Connected to Stomp broker');
                    this.session = frame.headers['session'];
                    this.emit('connected', frame);
                    break;
                case _StompGlobals.StompFrameCommands.ERROR:
                    console.warn('Received error message');
                    this.emit('error', frame);
                    break;
                default:
                    console.error("Unknown command: " + frame.command, true);
            }
        }
    }]);

    return Stomp;
}(_events.EventEmitter);

exports.default = Stomp;
;