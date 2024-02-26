const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./api/v1/routes');
const { errorHandlingMiddleware, loggerMiddleware, loginSession } = require('@utils/middlewares');

const app = new Koa();

app.use(bodyParser());
app.use(loggerMiddleware);
app.use(errorHandlingMiddleware);
app.use(loginSession);
app.use(router.routes());
app.on('error', (err, ctx) => {
    console.error('Server error', err, ctx);
});

module.exports = app;
