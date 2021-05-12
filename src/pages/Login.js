// import { Avatar, Grid, Paper, TextField, Box, FormGroup, Typography } from '@material-ui/core'
import React from 'react'
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {fakeAuth} from '../fakeAuth';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: null,
            password: null,
            passwordConfirmation: null,
            signupError: '',
            redirectToReferrer: false,
        };

        // this.handleSubmit = handleSubmit.bind(this);
    }

    signIn = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
        this.props.changeIsAuth(true)
      }

    isPasswordValid = () => (this.state.password === this.state.passwordConfirmation);
    
    handleSubmit = (e) => {
        e.preventDefault(); // Prevent default page refresh
        if( !this.isPasswordValid() ){
            this.setState({signupError: 'Passwords do not match!'});
        }
        console.log(this.state); // View our inputted info!
    };

    userTyping = (type, e) => {
        switch (type) {
            case "username":
                this.setState({username: e.target.value});
                break;
            case "password":
                this.setState({password: e.target.value});
                break;
            case "password_confirmation":
                this.setState({passwordConfirmation: e.target.value});
                break;
            default:
                break;
        }
    }

    render(){
        const paperStyle={padding : 20, height : '70vh', width : 280, margin : '20px auto'}
        const { redirectToReferrer } = this.state
        
        if (redirectToReferrer === true) { // When the user authenticates, this is true 
            return <Redirect to='/' />
            }
        else{
            return(
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <Label>Enter username</Label>
                        <Input type="textarea" _id="username" onChange={(e) => this.userTyping('username', e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Enter password</Label>
                        <Input type="password" _id="password" onChange={(e) => this.userTyping('password', e)}></Input>
                    </FormGroup><FormGroup>
                        <Label>Enter password again</Label>
                        <Input type="password" _id="password_confirmation" onChange={(e) => this.userTyping('password_confirmation', e)}></Input>
                    </FormGroup>
                    {/* submit below is a React type, this fires the submit event: */}
                    <Button type="submit">Sign in</Button>
                    {/* Write pure JS: */}
                    {
                        !this.isPasswordValid() ?
                        <p style={{color: 'red'}}>{this.state.signupError}</p>
                        :
                        null
                    }
                    <p>Not a user yet?</p>
                    <Button>Sign up!</Button>
                </Form>
                // <Grid>
                //     <Paper elevation={10} style={paperStyle}>
                //         <Grid align='center'>
                //             <Avatar>?</Avatar>
                //             <h2>Sign in</h2>
                //         </Grid>
                //         <TextField label='Username' placeHolder='Enter username' fullWidth required/>
                //         <TextField label='Password' placeHolder='Enter password' type='password' fullWidth required/>
                //         <Box mt={5}>
                //             <Button onClick={this.signIn} variant='contained' type='submit' color='primary' margin={'20px 30px'} fullWidth>Sign in</Button>
                //         </Box>
                //         <Box display='flex' mt={4}>
                //             <Box flexGrow={1} mt={2, 1}>Not a user yet?</Box>
                //             <Button variant='contained' color='secondary'>Sign up!</Button>
                //         </Box>
                //     </Paper>
                // </Grid>
            )
        }

    }

}

export default Login