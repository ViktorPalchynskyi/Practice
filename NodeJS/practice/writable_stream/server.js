const fs = require('node:fs');
const http = require('node:http');

const server = new http.Server();
const port = 3000;

server.on('request', (req, res) => {
   const stream = fs.createReadStream('video.mp4');
   
//    stream.on('data', chunk => {
//     const ret = res.write(chunk);
    
//     if (!ret) {
//         stream.pause();
//         res.once('drain', () => {
//             stream.resume();
//         });
//     }
//    });
//    stream.on('end', () => res.end());
    stream.pipe(res); 
    stream.on('error', error => {
        if (error.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('file not found');
        } else {
        res.statusCode = 500;
        res.end('something went wrong');
        }
    });
    stream.on('open', () => console.log('open'));
    stream.on('close', () => console.log('close'));

    // If internet connection was aborted.
    req.on('aborted', () => {
        stream.destroy();
    });
});

server.listen(port, () => console.log(`Server started on port: ${port}`));