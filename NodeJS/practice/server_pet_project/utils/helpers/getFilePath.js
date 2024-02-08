const path = require('node:path');

function getFilePath(fileName) {
    return path.join(__dirname, '../../public/', fileName);
}

module.exports = getFilePath;