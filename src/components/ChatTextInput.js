import React from 'react';
import { Component, } from 'react';
import { Avatar, Grid } from '@material-ui/core';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';

class ChatTextInput extends Component {

    userClickedInput = () => {
        console.log("user clicked")

    }

    userTyping = (e) => {
        console.log("user typing")
    }

    submitMessage = () => {
        
    }

    render(){

        return(
            <div>
                <InputGroup>
                    <Input
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