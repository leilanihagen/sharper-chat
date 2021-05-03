const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomSchema = new Schema({ // Structure of document
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
});

module.exports = mongoose.model('Chatroom', chatroomSchema);