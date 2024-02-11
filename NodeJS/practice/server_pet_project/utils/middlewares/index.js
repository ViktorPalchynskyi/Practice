const errorHandlingMiddleware = require('./errorHandling.middleware');
const loggerMiddleware = require('./logger.middleware');
const handleMongooseValidationError = require('./validateMongoErrors.middleware');

module.exports = {
    errorHandlingMiddleware,
    loggerMiddleware,
    handleMongooseValidationError,
};
