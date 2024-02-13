const Router = require('koa-router');
const userRouter = require('./user/user.router');
const filesRouter = require('./files/files.router');

const router = new Router({ prefix: '/api/v1' });

router.get('/', (ctx) => {
    ctx.body = 'testing server';
});
router.use('/users', userRouter.routes());
router.use('/files', filesRouter.routes());


module.exports = router;