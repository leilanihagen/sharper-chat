const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({ // Structure of document
    id: int,
    message: String,
    authorUserId: int,
})