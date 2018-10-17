'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var StompFrameCommands = exports.StompFrameCommands = {
    CONNECTED: 'CONNECTED',
    MESSAGE: 'MESSAGE',
    RECEIPT: 'RECEIPT',
    ERROR: 'ERROR'
};

var Environments = exports.Environments = {
    NODE: 'NODE',
    BROWSER: 'BROWSER'
};

var ResponseStatus = exports.ResponseStatus = {
    ok: 'ok',
    error: 'error'
};