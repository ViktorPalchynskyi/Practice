const Router = require('koa-router');
const userRouter = require('./user/user.router');

const router = new Router({ prefix: '/api/v1' });

router.use('/users', userRouter.routes());

module.exports = router;