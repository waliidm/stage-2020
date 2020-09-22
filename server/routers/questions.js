const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const ObjectID = require('mongodb').ObjectID;
const question = require('../models/question')
const questionbody = require('../models/questionbody')

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


// Get question
router.get('/', (req, res) => {
    question.find()
    .exec()
    .then((users) => {
        response.data = users;
        res.json(response);
    })
    
});


// Post question

router.put('/post/:_id',(req,res) =>{
    console.log(req.params._id);
    var newquestion = new questionbody({
        _id : mongoose.Types.ObjectId(),
        question:req.body.question,
        type:req.body.type,
        answer:req.body.answer
    });
    console.log("aaaaaaa");
    console.log(newquestion);
    question.findByIdAndUpdate({_id:req.params._id}, {$push: {questions: newquestion}})
    .then(
        () => {
          res.status(200).json({
            message: 'Updated!'
          });
        }
        );

});
//Get ID
router.get('/:_id', (req, res) => {
    question.findById(req.params._id)
    .exec()
    .then((question) => {
        response.data = question;
        res.json(response);
    })
});
// Get exact question
router.get('/:_id/questions/idq', (req, res) => {
  questionbody.find([{_id:req.params._id},{"questions._id": ObjectID(req.params.idq)}] )
  .exec()
  .then((question) => {
      response.data = question;
      res.json(response);
  })
});
//Delete Question 

router.put('/:_id/delete', (req, res) => {
  console.log(req.body.idq);

  question.findOneAndUpdate({_id:req.params._id},{ $pull: {questions: { _id:  ObjectID(req.body.idq)} } },{ 'new': true } ).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
      );
    });
//Replace user

router.put('/replace/:_id',(req,res) =>{
  console.log("here");
  question.findOneAndUpdate({'questions._id':ObjectID(req.body.idq)},{ $set: {  'questions.$.question':req.body.title ,'questions.$.type':req.body.type,'questions.$.answer':req.body.answer } }

        
    ).then(
        () => {
          res.status(200).json({
            message: 'Updated!'
          }); 
          console.log("done");
        }
        );
      });




// add qustionnaire
router.post('/post',(req,res) =>{

  const newquestion = new question({
      _id : mongoose.Types.ObjectId(),
      title:req.body.title,
      questions:[]
  });
  newquestion.save()
  .then(
      () => {
        res.status(200).json({
          message: 'added!'
        });
      }
      );

  
    });

// Delete questionnaire
router.delete('/delete/:_id',(req,res) =>{
  console.log(ObjectID(req.params._id));
  console.log("aaaaaaaaaa");
  question.findByIdAndRemove(ObjectID(req.params._id))
  .then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
      );

  
    });

module.exports = router;

