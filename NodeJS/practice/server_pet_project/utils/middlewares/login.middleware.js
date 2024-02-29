const { v4: uuid } = require('uuid');
const { Session } = require('@database/v1');

module.exports = async function loginSession(ctx, next) {
    ctx.login = async (user) => {
        const token = uuid();

        await Session.create({ token, lastVisit: Date.now(), user: user.id });
        ctx.cookies.set('token', token, { httpOnly: false, maxAge: 1000 * 60 * 60 * 24, path: '/api' });
     
        return token;
    };

    await next();
};
