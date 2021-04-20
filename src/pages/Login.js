import { Avatar, Grid, Paper, TextField, Button, Box } from '@material-ui/core'
import React from 'react'
import { Component } from 'react';
import { Route, Redirect, History, useHistory, useLocation } from 'react-router-dom';
import {useAuth, user,
signin,
signout } from '../fakeAuth';

function Login(){

    // state = {
    //     signedIn: false
    // }


    // signIn = () => {
    //     fakeAuth.authenticate(() => {
    //         this.setState(() => ({
    //             redirectToReferrer: true
    //           }))
    //     })
    //     this.props.changeIsAuth(true)
    //   }

    // render(){
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        auth.signin(() => {
        history.replace(from);
        });
    };
    const paperStyle={padding : 20, height : '70vh', width : 280, margin : '20px auto'}

    return(
    // const { signedIn } = this.state
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar>?</Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeHolder='Enter username' fullWidth required/>
                <TextField label='Password' placeHolder='Enter password' type='password' fullWidth required/>
                <Box mt={5}>
                {/* onClick={this.signIn} */}
                    <Button variant='contained' type='submit' color='primary' margin={'20px 30px'} fullWidth>Sign in</Button>
                </Box>
                <Box display='flex' mt={4}>
                    <Box flexGrow={1} mt={2, 1}>Not a user yet?</Box>
                    <Button variant='contained' color='secondary'>Sign up!</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Login