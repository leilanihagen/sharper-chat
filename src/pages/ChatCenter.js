import { CardContent, Container, Grid, Icon, Typography } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { IconButton } from '@material-ui/core';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchField from "react-search-field";
import { Table, TableBody, TableRow } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import FriendSearchPopup from '../components/FriendSearchPopup';
import ChatList from '../components/ChatList';
import ChatView from '../components/ChatView';
import ChatTextInput from '../components/ChatTextInput';
import NewChat from '../components/NewChat';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";

import firebase from "firebase";

// protected
class ChatCenter extends Component {
    constructor(){
        super();
        this.state = {
            // friendSearchIsOpen: false,
            openFriendSearch: false,
            selectedChatIndex: null, // This is supposed to be the index of the CONVERSATION
            newChatFormVisible: false,
            userEmail: null,
             // This is the messages array for each convo, containing the message map itself and the users array:
            conversations: [],
            users: [],
            updateChatViewVar: 0,
        };

        this.toggleFriendSearchPopup.bind(this);
    };

    toggleFriendSearchPopup = () => {    
        this.setState({ openFriendSearch: !this.state.openFriendSearch })  
    }

    selectChat = (chatIndex) => {
        console.log(chatIndex)
        this.setState({
            selectedChatIndex: chatIndex,
        })
    }

    newChatButtonClicked = () => this.setState({ newChatFormVisible: true, selectedChatIndex: null });

    signOut = () => firebase.auth().signOut();

    updateChatView = () => this.setState({ updateChatViewVar: this.state.updateChatViewVar + 1});

    buildConvoKey = (friend) => [this.state.userEmail, friend].sort().join(':');

