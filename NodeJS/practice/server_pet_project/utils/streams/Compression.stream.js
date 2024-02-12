const { Transform } = require('node:stream');
const zlib = require('node:zlib');

module.exports = class Compression extends Transform {
    constructor() {
        super();
        this.compression = zlib.createGzip();
        this.compression.on('data', (chunk) => this.push(chunk));
    }

    _transform(chunk, encoding, callback) {
        this.compression.write(chunk);
        callback();
    }

    _flush(callback) {
       this.compression.end();
       this.compression.on('finish', callback)
    }
};
