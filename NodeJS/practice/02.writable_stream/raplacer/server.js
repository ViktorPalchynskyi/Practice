const http = require('node:http');
const ReplacerStream = require('./replacer');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');
    const from = url.searchParams.get('from');
    const to  = url.searchParams.get('to');

    if (!from || !to) {
        res.statusCode = 400;
        res.end('bad request: `from` and `to` are mandatory');
    }

    const replacer = new ReplacerStream({
        from,
        to,
    });
    
    req.pipe(replacer).pipe(res);
});

module.exports = server;