const Router = require('koa-router');
const userRouter = require('./user/user.router');

const router = new Router();

router.use('/users', userRouter.routes());

module.exports = router;