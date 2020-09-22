const mongoose = require('mongoose');

const Schema =mongoose.schema;

const questionSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String,
    questions :[

    ]
});

module.exports = mongoose.model('questionnaires',questionSchema);