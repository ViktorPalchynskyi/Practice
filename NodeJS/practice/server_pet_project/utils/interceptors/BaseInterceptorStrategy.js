const Logging = require('@utils/logging');
const logger = Logging.getInstance().registerLogger(`utils:interceptors:${require('node:path').basename(__filename)}`);


module.exports = class BaseInterceptorStrategy {
    configInterceptors(axiosInstence) {
        axiosInstence.interceptors.request.use(
            (config) => {
                config.headers['Content-Type'] = 'application/json';
                logger.info('BaseInterceptorStrategy - request config [%s]', config);

                return config;
            },
            async (error) => {
                logger.info('BaseInterceptorStrategy - request error [%s]', error);

                return Promise.reject(error);
            }
        );

        axiosInstence.interceptors.response.use(
            (config) => {
                config.headers['Content-Type'] = 'application/json';
                logger.info('BaseInterceptorStrategy - response config [%s]', config);

                return config;
            },
            async (error) => {
               logger.info('BaseInterceptorStrategy - response error [%s]', error);

                return Promise.reject(error);
            }
        );
    }
};
