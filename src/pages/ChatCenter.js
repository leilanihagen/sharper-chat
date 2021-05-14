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
import ChatList from '../components/ChatList'

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
            selectedChat: null,
            newChatFormVisible: false,
            username: null,
            chats: [],
        };

        this.toggleFriendSearchPopup.bind(this);
    };

    toggleFriendSearchPopup = () => {    
        this.setState({ openFriendSearch: !this.state.openFriendSearch })  
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

    // For Popover:
    // state = {
    //     anchorEl: null,
    //     setAnchorEl: null,
    // }
    // state = {
    //     openFriendSearch: false,
    //     setOpenFriendSearch: false,
    // }

    // For Popover with helper class:
    // state = {
    //     popoverState: {
    //         variant: 'popover',
    //         popupId: 'demoPopover',
    //     }
    // }

    // toggleFriendSearchPopup = () => {
    //     this.setState({
    //         friendSearchIsOpen: !(this.state.friendSearchIsOpen),
    //     })
    // }

    // handleClick = (event) => {
    //     this.setState({
    //         setAnchorEl: event.currentTarget,
    //     })
    // };
    
    // handleClose = () => {
    //     this.setState({
    //         setAnchorEl: null,
    //     })
    // };

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
                                            Chatrooms
                                            <Grid container item sm={1.5} direction="column" justify="flex-start">
                                                <Paper style={paperStyle}>Melinda</Paper>
                                                <Paper style={paperStyle}>Jack</Paper>
                                                <Paper style={paperStyle}>Elias</Paper>
                                                <Paper style={paperStyle}>Mine kule venner</Paper>
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

                    <Grid container item md>
                        {/* Chat conversations and language center area: */}
                        
                        <ChatList
                        newChatButtonController={this.newChatButtonClicked}
                        selectChatButtonController={this.selectChat}
                        chats={this.state.chats}
                        activeUser={this.state.username}
                        selectedChatIndex={this.state.selectedChat}>
                        </ChatList>

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