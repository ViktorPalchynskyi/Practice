const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config({
    path: path.join(__dirname, './', '.env')
});


module.exports = {
    mongodb: {
        uri: (process.env.NODE_ENV === 'development') ? 
        process.env.MONGODB_DEVELOP_URI :
        process.env.MONGODB_PRODUCTION_URI,
    },
    server: {
        port: 3000,
    }
};