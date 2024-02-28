const Router = require('koa-router');
const { createProducts, getOrdersList, checkout } = require('@controllers/v1');
const { handleMongooseValidationError, auth } = require('@utils/middlewares');

const router = new Router();

router.use(auth);

router
    .get('/create/products', createProducts)
    .get('/', handleMongooseValidationError, getOrdersList)
    .post('/', handleMongooseValidationError, checkout);

module.exports = router;
