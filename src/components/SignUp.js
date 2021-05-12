import React from 'react'
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {fakeAuth} from '../fakeAuth';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { Card } from 'reactstrap';

const axios = require('axios');

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username: null,
            password: null,
            passwordConfirmation: null,
            motherLanguageCode: '',
            signupError: '',
            redirectToReferrer: false,
        };

        // this.handleSubmit = handleSubmit.bind(this);
    }

    isPasswordValid = () => (this.state.password === this.state.passwordConfirmation);
    
    handleSubmit = (e) => {
        // e.preventDefault(); // Prevent default page refresh
        if( !this.isPasswordValid() ){
            this.setState({signupError: 'Passwords do not match!'});
        }
        else{
            axios({
                method: 'post',
                url: ''
            })
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
                <div>
                    <Card>
                        <h2>Sign Up!</h2>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <FormGroup>
                                <Label>Enter username</Label>
                                <Input type="textarea" id="username" onChange={(e) => this.userTyping('username', e)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Enter password</Label>
                                <Input type="password" id="password" onChange={(e) => this.userTyping('password', e)}></Input>
                            </FormGroup><FormGroup>
                                <Label>Enter password again</Label>
                                <Input type="password" id="password_confirmation" onChange={(e) => this.userTyping('password_confirmation', e)}></Input>
                            </FormGroup>
                            {/* TODO: make this a dropdown: */}
                            <FormGroup>
                                <Label>Enter your mother language code</Label>
                                <Input type="textarea" id="mother_language_code" onChange={(e) => this.userTyping('mother_language_code', e)}></Input>
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
                    </Card>
                </div>
            )
        }
    }
}

export default SignUp