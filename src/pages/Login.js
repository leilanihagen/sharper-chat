import { Avatar, Grid, Paper, TextField, Button, Box } from '@material-ui/core'
import React from 'react'
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {fakeAuth} from '../fakeAuth';

class Login extends Component{

    state = {
        redirectToReferrer: false
    }

    signIn = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
        this.props.changeIsAuth(true)
      }

    render(){
        const paperStyle={padding : 20, height : '70vh', width : 280, margin : '20px auto'}
        const { redirectToReferrer } = this.state
        if (redirectToReferrer === true) { // When the user authenticates, this is true 
            return <Redirect to='/' />
            }
        else{
            return(
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar>?</Avatar>
                            <h2>Sign in</h2>
                        </Grid>
                        <TextField label='Username' placeHolder='Enter username' fullWidth required/>
                        <TextField label='Password' placeHolder='Enter password' type='password' fullWidth required/>
                        <Box mt={5}>
                            <Button onClick={this.signIn} variant='contained' type='submit' color='primary' margin={'20px 30px'} fullWidth>Sign in</Button>
                        </Box>
                        <Box display='flex' mt={4}>
                            <Box flexGrow={1} mt={2, 1}>Not a user yet?</Box>
                            <Button variant='contained' color='secondary'>Sign up!</Button>
                        </Box>
                    </Paper>
                </Grid>
            )
        }
    }
}

export default Login