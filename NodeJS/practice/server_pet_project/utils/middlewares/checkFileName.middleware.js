module.exports = async function checkFileName(ctx, next) {
    const { fileName } = ctx.query.fileName ? ctx.query : ctx.request.body;
    
    if (!fileName) {
        ctx.throw(400, 'File name is required.');
    }

    await next();
};