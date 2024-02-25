const Router = require('koa-router');
const { oauth, oauthCallback } = require('@controllers/v1');
const { handleMongooseValidationError } = require('@utils/middlewares');

const oauthRouter = new Router();

oauthRouter
    .get('/oauth_callback/:provider', handleMongooseValidationError, oauthCallback)
    .get('/:provider', oauth);

module.exports = oauthRouter;
