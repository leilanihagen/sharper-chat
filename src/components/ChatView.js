import React from 'react';
import { Component, } from 'react';
import { Avatar, Grid } from '@material-ui/core';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';

class ChatView extends Component {

    render(){

        const { conversation } = this.props;
        
        console.log("chatview OUT: ",conversation)
        
        if(conversation === undefined) {
            return (
                <div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>
                        {/* Toolbar: */}

                    </div>
                    {/* Conversation: */}
                    {
                        // (conversation.length < 1) ?
                        // null
                        // :
                        <Grid container md direction="column">
                            {
                                conversation.map((_chatMessage, _index) => {
                                    var justify="flex-start";
                                    if(_chatMessage.sender === this.props.activeUser){
                                        // Display sender's text on the right:
                                        justify="flex-end";
                                    }
                                    console.log("chatview OUT 2: ",_chatMessage.message);

                                        return(
                                            <Grid container item xs justify={justify}>
                                                <Toast>
                                                    {/* <ToastHeader
                                                    icon={<Avatar>{_chatMessage.sender.split('')[0]}</Avatar>}>
                                                    </ToastHeader> */}
                                                    <ToastBody>
                                                        <Grid container direction="row">
                                                             {/* TODO: Add some padding here:*/}

                                                            <Avatar>{_chatMessage.sender.split('')[0]}</Avatar>
                                                            <p>{_chatMessage.message}</p>
                                                        </Grid>
                                                    </ToastBody>
                                                </Toast>
                                            </Grid>
                                        )
                                })
                            }
                        </Grid>
                    }
                </div>
            )
        }
        
    }
}

export default ChatView