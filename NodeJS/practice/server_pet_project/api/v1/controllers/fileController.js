const fs = require('node:fs');
const path = require('node:path');

async function getFile(ctx) {
    const { fileName } = ctx.query;
    const filepath = path.join(__dirname, '../../../public/', fileName);
    const readStream = fs.createReadStream(filepath);

    readStream.on('open', (chunk) => console.log('Stream opended', chunk));
    readStream.on('data', (chunk) => console.log('Data', chunk));
    readStream.on('error', (error) => console.error('Error', error));
    readStream.on('end', () => console.log('Stream end'));

    ctx.body = readStream;
}

module.exports = { 
    getFile,
 };