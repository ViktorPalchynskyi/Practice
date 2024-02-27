const Router = require('koa-router');
const { register, confirm } = require('@controllers/v1');
const { handleMongooseValidationError, auth } = require('@utils/middlewares');

const router = new Router();

router.use(auth);

router
    .post('/register', handleMongooseValidationError, register)
    .get('/confirm/:verificationToken', handleMongooseValidationError, confirm);

module.exports = router;
