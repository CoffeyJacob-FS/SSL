const express =require("express");
const router  = require("../routes/routes");
require("ejs");
const app=express();
const bodyParser=require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.engine('ejs',require('ejs').__express);


app.use(express.static('public'));
app.use(express.static('views'));

app.use('/',router);

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

 module.exports = app;