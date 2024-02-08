const Router = require('koa-router');
const { getFile } = require('../../controllers/fileController');

const router = new Router();

router
    .get('/', getFile);

module.exports = router;