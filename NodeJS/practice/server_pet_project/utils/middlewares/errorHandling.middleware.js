const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger('errorHandling.middleware');

module.exports = async function errorHandling(ctx, next) {
    try {
      await next();
    } catch (err) {
      logger.error('errorHandling - caught exception: [%s]', err)
      if (err.status) {
        ctx.status = err.status;
        ctx.body = { error: err.message };
      } else {
        ctx.status = 500;
        ctx.body = { error: 'Internal server error' };
      }
    }
};