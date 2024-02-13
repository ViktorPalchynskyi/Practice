const { connect } = require('mongoose');
const config = require('./config');

async function connctDB() {
    try {
        await connect(config.mongodb.uri);

        console.log('MongoDB connected');
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
        process.exit[1];
    }
}

module.exports = connctDB;