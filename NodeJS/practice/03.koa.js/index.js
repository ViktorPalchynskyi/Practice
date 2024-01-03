const fs = require('node:fs');
const path = require('node:path');

const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();
const port = 3000;

// app.use(bodyparser());

app.use(serve(path.join(__dirname, 'public')))
app.use(router.routes());

router.get('/', async (ctx, next) => {
    ctx.body = 'Main page';
});

router.post('/', bodyparser(),  async (ctx, next) => {
    ctx.body = `hello ${ctx.request.body.name}`;
});

router.get('/status', (ctx) => {
    ctx.body = 'ready';
});


// router.get('/index.html', (ctx) => {
//     ctx.set('content-type', 'text/html');
//     ctx.body = fs.createReadStream(path.join(__dirname, 'public/index.html'));
// });



// app.use(async (ctx, next) => {
//     const request_start_time = Date.now();
//     console.log('incoming request', ctx.url, ctx.header['user-agent']);
//     /* 
//         To pass some information to other middlewares use ctx.state.{key}
//         It's an empty object by default.
//         I can fetch data from it in another middleware by key. 
//     */  
//     ctx.state.foo = 'bar';

//     // if (ctx.headers['user-agent'].includes('Postman')) {
//     //   ctx.throw(400, 'postman is not allowed');  
//     // }

//     await next();
//     console.log('time spend', Date.now() - request_start_time, ctx.status);
// });

// app.use(async (ctx, next) => {
//     try {
//         await next();
//     } catch (error) {
//         console.log(error);
//         ctx.status = 500;
//         ctx.body = 'internal error';
//     }
// });

// app.use(async (ctx) => {
//     // await new Promise((resolve) => setTimeout(resolve, 1000));
//     ctx.body = ['hello', ctx.request.body.name];
//     // throw new Error('Boom blyat`!');
// });

app.listen(port, () => {
    console.log(`Koa Server started on port: ${port}`);
});