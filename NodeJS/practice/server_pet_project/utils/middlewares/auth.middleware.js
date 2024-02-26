const { Session } = require('@database/v1');

module.exports = async function auth(ctx, next) {
    const token = ctx.cookies.get('token');

    if (!token) {
        await next();
    }

    const session = await Session.findOne({ token }).populate('user');

    if (!session) {
        ctx.throw(401, 'Auth token not valid.');
    }

    session.lastVisit = Date.now();
    await session.save();

    ctx.user = session.user;

    return await next();
};
