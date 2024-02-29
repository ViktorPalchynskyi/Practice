const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  chat: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model('Message', messageSchema);
