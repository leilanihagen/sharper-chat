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

    submitMessage = () => {

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
                    <Button onClick={this.submitMessage}
                    style={{width: '100%'}}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewChat