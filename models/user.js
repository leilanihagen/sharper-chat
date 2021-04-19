const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( // Structure of document
    id: int,
    username: String,
    password: String,
    motherLanguageCode: String,
    
)