const http = require('node:http');
const ReplacerStream = require('./replacer');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');
    console.log(url);
    console.log(url.searchParams.get('from'));
    console.log(url.searchParams.get('to'));
    const replacer = new ReplacerStream({
        from: url.searchParams.get('from'),
        to: url.searchParams.get('to'),
    });

    // req.on('data', chunk => {
    //     replacer.write(chunk);
    // });

    // replacer.on('data', chunk => res.write(chunk));

    req.pipe(replacer).pipe(res);
});

server.listen(3000);