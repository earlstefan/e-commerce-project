const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.use((req,res,next) => {
    console.log("I am Middleware...");
    console.log(req);
    console.log(res);
});

const server = http.createServer(app);

server.listen(8000);
console.log("Listening to port 8000...")