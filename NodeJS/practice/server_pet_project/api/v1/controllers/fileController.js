const fs = require('node:fs');
const { addExtentionToFileName, getFilePath } = require('../../../utils/helpers');

async function getFile(ctx) {
    const { fileName } = ctx.query;
    const filePath = getFilePath(addExtentionToFileName(fileName));

    if (!fs.existsSync(filePath)) {
        ctx.throw(409, 'File is not exist.');
    }

    const readStream = fs.createReadStream(filePath);

    readStream.on('open', (chunk) => console.log('Stream opended', chunk));
    readStream.on('data', (chunk) => console.log('Data', chunk));
    readStream.on('error', (error) => console.error('Error', error));
    readStream.on('end', () => console.log('Stream end'));

    ctx.body = readStream;
}

async function createFile(ctx) {
    const { fileName, text } = ctx.request.body;
    const filePath = getFilePath(addExtentionToFileName(fileName));

    if (fs.existsSync(filePath)) {
        ctx.throw(409, 'File already exist.');
    }

    const writeStream = fs.createWriteStream(filePath, { flags: 'w' });

    writeStream.write(text);
    writeStream.end();

    ctx.body = { message: `File was created.` };
}

module.exports = { 
    getFile,
    createFile,
 };