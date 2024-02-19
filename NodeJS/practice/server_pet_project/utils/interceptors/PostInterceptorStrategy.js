module.exports = class PostInterceptorStrategy {
    configInterceptors(axiosInstence) {
        axiosInstence.interceptors.request.use(
            (config) => {
                config.headers['Authorization'] = 'Bearer token';
                console.log('interceptors request ==>  config.headers', config.headers);

                return config;
            },
            async (error) => {
                console.log('interceptors ==> error', error);

                const res = await request({
                    method: 'get',
                    url: '/posts/1',
                });
                const post = res.data;

                return post;
            }
        );

        axiosInstence.interceptors.response.use(
            (config) => {
                config.state = { isInterceptorWorking: true };
                console.log('interceptors response ==>  config', config.state);

                return config;
            },
            async (error) => {
                console.log('interceptors ==> response error', error.config);

                const res = await request({
                    method: 'get',
                    url: '/posts',
                });
                const post = res.data;

                return post;
            }
        );
    }
};
