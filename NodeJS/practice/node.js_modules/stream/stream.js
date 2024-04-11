const path = require('node:path');
const fs = require('node:fs');
const { Transform } = require('node:stream');

const filePath = (fileName) => path.join(__dirname, fileName);
const toUpperCase = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})
const readStream = fs.createReadStream(filePath('test.txt'));
const writeStream = fs.createWriteStream(filePath('copy.txt'));

readStream.pipe(toUpperCase).pipe(writeStream);

