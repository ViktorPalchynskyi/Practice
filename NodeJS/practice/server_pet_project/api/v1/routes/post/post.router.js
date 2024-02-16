const Router = require('koa-router');
const { getPost } = require('@controllers/v1');

const router = new Router();

router
    .get('/:id', getPost);

module.exports = router;