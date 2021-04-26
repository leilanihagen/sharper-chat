const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomUsersSchema = new Schema({ // Structure of document
    chatroomId: int,
    userId: int,
})