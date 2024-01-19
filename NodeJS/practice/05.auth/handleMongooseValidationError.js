modulu.export = async function handleMongooseValidationError(ctx, next) {
    try {
        await next();
    } catch (error) {  
        if (error.name !== 'ValidationError') throw error;
        
        ctx.status = 400;
        ctx.body = Object.keys(error.errors).reduce((acc, value) => {
            return {
                ...acc,
                [value]: error.errors[value].message,
            }
        });
    }
}