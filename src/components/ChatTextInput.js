import React from 'react';
import { Component, } from 'react';
import { Avatar, Grid } from '@material-ui/core';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';

import firebase from "firebase/app";

class ChatTextInput extends Component {

    constructor() {
        super();
        this.state = {
            chatText: '',
        }
    }

    userClickedInput = () => {
        console.log("user clicked")

    }

    userTyping = (e) => {
        this.setState({chatText: e.target.value})
    }

    messageValid = (text) => text !== '';

    submitMessage = () => {
        if(this.messageValid(this.state.chatText)){
            this.props.submitMessage(this.state.chatText)
            document.getElementById("chat-text-box").value = '';
            this.props.updateChatView();
        }
    }

    // updateChatView = () => {
    //     this.props.updateChatView();
    // }

    render(){

        return(
            <div>
                <InputGroup>
                    <Input
                    id="chat-text-box"
                    placeholder="Type your message here..."
                    onKeyUp={(e) => this.userTyping(e)}
                    onFocus={this.userClickedInput} />
                    <InputGroupAddon addonType="append">
                        <Button
                        onClick={this.submitMessage}>
                            Send
                        </Button>
                    </InputGroupAddon>
                
                </InputGroup>
            </div>
        )
    }
}

export default ChatTextInput