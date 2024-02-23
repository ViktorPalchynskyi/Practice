const { getFile, createFile } = require('./file/file.controller');
const { getAllUsers, createUser, login, countSurnames } = require('./user/user.controller');
const { getPost, getAllPosts, createPost } = require('./post/post.controller');

module.exports = {
    getFile,
    createFile,
    getAllUsers,
    createUser,
    login,
    getPost,
    getAllPosts,
    createPost,
    countSurnames,
};
