import React from 'react';
import { Component } from 'react';
import ChatList from '../components/ChatList'

class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            selectedChat: null,
            newChatFormVisible: false,
            username: null,
            chats: [],
        }
    }

    selectChat = (chatIndex) => {
        console.log('Selected a chat', chatIndex);
    }

    newChatButtonClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

    // React function, called when components render:
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr){
                this.props.history.push('/login');
            }
        })
    }

    render(){
        return(
            <div>
                <ChatList
                newChatButtonController={this.newChatButtonClicked}
                selectChatButtonController={this.selectChat}
                chats={this.state.chats}
                activeUser={this.state.username}
                selectedChatIndex={this.state.selectedChat}>
                </ChatList>
            </div>
        )
    }
}
