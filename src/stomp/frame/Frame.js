export default class Frame {

    constructor(command, headers, body, want_receipt) {
        this.command = command || '';
        this.headers = headers || {};
        this.body = body || '';

        if (want_receipt) {
            this.headers['receipt'] = Math.floor(Math.random() * 99999999999).toString() +
                (this.headers['session']) ? "-" + this.headers['session'] : '';
        }
    };

    toString() {
        let frame = this.command + "\n";

        for (let key in this.headers) {
            frame += key + ':' + this.headers[key] + '\n';
        }

        if (this.body) {
            frame += '\n' + this.body;
        }

        return frame + '\n\x00';
    }

    parseChunk(chunk) {
        chunk = chunk.toString('utf8', 0, chunk.length);

        this.command = chunk.split('\n')[0];
        chunk = chunk.slice(this.command.length + 1, chunk.length).split('\n\n');

        let headers_split = chunk[0].split('\n');
        for (let i = 0; i < headers_split.length; i++) {
            let header = headers_split[i].split(':');
            if (header.length > 1) {
                this.headers[header[0].trim()] = header[1].trim();
            }
        }
        this.headers['bytes_message'] = 'content-length' in this.headers;

        this.body = chunk.slice(1, chunk.length);

        return this;
    };
};