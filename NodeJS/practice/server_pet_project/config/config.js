const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config({
    path: path.join(__dirname, '../', '.env')
});


module.exports = {
    mongodb: {
        uri: (process.env.NODE_ENV === 'development') ? 
        process.env.MONGODB_DEVELOP_URI :
        process.env.MONGODB_PRODUCTION_URI,
    },
    server: {
        port: 3000,
    },
    crypto: {
        iterations: (process.env.NODE_ENV === 'test' ? 1 : 12000),
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
    }
};