const Koa = require('koa');
const bodyParseer = require('koa-bodyparser');
const router = require('./api/v1/routes');

const app = new Koa();

app.use(bodyParseer());
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status) {
        ctx.status = err.status;
        ctx.body = {error: err.message};
        } else {
        console.error(err);
        ctx.status = 500;
        ctx.body = {error: 'Internal server error'};
        }
    }
});
app.use(router.routes())

module.exports = app;