const path = require('path');
const pug = require('pug');

module.exports = function getPugTemplate({ template, locals }) {
    return pug.renderFile(path.join(__dirname, '../templates', template) + '.pug', locals || {});
};
