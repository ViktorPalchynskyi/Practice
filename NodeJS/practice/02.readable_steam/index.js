const { error } = require('node:console');
const fs = require('node:fs');
const http = require('node:http');

const server = new http.Server(); 
const port = 3000;

// server.on('request', async (req, res) => {
//     // fs.readFile('video.mp4', (err, content) => {
//     //     res.end(content);
//     // });
//     const stream = fs.createReadStream('video.mp4');
//     const txtStream = fs.createReadStream('text.txt', { 
//         encoding: 'utf8',
//         highWaterMark: 5,
//      });
//     //  txtStream.setEncoding('utf8');
//     // stream.pipe(res); 
//     // stream.on('data', (chunk) => console.log(chunk));
//     // stream.on('end', () => console.log('end'));
//     // stream.on('error', (error) => console.error(error.message));
//     // stream.on('close', () => console.log('close'));
//     // stream.on('open', () => console.log('open'));
//     // try {
//     //     for await (const chunk of stream) {
//     //         console.log(chunk);
//     //     }
//     // } catch (error) {
//     //     console.error('error');
//     // }
//     txtStream.on('data', (chunk) => console.log(chunk));
//     txtStream.on('end', () => console.log('end'));
//     txtStream.on('error', (error) => console.error(error.message));
// });


// const content = fs.readFileSync('text.txt', {
//     encoding: 'utf-8',
// });
// console.log(content);

let str = '';
const body = [];
const txtStream = fs.createReadStream('example.png', { 
    // encoding: 'utf8',
    // highWaterMark: 9,
 });
txtStream.on('data', (chunk) => { 
    console.log(chunk);
    body.push(chunk);
    str +=chunk;
});
txtStream.on('end', () => {
    const fullBody = Buffer.concat(body);
    console.log('end', fullBody.toString('base64'));
});
txtStream.on('error', (error) => console.error(error.message));

// server.listen(port, () => console.log(`Server started on port ${port}`));