'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frame = function () {
    function Frame(command, headers, body, want_receipt) {
        _classCallCheck(this, Frame);

        this.command = command || '';
        this.headers = headers || {};
        this.body = body || '';

        if (want_receipt) {
            this.headers['receipt'] = Math.floor(Math.random() * 99999999999).toString() + this.headers['session'] ? "-" + this.headers['session'] : '';
        }
    }

    _createClass(Frame, [{
        key: 'toString',
        value: function toString() {
            var frame = this.command + "\n";

            for (var key in this.headers) {
                frame += key + ':' + this.headers[key] + '\n';
            }

            if (this.body) {
                frame += '\n' + body;
            }

            return frame + '\n\x00';
        }
    }, {
        key: 'parseChunk',
        value: function parseChunk(chunk) {
            chunk = chunk.toString('utf8', 0, chunk.length);

            this.command = chunk.split('\n')[0];
            chunk = chunk.slice(this.command.length + 1, chunk.length).split('\n\n');

            var headers_split = chunk[0].split('\n');
            for (var i = 0; i < headers_split.length; i++) {
                var header = headers_split[i].split(':');
                if (header.length > 1) {
                    this.headers[header[0].trim()] = header[1].trim();
                }
            }
            this.headers['bytes_message'] = 'content-length' in this.headers;

            this.body = chunk.slice(1, chunk.length);

            return this;
        }
    }]);

    return Frame;
}();

exports.default = Frame;
;