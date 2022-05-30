const http = require('http');
require("dotenv").config();
const app = require("./app/app");

http.createServer(app).listen(process.env.port,()=>{
    console.log(`running on ${process.env.port}`);
})
