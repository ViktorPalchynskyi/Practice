const { getFile, createFile } = require('./file/file.controller');
const { getAllUsers, createUser, login } = require('./user/user.controller');
const { getPost } = require('./post/post.controller');

module.exports = {
    getFile,
    createFile,
    getAllUsers,
    createUser,
    login,
    getPost,
};
