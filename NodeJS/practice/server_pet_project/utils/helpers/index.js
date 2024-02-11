const addExtentionToFileName = require('./addExtentionToFileName');
const getFilePath = require('./getFilePath');
const { generatePassword, generateSalt } = require('./hash');

module.exports = {
    addExtentionToFileName,
    getFilePath,
    generatePassword,
    generateSalt,
};
