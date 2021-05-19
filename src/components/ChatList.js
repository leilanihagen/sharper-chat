import React from 'react';
import { Component, } from 'react';
import { Avatar, Divider } from '@material-ui/core'

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
        if(this.props.chats.length > 0){
            return (
                <div>
                    <Button
                    onClick={this.newChat}>
                        New Message
                    </Button>
                    <ListGroup>
                        {
                            this.props.chats.map((_chat, _index) => {
                                return(
                                    <div key={_index}>
                                        <Toast
                                        onClick={() => this.selectChat(_index)}
                                        >
                                            <ToastHeader
                                            icon={<Avatar>{_chat.sender.split('')[0]}</Avatar>}>
                                                
                                                {/* Display email: */}
                                                {_chat.sender}
                                            </ToastHeader>
                                            <ToastBody>

                                                {/* Display chat: */}
                                                {
                                                    _chat.message
                                                }
                                            </ToastBody>
                                        </Toast>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </ListGroup>
                </div>
            );
        }
        else{
            return(
                <div>
                    <Button
                    color='primary'
                    onClick={this.newChat}>
                        New Message
                    </Button>
                    <ListGroup></ListGroup>
                </div>
            )
        }
    }
    
}

export default ChatList