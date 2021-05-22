import React from 'react';
import { Component } from 'react';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, Card } from 'reactstrap';

import firebase from "firebase";

class NewChat extends Component {
    constructor(){
        super();
        this.state = {
            recipientEmail: '',
            message: '',
        }
    }

    userTyping = (type, e) => {
        console.log('user typing new msg')
        switch (type) {
            // case "username":
            //     this.setState({username: e.target.value});
            //     break;
            case "email":
                this.setState({recipientEmail: e.target.value});
                break;
            case "message":
                this.setState({message: e.target.value});
                break;
            default:
                break;
        }
    }

    createConvo = () => {
        this.props.createNewConvo({
            sendTo: this.state.recipientEmail,
            message: this.state.message,
        });
    }

    routeMessageToConvo = () => this.props.routeMessageToConvo(this.buildConvoKey(), this.state.message);

    submitMessage = async (e) => {
        e.preventDefault();
        console.log("user submitted")

        // Check if user exists
        const userExists = await this.userExists();

        // Check if chatroom exists
        if(userExists){
            console.log("user exists")
            const convoExists = await this.convoExists();
            convoExists ? this.routeMessageToConvo() : this.createConvo();
        }else{
            console.log("user does not exists")
        }
    }

    buildConvoKey = () => {
        return [firebase.auth().currentUser.email, this.state.recipientEmail].sort().join(':');
    }

    userExists = async () => {
        const usersSnapshot = await firebase
            .firestore()
            .collection('users')
            .get();
        
        // console.log(usersSnapshot.docs.map(_doc => _doc.data())

        const exists = usersSnapshot.docs
            .map(_doc => _doc.id)
            .includes(this.state.recipientEmail);
        return exists;
        // this.setState({ serverError: })
    }

    convoExists = async () => {
        const convoKey = this.buildConvoKey();
        const convo = await firebase
            .firestore()
            .collection('chats')
            .doc(convoKey)
            .get();
        console.log(convo.exists);
        return convo.exists;
    }

    render() {

        return(
            <div>
                <Form>
                    <Label>Recipient's Email</Label>
                    <Input type="email"
                    placeholder="Type your friend's email..."
                    onChange={(e) => this.userTyping('email', e)}></Input>
                    <Label>Compose Message</Label>
                    <Input type="textarea"
                    placeholder="Type your message here..."
                    onChange={(e) => this.userTyping('message', e)}></Input>
                    <Button onClick={(e) => this.submitMessage(e)}
                    style={{width: '100%'}}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewChat