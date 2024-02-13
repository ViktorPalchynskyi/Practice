module.exports = function addExtentionToFileName(fileName) {
    return fileName.includes('.txt') ? fileName : `${fileName}.txt`;
};

