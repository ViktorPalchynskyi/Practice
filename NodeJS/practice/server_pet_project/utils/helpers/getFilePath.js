const path = require('node:path');

module.exports = function getFilePath(fileName) {
    return path.join(__dirname, '../../public/', fileName);
};
