'use strict';

var _StompClient = require('../../src/stomp-client/StompClient');

var _StompClient2 = _interopRequireDefault(_StompClient);

var _Environment = require('../../src/stomp-client/environment/Environment');

var _Environment2 = _interopRequireDefault(_Environment);

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Stomp client testing', function () {

    // TODO: Add acquiring token from server
    var token = '...';
    var secureConnection = true;
    var host = 'connect-testing.secupay-ag.de';
    var debugMode = true;

    var reply_to = '/temp-queue/main';
    var correlation_id = '5687785';
    var base_destination = '/exchange/connect.api/api:get:Payment.Customers';
    var content_type = 'application/json';
    var ack = 'client-individual';

    var client = null;

    describe('Stomp on browser environment', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var env;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        env = new _Environment2.default().BROWSER;


                        beforeAll(function () {
                            client = new _StompClient2.default(token, secureConnection, host, env, debugMode);
                        });

                        test('mytest', function (done) {
                            client.setConnectedListener(function (frame) {
                                expect(frame.command).toBe('CONNECTED');
                                done();
                            });

                            client.connect();
                        });

                        test('mytest', function (done) {
                            client.setMessageListener(function (frame) {
                                expect(frame.command).toBe('MESSAGE');
                                done();
                            });

                            client.sendMessage(base_destination, {
                                'content-type': content_type,
                                'reply-to': reply_to,
                                'user-id': token,
                                'correlation-id': correlation_id,
                                'ack': ack
                            });
                        });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));

    describe('Stomp on node environment', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var env;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        env = new _Environment2.default().NODE;


                        beforeAll(function () {
                            client = new _StompClient2.default(token, secureConnection, host, env, debugMode);
                        });

                        test('mytest', function (done) {
                            client.setConnectedListener(function (frame) {
                                expect(frame.command).toBe('CONNECTED');
                                done();
                            });

                            client.connect();
                        });

                        test('mytest', function (done) {
                            client.setMessageListener(function (frame) {
                                expect(frame.command).toBe('MESSAGE');
                                done();
                            });

                            client.sendMessage(base_destination, {
                                'content-type': content_type,
                                'reply-to': reply_to,
                                'user-id': token,
                                'correlation-id': correlation_id,
                                'ack': ack
                            });
                        });

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    })));
});