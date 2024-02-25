const { v4: uuid } = require('uuid');
// const User = require('@database/v1/user');
const passport = require('@utils/strategies');
const { config } = require('@config');
const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger(`api:v1:controllers:oauth:${require('node:path').basename(__filename)}`);

async function oauth(ctx, next) {
    try {
        const provider = ctx.params.provider;

        await passport.authenticate(provider, config.providers[provider].options)(ctx, next);

        ctx.status = 200;
        ctx.body = { status: 'ok', location: ctx.response.get('location') };
        ctx.response.remove('location');
    } catch (error) {
        logger.error('oauth error - caught exception: %s', error);
        throw error;
    }
}

async function oauthCallback(ctx, next) {
    try {
        const provider = ctx.request.params.provider;

        await passport.authenticate(provider, async (err, user, info) => {
            if (err) throw err;

            if (!user) {
                ctx.status = 400;
                ctx.body = { error: info };
                return;
            }

            const token = uuid();

            ctx.body = { token };
        })(ctx, next);
    } catch (error) {
        logger.error('oauthCallback error - caught exception: %s', error);
        throw error;
    }
}

module.exports = {
    oauth,
    oauthCallback,
};
