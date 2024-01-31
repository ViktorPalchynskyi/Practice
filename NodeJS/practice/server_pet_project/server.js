const connectDB = require('./config/db');
const config = require('./config/config');
const port = config.server.port;
const app = require('./app');


app.listen(port, () => {
    connectDB();
    console.log(`Server running on port: ${port}`);
});