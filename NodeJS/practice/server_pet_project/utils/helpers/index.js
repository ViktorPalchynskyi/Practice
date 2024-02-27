const addExtentionToFileName = require('./addExtentionToFileName');
const getFilePath = require('./getFilePath');
const { generatePassword, generateSalt } = require('./hash');
const getTestingTools = require('./getTestingTools');
const mapUserDocument = require('./mapUserDocument');
const getPugTemplate = require('./getPugTemplate');

module.exports = {
    addExtentionToFileName,
    getFilePath,
    generatePassword,
    generateSalt,
    getTestingTools,
    mapUserDocument,
    getPugTemplate,
};
