const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const cors =require('cors');
var cookieParser = require('cookie-parser');
require("dotenv").config();
app.use(cors());
const questionsRoute = require('./server/routers/questions');
const repliesRoute = require('./server/routers/replies');
const usersRoute = require('./server/routers/users');




// Connect

mongoose.connect("mongodb://localhost:27017/stage", { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
    console.log('handle error here: ', e);
 });

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// Parsers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());



// API location
app.use('/questions', questionsRoute);
app.use('/replies', repliesRoute);
app.use('/users', usersRoute);


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
//cors




// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist'));
});


module.exports = app;