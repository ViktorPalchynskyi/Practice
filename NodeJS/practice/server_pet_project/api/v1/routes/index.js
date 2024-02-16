const Router = require('koa-router');
const userRouter = require('./user/user.router');
const filesRouter = require('./file/file.router');
const postsRouter = require('./post/post.router');

const router = new Router({ prefix: '/api/v1' });

router.get('/', (ctx) => {
    ctx.body = 'testing server';
});
router.use('/users', userRouter.routes());
router.use('/files', filesRouter.routes());
router.use('/posts', postsRouter.routes());

module.exports = router;