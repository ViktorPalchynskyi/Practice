const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    surname: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
});

userSchema.index({ email: 1 });

const User = model('User', userSchema);

module.exports = User;