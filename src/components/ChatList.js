import React from 'react';
import { Component, } from 'react';
import { Avatar } from '@material-ui/core'

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Button, Input, Card, ListGroup } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

class ChatList extends Component {

    newChat = () => {
        console.log('New chat clicked');
    }

    selectChat = (index) => {
        console.log('selected chat', index);
    }

    render(){
        return (
            <div>
                <Button
                onClick={this.newChat}>
                </Button>
                <ListGroup>
                    {
                        this.props.chats.map((_chat, _index) => {
                            return(
                                <Toast
                                onClick={() => this.selectChat(_index)}
                                >
                                    <ToastHeader
                                    // split('') breaks the string down into an array 
                                    icon={<Avatar>{_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]}</Avatar>}>
                                        {/* Display email: */}
                                        {_chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                                    </ToastHeader>
                                    <ToastBody>
                                        {/* Display chat: */}
                                        {
                                            _chat.messages[_chat.messages.length - 1].message
                                        }
                                    </ToastBody>
                                </Toast>
                            )
                        })
                    }
                </ListGroup>
            </div>
        )
    }
    
}

export default ChatList