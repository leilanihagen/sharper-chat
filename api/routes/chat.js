const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Chat = require('../../models/chat');

//Building a "chat" resource/URL/endpoint to access chat data

// requests to '/chat' have already been filtered into here:
router.get('/', (req, res, next) => {
    res.status(200).json({
        // TODO
        message: 'handling chat GET(READ) reqs',
    });
});

router.post('/', (req, res, next) => {
    const chat = new Chat({
        _id: new mongoose.Types.ObjectId(),
        message: req.body.message,
        authorUserId: req.body.authorUserId,
    });
    // Actually save the result to the DB:
    chat.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        // TODO
        message: 'handling chat POst(create) reqs',
    });
});

module.exports = router; // so we can import and use the router created 