const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger('logger.middleware');

module.exports = async function loggerMiddleware(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;

    logger.info('(%s) %s - %sms', ctx.method, ctx.url, ms);
};