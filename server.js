const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
const Port = process.env.Port || 3000; // check for open ports, else use 3000

app.listen(Port, ()=>console.log('Server started!'));
