// Express app

const express = require('express');
const app = express();
const morgan = require('morgan'); // calls next in  bg
const bodyParser = require('body-parser');

const chatRoutes = require('./api/routes/chat');
const chatroomRoutes = require('./api/routes/chatroom');
const userRoutes = require('./api/routes/user');
//^ we want to make sure that every request to /chat gets routed to /chat

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended}));
app.use(bodyParser.json());

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

module.exports = app;