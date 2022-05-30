const express =require('express');
const router =express.Router();

router.get('/',(req,res,)=>{
    res.render('index',{
        pagename: 'Home',
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
        pagename: 'login/signup',
    }); 
});

module.exports = router;