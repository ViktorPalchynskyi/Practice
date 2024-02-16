const axios = require('axios');
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});
const Logging = require('@utils/logging');
const logger = Logging.getInstance().registerLogger(`api:v1:controllers:posts:${require('node:path').basename(__filename)}`);

async function getPost(ctx) {
    try {
        const { id } = ctx.params;
        const res = await request({
            method: 'get',
            url: `/posts/${id}`,
        });
        const post = res.data;

        ctx.body = post;
    } catch (error) {
        logger.error('getPost error - caught exception: %s', error);
        throw error;
    }
}

module.exports = {
    getPost,
};
