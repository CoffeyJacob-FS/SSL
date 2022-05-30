const express =require('express');
const router =express.Router();
const getReg= require("../api/api");
const bodyParser=require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false})
router.use(express.urlencoded({extended: true}));

router.get('/',(req,res,)=>{
    res.render('index',{
        pagename: 'home',
    }); 
    
});
router.get('/about',(req,res,)=>{
    res.render('about',{
        pagename: 'About',
    }); 
});
router.get('/contact',(req,res,)=>{
    res.render('contact',{
        pagename: 'Contact',
    }); 
});
router.get('/post',(req,res,)=>{
    res.render('post',{
        pagename: 'Post',
    }); 
});
router.get('/login',(req,res,)=>{
    res.render('login',{
        pagename: 'Sign up',
        

    }); 
});
router.post('/login',urlencodedParser, async (req,res)=>{
    
    const data={
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "address":req.body.address,
        "city":req.body.city,
        "state": req.body.state,
        "zip":req.body.zip,
        "age":req.body.age,
        "gender":req.body.gender,
        "consent":req.body.consent,
        "bio":req.body.bio
    };
console.log(data);
await  getReg(data)
    .then((result)=>{
        res.render('login', {
            pagename: 'Sign up',
            message: result.data.message,

        });
    })
    .catch((err)=>{
        res.render('login', {
            pagename: 'Sign up',
            error: err.message,
        });
    })
});

module.exports = router;