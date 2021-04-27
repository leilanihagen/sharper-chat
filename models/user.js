const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ // Structure of document
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    motherLanguageCode: String,
});

module.exports = mongoose.model('User', userSchema);