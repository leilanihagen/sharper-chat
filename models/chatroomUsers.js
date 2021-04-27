const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomUsersSchema = new Schema({ // Structure of document
    chatroomId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('ChatroomUsers', chatroomUsersSchema);