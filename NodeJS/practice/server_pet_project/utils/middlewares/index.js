const errorHandlingMiddleware = require('./errorHandling.middleware');
const loggerMiddleware = require('./logger.middleware');
const handleMongooseValidationError = require('./validateMongoErrors.middleware');
const checkFileName = require('./checkFileName');

module.exports = {
    errorHandlingMiddleware,
    loggerMiddleware,
    handleMongooseValidationError,
    checkFileName,
};
