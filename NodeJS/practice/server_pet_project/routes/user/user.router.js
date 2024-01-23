const Router = require('koa-router');
const { getAllUsers, createUser } = require('../../controllers/userController');

const router = new Router();

router
    .get('/all', getAllUsers)
    .get('/auth', (ctx) => {
        console.log('User authenicated');

        ctx.body = 'authenicated';
    })
    .post('/create', createUser);


module.exports = router;