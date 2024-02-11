const { Schema, model } = require('mongoose');
const { generateSalt, generatePassword } = require('@utils/helpers');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: 'Email should not be empty.',
        validate: [
            {
                validator(value) {
                    return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
                },
                message: 'Invalid email.',
            },
        ],
        unique: 'Email allready exist.',
    },
    password: {
        type: String,
    },
    salt: {
        type: String,
    },
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

userSchema.index({ email: 1 }, { unique: true });

const User = model('User', userSchema);

module.exports = User;
