const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ // Structure of document
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    motherLanguageCode: { type: String, required: false }, // Not req. for now
});

module.exports = mongoose.model('User', userSchema);