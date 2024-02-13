const { connctDB, config } = require('@config');
const port = config.server.port;
const app = require('./app');

app.listen(port, () => {
    connctDB();
    console.log(`Server running on port: ${port}`);
});