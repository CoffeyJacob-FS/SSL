const http = require('http');
const express = require("express");
const app= express();

app.use(express.static(__dirname));

//handles all page requests
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index');
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/about');
});
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/contact');
});
app.get('/post',(req,res)=>{
    res.sendFile(__dirname + '/post');
});

http.createServer(app).listen(8085,()=>{
    console.log('running on 8085');
})
