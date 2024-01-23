const Koa = require('koa');
const connectDB = require('./utils/db');
const bodyParseer = require('koa-bodyparser');
const config = require('./config');
const router = require('./routes');

const app = new Koa();
const port = config.server.port;

app.use(bodyParseer());
app.use(router.routes())


app.on('request', () => console.log('request'));

app.listen(port, () => {
    connectDB();
    console.log(`Server running on port: ${port}`);
});