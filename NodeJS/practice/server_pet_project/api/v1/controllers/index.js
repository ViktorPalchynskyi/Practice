const { getFile, createFile } = require('./file/fileController');
const { getAllUsers, createUser, login } = require('./user/userController');

module.exports = {
    getFile,
    createFile,
    getAllUsers,
    createUser,
    login,
};
