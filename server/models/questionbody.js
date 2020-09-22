const mongoose = require('mongoose');

const Schema =mongoose.schema;

const questionbodySchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    question : String,
    type:Number,
    answer :[

    ]
});

module.exports = mongoose.model('questions',questionbodySchema);