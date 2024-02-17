const { getFile, createFile } = require('./file/file.controller');
const { getAllUsers, createUser, login } = require('./user/user.controller');
const { getPost, getAllPosts } = require('./post/post.controller');

module.exports = {
    getFile,
    createFile,
    getAllUsers,
    createUser,
    login,
    getPost,
    getAllPosts,
};
