const Router = require('koa-router');
const { getAllUsers, createUser, login, countSurnames, me } = require('@controllers/v1');
const { handleMongooseValidationError, auth } = require('@utils/middlewares');

const router = new Router();

router.use(auth);

router
    .get('/all', getAllUsers)
    .get('/surname', countSurnames)
    .get('/me', me)
    .post('/login', login)
    .post('/create', handleMongooseValidationError, createUser);

module.exports = router;
