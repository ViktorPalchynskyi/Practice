const ERROR_LIST = ['ValidationError', 'MongoServerError'];

module.exports = async function handleMongooseValidationError(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (!ERROR_LIST.includes(err.name)) {
        throw err;
    }

    ctx.status = 400;
    const error = {};
    
    if (err.name === 'ValidationError') {
      for (const field of Object.keys(err.errors)) {
        error[field] = err.errors[field].message;
      }
    }

    if (err.name === 'MongoServerError') {
        const [[ key, value ]] = Object.entries(err.keyValue);
        error[key] = `Email ${value} already exist.`;
    }
    
    ctx.body = { error };
  }
};
