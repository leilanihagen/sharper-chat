const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Chat = require('../../models/chat');

//Building a "chat" resource/URL/endpoint to access chat data

// requests to '/chat' have already been filtered into here:
router.get('/', (req, res, next) => {
    Chat.find()
        // Defn. fields to select:
        .select('message authorUserId _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                chats: docs,
            };
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res, next) => {
    // Create a new instance of the chat model:
    const chat = new Chat({
        // Assign an ID and get data from the req:
        _id: new mongoose.Types.ObjectId(),
        message: req.body.message,
        authorUserId: req.body.authorUserId,
    });
    // Actually save the result to the DB:
    chat.save().then(result => {
        console.log(result);
        res.status(201).json({
            // TODO
            message: 'handling chat POst(create) reqs',
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router; // so we can import and use the router created 