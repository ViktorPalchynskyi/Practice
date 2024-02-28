const { Schema, model } = require('mongoose');

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    phone: {
        type: String,
        required: true,
        validate: [
            {
                validator(value) {
                    return /\+?\d{6,14}/.test(value);
                },
                message: 'Invalid phone number.',
            },
        ],
    },
    address: {
        type: String,
        required: true,
    },
});

module.exports = model('Orders', schema);
