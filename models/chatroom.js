const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomSchema = new Schema({ // Structure of document
    id: int,
    title: String,
})