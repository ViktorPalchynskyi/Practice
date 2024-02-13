const addExtentionToFileName = require('./addExtentionToFileName');
const getFilePath = require('./getFilePath');
const { generatePassword, generateSalt } = require('./hash');
const getTestingTools = require('./getTestingTools');
const mapUserDocument = require('./mapUserDocument');

module.exports = {
    addExtentionToFileName,
    getFilePath,
    generatePassword,
    generateSalt,
    getTestingTools,
    mapUserDocument,
};
