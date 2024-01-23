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
        required: 'Email should not be empty.',
        validate: [
            {
                validator(value) {
                    return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
                },
                message: 'Invalid email.'
            }
        ],
        unique: 'Email allready exist.'
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
});

userSchema.index({ email: 1 });

const User = model('User', userSchema);

module.exports = User;