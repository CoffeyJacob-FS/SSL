const express =require("express");
const route  = require("../routes/books");
const app=express();
const mongoose= require('mongoose');
require("dotenv").config();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
}
next();
});



app.get("/",(req,res,next)=>{
    res.status(200).json({
        message:'service running',
        method: req.method
    });
});
app.use('/',route)

app.use((req,res,next)=>{
    const error=new Error('Not Found!');
    error.status=404;
    next(error);
});
app.use((error,res,)=>{
    res.status(error.status|| 500).json({
        error:{
            message: error.message,
            status: error.status,
        },
    });
    });

    mongoose.connect(process.env.Db_URL,(err)=>{
        if(err){
            console.log('error',err.message)
        }
        else{
        console.log("MongoDB connection Live")
        }
    })
    module.exports = app;