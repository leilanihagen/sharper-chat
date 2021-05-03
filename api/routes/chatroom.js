const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();

//Building a "chatroom" resource/URL/endpoint to access chat data

const Chatroom = require('../../models/chatroom');

// requests to '/chatroom' have already been filtered into here:
router.get('/', (req, res, next) => {
    // Return ALL / multiple(?) chatrooms:

    Chatroom.find()
        .exec()
        .then(docs => {
            console.log(docs);
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
    // const chatroom = {
    //     _id: req.body.id,
    //     title: req.body.title,
    // }
    const chatroom = new Chatroom({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
    });
    chatroom.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created chatroom (POST).'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.get('/:chatroomId', (req, res, next) => {
    const id = req.params.chatroomId;
    // id comes from URL sent by browser(?)
    Chatroom.findById(id)
        .exec()
        .then(doc => {
            console.log("From DB", doc);
            // Return the doc matching the id
            if (doc){
                res.status(200).json(doc);
            }
            else{
                res.status(404).json({
                    message: 'No valid entry found for provided ID.'
                })
            }
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    //TODO
});

router.delete('/:chatroomId', (req, res, next) => {
    const id = req.params.chatroomId;
    Chatroom.remove({_id: id})
        .exec()
        .then(res => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
});

router.put('/:chatroomId', (req, res, next) => {
    const id = req.params.chatroomId;
    Chatroom.findOneAndUpdate(id, {
        title: req.body.title,
    })
    .exec()
    .then(res => {
        res.send(result)
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
})

module.exports = router; // so we can import and use the router created 