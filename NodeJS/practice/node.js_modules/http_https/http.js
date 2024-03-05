const http = require('node:http');
const Agent = new http.Agent({ keepAlive: true });

console.log(Agent);

const server = http.createServer((req, res) => {
    console.log(`Response status: ${res.statusCode}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!');
});

server.listen(3000, () => {
    console.log('Server started on localhost:3000');
});

const options = {
    hostname: 'localhost',
    port: 3000, // Замените на ваш порт
    path: '/',
    method: 'GET',
};

const req = http.request(options, (res) => {
    console.log(`Res status: ${res.statusCode}`);
    res.pipe(process.stdout);
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
