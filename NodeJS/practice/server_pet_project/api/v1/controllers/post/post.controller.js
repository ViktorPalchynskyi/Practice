const axios = require('axios');
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});
const Logging = require('@utils/logging');
const logger = Logging.getInstance().registerLogger(`api:v1:controllers:posts:${require('node:path').basename(__filename)}`);
const { setPostInterseptor } = require('@utils/interceptors');

setPostInterseptor(request);

async function getPost(ctx) {
    try {
        logger.info('getPost ctx - state: %s', ctx.state);
        logger.info('getPost ctx - ip: %s', ctx.ip);
        logger.info('getPost ctx - is: %s', ctx.is('json', 'urlencoded'));
        const { name, surname } = ctx.state;
        const { id } = ctx.params;
        const res = await request({
            method: 'get',
            url: `/posts/${id}`,
        });
        const post = res.data;
        ctx.cookies.set('name', name, {
            maxAge: 1000 * 60 * 5,
            // secure: true,
            httpOnly: true,
            // domain: 'localhost:3000',
            sameSite: 'lax',
        });
        // const params = new URLSearchParams({ name, surname });
        // ctx.redirect(`/api/v1/users/all?${params}`);
        // Math.round(Math.random() * 10) > 5 && ctx.throw(400, 'random error');
        // ctx.assert(Math.round(Math.random() * 10) > 2, 'another random error');
        // ctx.attachment('file.txt');
        // ctx.set('X-Custom-Header', 'text');

        ctx.body = post;
    } catch (error) {
        logger.error('getPost error - caught exception: %s', error);
        throw error;
    }
}

async function getAllPosts(ctx) {
    try {
        const res = await request({
            method: 'get',
            url: '/posts',
        });
        const posts = res.data;
        const name = ctx.cookies.get('name', {
            // secure: true,
        });
        // logger.info('getAllPosts ctx.cookies.get - name: %s', name);
        // logger.info('getAllPosts ctx - request.header: %s', ctx.request.header);
        // logger.info('getAllPosts ctx - request.url: %s', ctx.request.url);
        // logger.info('getAllPosts ctx - request.method: %s', ctx.request.method);
        // logger.info('getAllPosts ctx - request.path: %s', ctx.request.path);
        // logger.warn('getAllPosts ctx - request.query: %s', ctx.request.query);
        // logger.info('getAllPosts ctx - request.querystring: %s', ctx.request.querystring);
        // logger.warn('getAllPosts ctx - request.body: %s', ctx.request.body);
        // logger.info('getAllPosts ctx - request.get: %s', ctx.request.get('Accept-Encoding'));
        // logger.warn('getAllPosts ctx - request.length: %s', ctx.request.length);
        // logger.info('getAllPosts ctx - request.origin: %s', ctx.request.origin);
        // logger.warn('getAllPosts ctx - request.href: %s', ctx.request.href);
        // logger.info('getAllPosts ctx - request.protocol: %s', ctx.request.protocol);
        // logger.warn('getAllPosts ctx - request.host: %s', ctx.request.host);
        // logger.info('getAllPosts ctx - request.hostname: %s', ctx.request.hostname);
        // logger.warn('getAllPosts ctx - request.secure: %s', ctx.request.secure);
        // logger.info('getAllPosts ctx - request.ip: %s', ctx.request.ip);
        // logger.warn('getAllPosts ctx - request.agent: %s', ctx.request.agent);
        // logger.info('getAllPosts ctx - request.ips: %s', ctx.request.ips);
        // logger.warn('getAllPosts ctx - request.subdomains: %s', ctx.request.subdomains);
        // logger.warn('getAllPosts ctx - agent: %s', ctx.get('User-Agent'));

        ctx.body = posts;
    } catch (error) {
        logger.error('getAllPosts error - caught exception: %s', error);
        throw error;
    }
}

async function createPost(ctx) {
    try {
        const data = ctx.request.body;
        const res = await request.post('/posts', {
            data,
            headers: {
                'Content-Type': 'application/json',
            },
            transformRequest: [(data, headers) => {
                console.log('transformRequest ==> data, headers', data, headers);
            }], 
            transformResponse: [data => {
                console.log('transformResponse ==> data', data);
                data.someThing = 'some';
                
                return data;
            }],
            adapter: config => {
                return new Promise((resolve) => {
                    const some = { to: 'do', la: 'ra', chiki: 'briki' };
                    
                    console.log('here', some);
                    resolve(some);
                });
            }
        });
        // const res = await axios({
        //     method: 'post',
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     data,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     transformRequest: [(data, headers) => {
        //         console.log('transformRequest ==> data, headers', data, headers);
        //     }], 
        //     transformResponse: [data => {
        //         console.log('transformResponse ==> data', data);
                
        //         return data;
        //     }],
        //     adapter: config => {
        //         return new Promise((resolve) => {
        //             const some = { to: 'do', la: 'ra', chiki: 'briki' };
                    
        //             console.log('here', some);
        //             resolve(some);
        //         });
        //     }
        // });
        console.log(res?.data);
        const post = res?.data?.data;
        // logger.warn('createPost ctx - response.headerSent: %s', res.state);
        ctx.response.lastModified = new Date();
        ctx.body = post;
    } catch (error) {
        logger.error('createPost error - caught exception: %s', error);
        throw error;
    }
}

module.exports = {
    getPost,
    getAllPosts,
    createPost,
};
