import React from 'react';
import { Component, } from 'react';
import { Avatar, Grid } from '@material-ui/core';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';

class ChatView extends Component {

    // ChatView needs to listen to ChatCenter's updateChatViewVar for changes someone, and reflect changes in it's own state.

    componentDidUpdate = () => {
        const convoContainer = document.getElementById('chatview-container');
        if(convoContainer){
            convoContainer.scrollTo(0, convoContainer.scrollHeight);
        }
    }

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
                        <Grid id='chatview-container' container direction="column">
                            {
                                conversation.map((_chatMessage, _index) => {
                                    var justify="flex-start";
                                    if(_chatMessage.sender === this.props.activeUser){
                                        // Display sender's text on the right:
                                        justify="flex-end";
                                    }
                                    console.log("chatview OUT 2: ",_chatMessage.message);

                                        return(
                                            <Grid key={_index} container item xs justify={justify}>
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