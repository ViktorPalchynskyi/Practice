const Router = require('koa-router');
const { getAllUsers, createUser, login } = require('@controllers/v1');

const router = new Router();

router
    .get('/all', getAllUsers)
    .post('/login', login)
    .post('/create', createUser);


module.exports = router;