const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const ObjectID = require('mongodb').ObjectID;
const reply = require('../models/reply')


// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


// Get question
router.get('/', (req, res) => {
    reply.find()
    .exec()
    .then((e) => {
        response.data = e;
        res.json(response);
    })
    
});

router.get('/:_id', (req, res) => {
    question.findById(req.params._id)
    .exec()
    .then((question) => {
        response.data = question;
        res.json(response);
    })
});


// Post question

router.post('/',(req,res) =>{

    var newreply = new reply({
        _id : mongoose.Types.ObjectId(),
        idQuestion:req.body.idq,
        name:req.body.name,
        replies:req.body.replies
    });

    newreply.save()
    .then(
        () => {
          res.status(200).json({
            message: 'Updated!'
          });
        }
        );

});

module.exports = router;