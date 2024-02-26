const errorHandlingMiddleware = require('./errorHandling.middleware');
const loggerMiddleware = require('./logger.middleware');
const handleMongooseValidationError = require('./validateMongoErrors.middleware');
const checkFileName = require('./checkFileName.middleware');
const loginSession = require('./login.middleware');
const auth = require('./auth.middleware');

module.exports = {
    errorHandlingMiddleware,
    loggerMiddleware,
    handleMongooseValidationError,
    checkFileName,
    loginSession,
    auth,
};
