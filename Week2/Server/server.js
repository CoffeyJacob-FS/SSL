const http = require('http');
const express = require("express");
const app= express();

app.use(express.static(__dirname));

//handles all page requests
app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'index.html');
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + 'about.html');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + 'home.html');
});
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + 'contact.html');
});
app.get('/post',(req,res)=>{
    res.sendFile(__dirname + 'post.html');
});

http.createServer(app).listen(8085,()=>{
    console.log('running on 8085');
})