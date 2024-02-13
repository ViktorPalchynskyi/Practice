const Router = require('koa-router');
const { getFile, createFile } = require('@controllers/v1');
const { checkFileName } = require('@utils/middlewares');

const router = new Router();

router
    .get('/',checkFileName, getFile)
    .post('/create',checkFileName, createFile);

module.exports = router;
