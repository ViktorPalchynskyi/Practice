const Koa = require('koa');
const bodyParseer = require('koa-bodyparser');
const router = require('./api/v1/routes');
const { errorHandlingMiddleware } = require('@utils/middlewares');

const app = new Koa();

app.use(bodyParseer());
app.use(errorHandlingMiddleware);
app.use(router.routes());
app.on('error', (err, ctx) => {
    console.error('Server error', err, ctx);
});

module.exports = app;