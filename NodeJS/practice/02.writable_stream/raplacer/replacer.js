const stream = require('node:stream');

class ReplacerStream extends stream.Transform {
    constructor({ from, to }) {
        super();
        this.from = from;
        this.to = to;
    }

    _transform(chunk, encoding, callback) {
        setTimeout(() => {
            callback(null, chunk.toString().replaceAll(this.from, this.to));
        }, 100);
    }
}

module.exports = ReplacerStream;