    submitMessage = (message) => {
        console.log("index: ", this.state.selectedChatIndex)
        console.log("convo: ", this.state.conversations)
        const convoKey = this.buildConvoKey(this.state.users[this.state.selectedChatIndex].filter(_user => _user !== this.state.userEmail)[0]);
        firebase
            .firestore()
            .collection('chats')
            .doc(convoKey)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion({
                    sender: this.state.userEmail,
                    message: message,
                    timestamp: Date.now(),
                }),
                receiverHasRead: false,
            });
    }

    routeMessageToConvo = async (convoKey, message) => {
        const usersInConvo = convoKey.split(':') // creates an array
        var convoIndex = null;

        // Find the INDEX of the target convo:
        for(var i=0; i < this.state.users.length; i++){
            var usersFound = 0;
            for(var j=0; j < usersInConvo.length; j++){
                if(this.state.users[i].includes(usersInConvo[j])){
                    usersFound++;
                }
            }
            if (usersFound === usersInConvo.length){
                convoIndex = i;
                console.log("CONVOINDEX: " ,convoIndex)
                break;
            }
        }
        this.setState({ newChatFormVisible: false });
        this.selectChat(convoIndex);
        this.submitMessage(message)
        // const convo = this.state.users.find(_user => usersInConvo.every(_user2 => _user.includes(_user2)))
    }

    createNewConvo = async (convoData) => {
        const convoKey = this.buildConvoKey(convoData.sendTo);
        console.log(convoData.sender)
        await firebase
            .firestore()
            .collection('chats')
            .doc(convoKey)
            .set({
                receiverHasRead: false,
                users: [convoData.sendTo, this.state.userEmail],
                messages: [{
                    message: convoData.message,
                    sender: this.state.userEmail,
                }]
            });
        this.setState({ newChatFormVisible: false });
        this.selectChat(this.state.conversations.length -1); // ??
    }

    // React function, called when components render:
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr){
                this.props.history.push('/login');
            }
            else{
                await firebase
                    .firestore()
                    .collection('chats')
                    .where('users', 'array-contains', _usr.email)
                    .onSnapshot(snap => {
                        console.log("SNAP: ",snap)
                        var allConversations = [];
                        var allUsers = [];
                        for(var i=0; i < snap.docs.length; i++){

                            const convoI = snap.docs[i].data()
                            allConversations[i] = convoI.messages;
                            allUsers[i] = convoI.users;
                            console.log("Convos: ", i, " ",  allConversations[i])
                            // console.log(users[i]);
                        }
                        this.setState({
                            userEmail: _usr.email,
                            conversations: allConversations,
                            users: allUsers,
                        });
                        this.updateChatView();
                    })
            }
        })
    }

    render() {

        const { popoverOpen } = this.state;
        // const { friendSearchIsOpen } = this.state // Deconstruction

        // const open = Boolean(this.anchorEl);
        // const id = open ? 'simple-popover' : undefined;

        const listCardStyle = {
            display : 'inline-block',
            height : '50%',
            width : '50%',
        }
        const paperStyle = {
            padding: 2,
            textAlign: 'left',
        }
        const largeRoundIcon = {

            largeIcon: {
                width: 60,
                height: 60,
              },
        }

        return(
            <div>
                <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start"
                >
                    {/* Main 2 compartments: [Convo nav] / [Eng tools + convo box] */}
                        
                    <Grid container item md>
                    {/* Conversation navigator/friend manager */}

                        <Grid container
                        spacing={3}
                        direction="column"
                        alignItems="flex-start">

                            {/* <Box m={2}> */}
                                <Grid container item diretion="row" justify="center" xs>
                                    <IconButton>
                                        <Grid container item direction="column" justify="center" alignItems="center">
                                            <PeopleAltRoundedIcon></PeopleAltRoundedIcon>
                                            Friends
                                        </Grid>
                                    </IconButton>
                                    <IconButton>
                                        <Grid container item direction="column" justify="center" alignItems="center">
                                            <PersonAddIcon></PersonAddIcon>
                                            Add Friend
                                        </Grid>
                                    </IconButton>
                                </Grid>
                            {/* </Box> */}
                        
                    
                            {/* <Box m={2}> */}
                                <Grid container item direction="row" justify="center" xs>
                                    <SearchField>
                                            placeholder="Search..."
                                            {/* onChange={onChange} */}
                                            searchText="This is initial search text"
                                            classNames="test-class"
                                    </SearchField>
                                </Grid>
                            {/* </Box> */}

                            {/* <Box m={2}> */}
                                <Grid container item direction="row" justify="center" xs>
                                    <TableBody>
                                        {/* Insert based on friends and/or filtered search */}
                                        
                                        <Grid container spacing={2}>
                                            <h3>Chatrooms</h3>
                                            <Grid container item sm={1.5} direction="column" justify="flex-start">
                                                <ChatList
                                                history={this.props.history}
                                                newChatButtonController={this.newChatButtonClicked}
                                                selectChat={this.selectChat}
                                                conversations={this.state.conversations}
                                                users={this.state.users}
                                                userEmail={this.state.userEmail}
                                                // activeUser={this.state.username}
                                                selectedChatIndex={this.state.selectedChatIndex}
                                                updateChatViewVar={this.state.updateChatViewVar}>
                                                </ChatList>
                                            </Grid>

                                            {/* Flex-end to righ-justify button: */}
                                            <Grid container item direction="row" justify="flex-end">

                                                {/* Popup -Dialog- version:  */}
                                                {/* <IconButton
                                                    onClick={this.toggleFriendSearchPopup}>
                                                    <AddCircleIcon />
                                                </IconButton> */}

                                                {/* RS Popover: */}
                                                <IconButton
                                                    onClick={this.toggleFriendSearchPopup}>
                                                    <AddCircleIcon />
                                                </IconButton>

                                                {/* Popover w/ helper: */}
                                                {/* <IconButton
                                                    {...bindTrigger(this.popoverState)}>
                                                    <AddCircleIcon />
                                                </IconButton> */}
                                            </Grid>

                                        </Grid>
                                    </TableBody>
                                </Grid>
                            {/* </Box> */}
                        </Grid>
                    </Grid>

                    <Grid container item md direction="column">
                        {/* Chat conversation and language center area: */}
                        
                         {/* We only want to disable ChatView when newChatFormVisible===true */}
                        {
                            this.state.newChatFormVisible ?
                            null :
                            <ChatView
                            activeUser={this.state.email}
                            users={this.state.users[this.state.selectedChatIndex]}
                            conversation={this.state.conversations[this.state.selectedChatIndex]}>
                            </ChatView>
                        }
                        {
                            this.state.selectedChatIndex !== null && !this.state.newChatFormVisible ?
                            <ChatTextInput
                            submitMessage={this.submitMessage}
                            updateChatView={this.updateChatView}
                            updateChatViewVar={this.updateChatViewVar}>
                            </ChatTextInput> :
                            null
                        }
                        {
                            this.state.newChatFormVisible ?
                            <NewChat
                            routeMessageToConvo={this.routeMessageToConvo}
                            createNewConvo={this.createNewConvo}>
                            </NewChat> :
                            null
                        }
                        {/* {console.log("from cc", this.state.chats[this.state.selectedChatIndex])} */}
                        
                        {/* <Grid container
                        direction="column">

                        
                        </Grid> */}

                        {/* English tools and Conversation column*/}

                        {/* <Grid container item direction="row">
                            {/* English tools */}

                        {/* </Grid>
                        <Grid container item direction="column"> */}
                            {/* Conversation  */}


                        {/* </Grid> */}
                    </Grid>

                    
                </Grid>

                {/* For custom RS Dialog: */}
                <FriendSearchPopup
                openPopup={this.state.openFriendSearch} // This.state syntax(?) (https://a-carreras-c.medium.com/building-custom-modals-in-your-react-js-app-15718434527a)
                toggleOpenClosed={this.state.toggleFriendSearchPopup}>
                </FriendSearchPopup>

                {/* For Popover w/ helper */}
                {/* <FriendSearchPopup
                popoverState={this.popoverState}>
                </FriendSearchPopup> */}
            </div>
        )}
}

export default withRouter(ChatCenter);