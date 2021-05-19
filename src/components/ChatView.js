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
                    <main>
                        {/* Conversation: */}
                        {
                            console.log(conversation)
                        }

                    </main>
                </div>
            )
        }
        
    }
}

export default ChatView