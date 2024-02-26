const { Schema, model } = require('mongoose');

const schema = new Schema({
    token: {
        type: String,
        unique: true,
        required: true,
    },
    lastVisit: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});

schema.path('lastVisit').index({ expires: '7d' });

module.exports = model('Session', schema);
