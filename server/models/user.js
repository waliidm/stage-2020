const mongoose= require('mongoose')

const usersSchema=mongoose.Schema(
    {
            userName:{type:String} ,
            password:{type:String},
            role:{type:String}    
    }
);


module.exports=mongoose.model('users',usersSchema)