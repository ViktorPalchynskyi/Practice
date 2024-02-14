const { connect, disconnect } = require('mongoose');
const config = require('./config');

async function connctDB() {
    try {
        await connect(config.mongodb.uri);
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
        process.exit[1];
    }
}

async function disconnectDB() {
    try {
        await disconnect();
    } catch (error) {
        console.error(`MongoDB disconnection error: ${error}`);
        process.exit[1];
    }
}

module.exports = { connctDB, disconnectDB };
