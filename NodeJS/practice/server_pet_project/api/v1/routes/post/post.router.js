const Router = require('koa-router');
const { getPost, getAllPosts, createPost } = require('@controllers/v1');

const router = new Router();

router
    .post('/create', createPost)
    .get('/all', getAllPosts)
    .get(
        '/:id',
        async (ctx, next) => {
            ctx.state = {
                name: 'Vincent',
                surname: 'Palmer',
            };

            await next();
        },
        getPost
    );

module.exports = router;
