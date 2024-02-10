const { Schema, model } = require('mongoose');
const { generateSalt, generatePassword } = require('@utils/helpers');

// TODO: check unique validation for email
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
    },
    salt: {
        type: Schema.Types.String,
    }
});

userSchema.methods.setPassword = async function setPassword(password) {
    this.salt = await generateSalt();
    this.password = await generatePassword(this.salt, password);
};

userSchema.methods.checkPassword = async function checkPassword(password) {
    if (!password) return false;

    const hash = await generatePassword(this.salt, password);

    return this.password === hash;
};

// userSchema.index({ email: 1 });

const User = model('User', userSchema);

module.exports = User;