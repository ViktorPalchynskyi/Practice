const fs = require('node:fs');
const path = require('node:path');
const Router = require('koa-router');
const userRouter = require('./user/user.router');
const filesRouter = require('./file/file.router');
const postsRouter = require('./post/post.router');
const oauthRouter = require('./oauth/oauth.router');


const router = new Router({ prefix: '/api/v1' });

const index = fs.readFileSync(path.join(__dirname, '../../../public/index.html'));
router.get('/', (ctx) => {
    ctx.set('content-type', 'text/html');
    ctx.body = index;
});
router.use('/users', userRouter.routes());
router.use('/files', filesRouter.routes());
router.use('/posts', postsRouter.routes());
router.use('/oauth', oauthRouter.routes());

module.exports = router;
