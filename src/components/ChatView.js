import React from 'react';
import { Component, } from 'react';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

class ChatView extends Component {

    render(){

        const { conversation } = this.props;

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
                        (this.props.conversation.length < 1) ?
                        null
                        :
                        <Grid container direction="column">
                            {
                                this.props.conversation.map((_chat, _index) => {
                                    var justify="flex-start";
                                    if(_chat.sender === this.props.activeUser){
                                        // Display sender's text on the right:
                                        justify="flex-end";
                                    }

                                        <Grid container item justify={justify}>
                                            <Toast>
                                                <ToastBody>
                                                    <p>_chat.message</p>
                                                </ToastBody>
                                            </Toast>
                                        </Grid>
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