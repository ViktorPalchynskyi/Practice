const InterceptorContex = require('./InterceptorContex');
const BaseInterceptorStrategy = require('./BaseInterceptorStrategy');
const PostInterceptorStrategy = require('./PostInterceptorStrategy');

function setBaseInterseptor(axiosInstence) {
    new InterceptorContex(new BaseInterceptorStrategy(), axiosInstence).configInterceptors();
}

function setPostInterseptor(axiosInstence) {
    new InterceptorContex(new PostInterceptorStrategy(), axiosInstence).configInterceptors();
}

module.exports = {
    setBaseInterseptor,
    setPostInterseptor,
};
