const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config({
    path: path.join(__dirname, '../', '.env'),
});

const uri = {
    development: process.env.MONGODB_DEVELOP_URI,
    test: process.env.MONGODB_TEST_URI,
    production: process.env.MONGODB_PRODUCTION_URI,
};

module.exports = {
    mongodb: {
        uri: uri[process.env.NODE_ENV],
    },
    server: {
        port: 3000,
    },
    crypto: {
        iterations: process.env.NODE_ENV === 'test' ? 1 : 12000,
        length: 128,
        digest: 'sha512',
    },
    app: {
        nodeEnv: process.env.NODE_ENV,
    },
    logger: {
        maxFileSize: process.env.LOGGER_MAX_FILE_SIZE,
        maxLiveTime: process.env.LOGGER_MAX_LIVE_TIME,
        datePattern: process.env.LOGGER_DATE_PATTERN,
        level: process.env.LOGGER_LEVEL,
    },
    providers: {
        github: {
            appId: process.env.GITHUB_APP_ID || 'github_app_id',
            appSecret: process.env.GITHUB_APP_SECRET || 'github_app_secret',
            callbackURI: 'http://localhost:3000/api/v1/oauth/oauth_callback/github',
            options: {
                scope: ['user:email'],
            },
        },
    },
    mailer: {
        user: 'palchinskij19@gmail.com',
        password: 'sasi hbzc wjcs qkdk',
    }
};
