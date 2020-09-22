const mongoose = require('mongoose');

const Schema =mongoose.schema;

const replySchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    idQuestion: mongoose.Schema.Types.ObjectId,
    name : String,
    replies:[]
});

module.exports = mongoose.model('replies',replySchema);