const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_KEY = 'secret123';

//Building a "user" resource/URL/endpoint to access user data
const User = require('../../models/user');

// requests to '/user' have already been filtered into here:
router.get('/', (req, res, next) => {
    // View users in a chat, friends etc.
    User.find()
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
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        motherLanguageCode: req.body.motherLanguageCode,
    });
    user.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Created user (POST).'
    })
});

router.post('/signup', (req, res, next) => {
    // We want to create a new user!
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        motherLanguageCode: req.body.motherLanguageCode,
    });
    user.save().then(result => {
        if (user.length >= 1) {
            // Return a conflicting request error
            return res.status(409).json({
                message: "A user with this username already exists."
            });
        }
        else{
            console.log(result);
            res.status(201).json({
                message: 'Created user (POST).'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.post("/login", (req, res, next) => {
    User.find({username: req.body.username})
        .exec()
        // 'user' here is an array of all users with username equal to ^(req.body.username). Only 1 will exist
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    message: "Auth failed."
                });
            }
            // Found user
            // Now make sure the password matches:
            if(user[0].password === req.body.password){
                const authToken = jwt.sign(
                // Public key:
                {
                    username: user[0].username,
                    userId: user[0]._id
                },
                // Private key:
                JWT_KEY,
                // Options:
                {
                    expiresIn: "1h"
                },
                );
                return res.status(200).json({
                    message: "Auth successful."
                });
            }
            else{
                return res.status(401).json({
                    message: "Auth failed.",
                    token: authToken
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
})

// Not needed (yet, if impl. updating user info, use)
// router.put('/', (req, res, next) => {
//     res.status(201).json({
//         // TODO
//     });
// });

module.exports = router; // so we can import and use the router created 