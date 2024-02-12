module.exports = class LimitExceededError extends Error {
    constructor(limit) {
        super(`File is too large. The maximum file size is ${limit} Bait.`);

        this.name = this.constructor.name;
        this.code = 'LIMIT_EXCEEDED';
        Error.captureStackTrace(this, this.constructor);
    }
};
