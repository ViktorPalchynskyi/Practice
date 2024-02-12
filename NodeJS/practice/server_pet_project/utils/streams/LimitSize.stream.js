const { Transform } = require('node:stream');
const { LimitExceededError } = require('@utils/errors');

module.exports = class LimitSize extends Transform {
    constructor(options) {
        super(options);
        this.limit = options.limit;
        this._byteCapacity = 0;
    }

    _transform(chunk, encoding, callback) {
        this._byteCapacity += chunk.byteLength;
        
        if (this._byteCapacity > this.limit) {
            callback(new LimitExceededError(this.limit));
        } else {
            this.push(chunk);
            callback();
        }
    }

    _flash(callback) {
        callback();
    }
};
