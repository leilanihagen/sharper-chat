const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomUsersSchema = new Schema({ // Structure of document
    chatroomId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Chatroom' },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
});

module.exports = mongoose.model('ChatroomUsers', chatroomUsersSchema);