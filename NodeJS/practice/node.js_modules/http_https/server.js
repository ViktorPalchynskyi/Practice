const http = require('node:http');
const { StringDecoder } = require('string_decoder');

const port = 3000;

const server = http.createServer((req, res) => {
    const method = req.method.toUpperCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();
        console.log(req.url);
        if (req.url.match(/^\/message$/) && method === 'POST') {
            try {
                const body = JSON.parse(buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: `Mesage is ${body.message} recieved` }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Wrong message format.' }));
            }
        } else if (req.url.match(/^\/message$/) && method === 'GET') {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Set-Cookie': 'sessionId=12345; HttpOnly'
            });

            res.end(JSON.stringify({ message: 'This is youre message' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Not found.' }));
        }
    })
});

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})