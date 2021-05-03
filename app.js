// Express app
const connectDB = require('./DB/Connection');
const express = require('express');
const app = express();
const morgan = require('morgan'); // calls next in  bg
const bodyParser = require('body-parser');

const chatRoutes = require('./api/routes/chat');
const chatroomRoutes = require('./api/routes/chatroom');
const userRoutes = require('./api/routes/user');
//^ we want to make sure that every request to /chat gets routed to /chat

connectDB();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method === 'OPTIONS') {
        // Browser always sends a 
        res.header('Access-Con', 'GET, POST, DELETE, PUT', );
        return res.status(200).json({});
    }
    // make sure we don't block our request. Pass it onto the next use() statements:
    next();
});

// Create a middleware that requests will be passed through:
app.use('chat', chatRoutes);
app.use('chatroom', chatroomRoutes);
app.use('user', userRoutes);

// Handle errors that have
app.use((req, res, next) => {
    const error = new Error();
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    // Catches errors from anywhere in the appication (passed thru error), OR through the above middleware (next(error)):
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});

// Test the bare minimum functionality:
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "it works!",
//     });
// });

// module.exports = app;
