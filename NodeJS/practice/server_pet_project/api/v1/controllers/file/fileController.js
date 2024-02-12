const fs = require('node:fs');
const util = require('node:util');

const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

const { addExtentionToFileName, getFilePath } = require('@utils/helpers');
const Logging = require('@utils/logging');
const { LimitSize } = require('@utils/streams');
const { Compression } = require('@utils/streams');
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

        readStream.on('open', (chunk) => logger.debug('getFile - Stream opended => [%s]', chunk));
        readStream.on('data', (chunk) => logger.debug('getFile - Data => [%s]', chunk));
        readStream.on('error', (error) => logger.error('getFile error - caught exception: [%s]', error));
        readStream.on('end', () => logger.debug('getFile - Stream end'));

        ctx.body = readStream;
    } catch (error) {
        logger.error('getFile error - caught exception: %s', error);
        throw error;
    }
}

async function createFile(ctx) {
    const { fileName, text } = ctx.request.body;
    const filePath = getFilePath(addExtentionToFileName(fileName));
    const compressedFilePath = `${filePath}.gz`;

    try {
        if (fs.existsSync(filePath)) {
            logger.warn('createFile - File already exist: [%s]', filePath);
            ctx.status = 409;
            ctx.body = { error: 'File already exist' };
            return;
        }

        await writeFile(filePath, text);

        const writeStream = fs.createWriteStream(compressedFilePath, { flags: 'w' });
        const readStream = fs.createReadStream(filePath);
        const limitSizeStream = new LimitSize({ limit: 30 });
        const comprationStream = new Compression();

        limitSizeStream.pipe(writeStream);
        await new Promise((resolve, reject) => {
            readStream.pipe(comprationStream).pipe(limitSizeStream);
            limitSizeStream.on('error', (error) => {
                logger.error('getFile error - caught exception44: [%s]', error);
                writeStream.end();

                reject(error);
            });
            limitSizeStream.on('finish', resolve);

            ctx.body = { message: 'File was created.' };
        });
    } catch (error) {
        logger.error('getFile error - caught exception: [%s]', error);
        ctx.status = 413;
        unlink(filePath);
        unlink(compressedFilePath);
        ctx.body = { error: error.message };
    }
}

module.exports = {
    getFile,
    createFile,
};
