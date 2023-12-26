const stream = require('node:stream');

class ReplacerStream extends stream.Transform {
    constructor({ from, to }) {
        super();
        this.from = from;
        this.to = to;
    }

    _transform(chunk, encoding, callback) {
        callback(null, chunk.toString().replaceAll(this.from, this.to));
    }
}

module.exports = ReplacerStream;

const replacer = new ReplacerStream({
    from: 'apple',
    to: 'avacado'
});

replacer.on('data', chunk => {
    console.log(chunk.toString('utf-8'));
});

replacer.write('apple watermelon orange banana')