const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({ // Structure of document
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    authorUserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Chat', chatSchema);