import React from 'react'
import { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import {fakeAuth} from '../fakeAuth';

import { createUser } from '../UserInfoService'

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { Card } from 'reactstrap';

import firebase from "firebase/app";

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username: null,
            email: null,
            password: null,
            passwordConfirmation: null,
            motherLanguageCode: null,
            signupError: '',
            redirectToReferrer: false,
        };

        // this.handleSubmit = handleSubmit.bind(this);
    }

    isPasswordValid = () => (this.state.password === this.state.passwordConfirmation);
    
    handleSubmit = (e) => {
        e.preventDefault(); // Prevent default page refresh
        
        if(!this.isPasswordValid()){
            this.setState({ signupError: 'Passwords do not match!'});
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authRes => {
                // Successfully created user in firebase auth module

                const userObj = {
                    email: authRes.user.email
                };
                firebase
                    .firestore()
                    .collection('users') // Target the collection
                    .doc(this.state.email) // Name the doc
                    .set(userObj)
                    .then(() => {
                        // Successfully wrote to DB

                        this.props.history.push('/chat-center')
                        // <Redirect to='/chat-center' />
                    }, dbErr => {
                        // Failed to write to DB

                        console.log(dbErr);
                        this.setState({ signupError: 'Failed to add user to DB. ' + dbErr});
                        // return;
                    })
                }, authErr => {
                    // Failed to add user in firebase auth module:

                    console.log(authErr);
                    this.setState({ signupError: 'Failed to create new user. ' + authErr })
                    // return;
                })

        // HTTP call:

        // if( !this.isPasswordValid() ){
        //     this.setState({signupError: 'Passwords do not match!'});
        // }
        // else{
        //     createUser({
        //         username: this.state.username,
        //         email: this.state.email,
        //         password: this.state.password,
        //         motherLanguageCode: this.state.motherLanguageCode,
        //     });
        // }
        // console.log(this.state); // View our inputted info!
    }

    userTyping = (type, e) => {
        switch (type) {
            // case "username":
            //     this.setState({username: e.target.value});
            //     break;
            case "email":
                    this.setState({email: e.target.value});
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
                        <h2>Sign Up for Sharper Chat!</h2>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            {/* <FormGroup>
                                <Label>Enter username</Label>
                                <Input type="textarea" id="username" onChange={(e) => this.userTyping('username', e)}></Input>
                            </FormGroup> */}
                            <FormGroup>
                                <Label>Enter email</Label>
                                <Input type="textarea" _id="email" onChange={(e) => this.userTyping('email', e)}></Input>
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
                            <Button type="submit">Sign up!</Button>
                            {/* Write pure JS: */}
                            {
                                !this.state.signupError ?
                                <p style={{color: 'red'}}>{this.state.signupError}</p>
                                :
                                null
                            }
                            <p>Already a user?</p>
                        <Link to={'/login'}>Log in!</Link>
                        </Form>
                    </Card>
                </div>
            )
        }
    }
}

export default SignUp