const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger('logger.middleware');

async function loggerMiddleware(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;

    logger.info('(%s) %s - %sms', ctx.method, ctx.url, ms);
}

module.exports = loggerMiddleware;