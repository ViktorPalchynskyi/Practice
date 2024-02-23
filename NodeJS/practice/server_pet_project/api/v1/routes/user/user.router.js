const Router = require('koa-router');
const { getAllUsers, createUser, login, countSurnames } = require('@controllers/v1');
const { handleMongooseValidationError } = require('@utils/middlewares');

const router = new Router();

router
    .get('/all', getAllUsers)
    .get('/surname', countSurnames)
    .post('/login', login)
    .post('/create', handleMongooseValidationError, createUser);

module.exports = router;
