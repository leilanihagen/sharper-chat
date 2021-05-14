import React from 'react'

const axios = require('axios');

export async function createUser(user){
    const url = 'http://localhost:3000/signup';

    try{
        let res = await axios.post(url, user);
        if(res.ok){
            console.log(res.data);
            console.log('ADDED USER');
            // return res.data;
        }
    }
    catch(err){
        console.log('Could not create user. ERROR: ' + err);
        // return err;
    }
}