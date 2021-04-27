const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomSchema = new Schema({ // Structure of document
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
});

module.exports = mongoose.model('Chatroom', chatroomSchema);