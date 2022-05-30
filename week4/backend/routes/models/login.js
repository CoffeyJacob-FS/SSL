const mongoose = require('mongoose');
const loginSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName:{
        type:String,
        required:true,   
    },
    lastName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zip:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    } ,
    consent:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("login",loginSchema);