'use strict';

// const { request, response } = require('express');
const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

//To check if the server and route is working
server.get('/data', (request, response)=>{
    console.log('data route');
    response.send('This route is working');
})

server.listen(PORT, ()=>{
    console.log(`My server is listening to the port: ${PORT}`);
});




