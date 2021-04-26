const express = require('express');
const router = express.Router();

//Building a "chatroom" resource/URL/endpoint to access chat data

// requests to '/chatroom' have already been filtered into here:
router.get('/', (req, res, next) => {
    res.status(200).json({
        // TODO
        message: 'handling chatroom GET(READ) reqs',
    });
});

router.post('/', (req, res, next) => {
    const chatroom = {
        id: req.body.id,
        title: req.body.title,
    }
});

router.get('/:chatroomId', (req, res, next) => {
    const id = req.params.chatroomId;
    //TODO
});

router.delete('/:chatroomId', (req, res, next) => {
    const id = req.params.chatroomId;
    //TODO: delete this chatroom
});

module.exports = router; // so we can import and use the router created 