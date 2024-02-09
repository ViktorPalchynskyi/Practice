const { getFile, createFile } = require('./fileController');
const { getAllUsers, createUser, login } = require('./userController');

module.exports = {
    getFile, 
    createFile,
    getAllUsers, 
    createUser, 
    login,
};