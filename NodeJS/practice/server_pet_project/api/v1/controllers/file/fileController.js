const fs = require('node:fs');
const { addExtentionToFileName, getFilePath } = require('@utils/helpers');
const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger(`api:v1:controllers:file:${require('node:path').basename(__filename)}`);

async function getFile(ctx) {
    try {
        const { fileName } = ctx.query;
        const filePath = getFilePath(addExtentionToFileName(fileName));

        if (!fs.existsSync(filePath)) {
            ctx.throw(409, 'File is not exist.');
        }

        const readStream = fs.createReadStream(filePath);

        readStream.on('open', (chunk) => logger.debug('getFile - Stream opended %s', chunk));
        readStream.on('data', (chunk) => logger.debug('getFile - Data %s', chunk));
        readStream.on('error', (error) => logger.error('getFile error - caught exception: %s', error));
        readStream.on('end', () => logger.debug('getFile - Stream end'));

        ctx.body = readStream;
    } catch (error) {
        logger.error('getFile error - caught exception: %s', error);
    }
}

async function createFile(ctx) {
    try {
        const { fileName, text } = ctx.request.body;
        const filePath = getFilePath(addExtentionToFileName(fileName));

        if (fs.existsSync(filePath)) {
            logger.warn('createFile - File already exist: %s', filePath)
            ctx.throw(409, 'File already exist.');
        }

        const writeStream = fs.createWriteStream(filePath, { flags: 'w' });

        writeStream.write(text);
        writeStream.end();

        ctx.body = { message: `File was created.` };
    } catch (error) {
        logger.error('getFile error - caught exception: %s', error);
    }
}

module.exports = { 
    getFile,
    createFile,
 };