const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({ // Structure of document
    _id: mongoose.Schema.Types.ObjectId,
    message: String,
    authorUserId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Chat', chatSchema);