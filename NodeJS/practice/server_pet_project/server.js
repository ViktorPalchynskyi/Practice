const { connctDB, config } = require('@config');
const port = config.server.port;
const app = require('./app');
const socket = require('./socket');

const server = app.listen(port, () => {
    connctDB();
    console.log(`Server running on port: ${port}`);
});

socket(server)