const Router = require('koa-router');
const { getFile, createFile } = require('@controllers/v1');

const router = new Router();

router
    .get('/', getFile)
    .post('/create', createFile);

module.exports = router;