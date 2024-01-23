const Koa = require('koa');
const connectDB = require('./utils/db');
const bodyParseer = require('koa-bodyparser');
const config = require('./config');
const router = require('./routes');

const app = new Koa();
const port = config.server.port;

app.use(bodyParseer());
app.use(router.routes())
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

app.on('request', () => console.log('request'));

app.listen(port, () => {
    connectDB();
    console.log(`Server running on port: ${port}`);
});