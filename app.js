// Express app

const express = require('express');
const app = express();

// Create a middleware that requests will be passed through:
app.use((req, res, next) => { // response, request, next function
    // function called on our request info^

    //Use: res. to send a response:
    res.status(200).json({
        message: 'It works',
    })
});

module.exports = app; 