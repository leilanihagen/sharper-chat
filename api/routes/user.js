const express = require('express');
const router = express.Router();

//Building a "user" resource/URL/endpoint to access user data

// requests to '/user' have already been filtered into here:
router.get('/', (req, res, next) => {
    // View users in a chat, friends etc.
    res.status(200).json({
        // TODO
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        // TODO
    });
});

router.put('/', (req, res, next) => {
    res.status(201).json({
        // TODO
    });
});

module.exports = router; // so we can import and use the router created 