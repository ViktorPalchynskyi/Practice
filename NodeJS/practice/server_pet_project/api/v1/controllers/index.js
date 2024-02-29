const { getFile, createFile } = require('./file/file.controller');
const { getAllUsers, createUser, login, countSurnames, me } = require('./user/user.controller');
const { getPost, getAllPosts, createPost } = require('./post/post.controller');
const { oauth, oauthCallback } = require('./oauth/oauth.controller');
const { register, confirm } = require('./registration/registration.controller');
const { createProducts, getOrdersList, checkout } = require('./order/order.controller');
const { messageList } = require('./message/message.controller')

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
    oauth,
    oauthCallback,
    me,
    register,
    confirm,
    createProducts,
    getOrdersList,
    checkout,
    messageList,
};
