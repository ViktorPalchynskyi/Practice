const fs = require('node:fs');
const zlib = require('node:zlib');
const stream = require('node:stream');

const streamIn = fs.createReadStream('hello.txt'); // Readable
const streamOut = fs.createWriteStream('hello3.png.gz'); // Writable
const gzip = zlib.createGzip(); // Tranform
// steram.write('Ohayou, Sekai!');
// steram.on('error', error => console.error(error));
// steram.end('Boku wa Bikutoru desu!');

// streamIn.on('data', chunk => {
//     gzip.write(chunk);
// });

// gzip.on('data', chunk => {
//     streamOut.write(chunk);
// });

// streamIn.on('end', () => {
//     gzip.end();
// });

// gzip.on('end', () => {
//     streamOut.end('compration finished');
// });

// streamIn.pipe(gzip).pipe(streamOut);
stream.pipeline(streamIn, gzip, streamOut, (err) => {
    if (err) console.error(err);
    else console.log('all done');
});