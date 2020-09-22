const express = require('express');
const router = express.Router();
const usersModel = require('../models/user')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.post('/postUsers',(req,res)=>{

    bcrypt.genSalt( (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            
            const usersdata = new usersModel (
                {
                    userName:req.body.userName,
                    password:hash,
                    role:req.body.role 
        
                }
            );
           
            usersdata.save().then(data=>{
                res.json(data)
            })
            
        });
    });
   
   
    




});
// get user
router.get('/', (req, res) => {
    usersModel.find()
    .exec()
    .then((e) => {
        response.data = e;
        res.json(response);
    })
    
});
// change role
router.put('/:_id', (req, res) => {
    console.log(req.params._id);
    console.log(req.body.role);
    usersModel.findOneAndUpdate({'_id':req.params._id},{role:req.body.role})
    .then(
        () => {
          res.status(200).json({
            message: 'Updated!'
          }); 
        }
        );
      });

router.post('/login',( async (req,res)=>{
  
    console.log(req.body.userName);
    
        const usersdata = await usersModel.find({userName:req.body.userName})
        console.log(usersdata[0]);

        if(usersdata[0]===undefined){
            return res.send('user is not registred')
        }
        else{
        const userpassword =await bcrypt.compare(req.body.password, usersdata[0].password)
    if(userpassword){
        const tokenData={data:usersdata[0]}
        const token =jwt.sign(tokenData, "7dd597d7e3070be71d47a406312df8af38ae436b60bde8b15f31f404258129d0b86893dde65aa56d8092574a1ef754437dc48b8fc1db102e29fc48fa599ab1c2")
        
    
        res.cookie('token',token).send({token:token})    }
    else{
        res.send("password is incorrect")
    
      }
    }
      

  
 

}));

router.delete('/delete/:_id',(req,res) =>{
    console.log(req.params._id);
    usersModel.findByIdAndRemove(req.params._id)
    .then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
        );
  
    
      });

module.exports = router;