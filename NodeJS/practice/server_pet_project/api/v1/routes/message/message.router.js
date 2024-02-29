const Router = require('koa-router');
const { messageList } = require('@controllers/v1');
const { auth } = require('@utils/middlewares');

const router = new Router();

router.use(auth);

router.get('/all', messageList);

module.exports = router;
