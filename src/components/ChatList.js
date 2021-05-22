import React from 'react';
import { Component, } from 'react';
import { Avatar, Divider } from '@material-ui/core'

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Button, Input, Card, ListGroup } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

class ChatList extends Component {

    newChat = () => {
        this.props.newChatButtonController();
    }

    selectChat = (index) => {
        this.props.selectChat(index);
    }

    render(){
        {
            console.log(this.props.userEmail)
        }
        if(this.props.conversations.length > 0){
            return (
                <div>
                    <Button
                    onClick={this.newChat}>
                    {/* style={{width:'100%'}}> */}
                        New Message
                    </Button>
                    <ListGroup>
                        {
                            this.props.conversations.map((_convo, _index) => { // this is visiting the 0 index twice
                                return(
                                    <div key={_index}>
                                        {/* {
                                            console.log(this.props.userEmail)
                                        } */}
                                        {
                                            console.log("OUTPUT: ", _convo)
                                        }
                                        <Toast
                                        onClick={() => this.selectChat(_index)}
                                        >
                                            <ToastHeader
                                            // Get the user who is !== active user.
                                            // TODO: group chats
                                            icon={<Avatar>{this.props.users[_index].filter(_user => _user !== this.props.userEmail)[0].split('')[0]}</Avatar>}>
                                                
                                                {/* Display email: */}
                                                <p>{_convo[0].sender}</p>
                                            </ToastHeader>
                                            <ToastBody>

                                                {/* Display chat: */}
                                                {
                                                    // Each messages array at an _index is a convo
                                                    _convo[0].message.substring(0, 30)
                                                }
                                                {
                                                    console.log(_convo)
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