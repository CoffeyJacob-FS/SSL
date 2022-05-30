const express =require('express');
const postlogin = require('../db/db');
const router =express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:'Service Running',
        method:req.method
        
    });
});

router.post("/login",(req,res,next)=>{
    postlogin(req).then(result =>{
        console.log(result);
        res.status(200).json({
            message:"login saved",
            status:200,
            metaData:{
                name:result.firstName,
                hostname:req.hostname,
                method:req.method,
            }
        })
    })
    .catch(err=>{
        console.log(req);
        res.status(500).json({
            message:"login fail",
            status:500,
            error:{
                message:err.message
            },
            metaData:{
                hostname:req.hostname,
                method:req.method,
            }
        })
    })
})
module.exports = router;