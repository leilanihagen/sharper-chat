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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

// protected
class ChatCenter extends Component {

    // state = {
    //     friendSearchIsOpen: false,
    // };
    
    // RS Popover:
    state = {      
        name: "React",      
        popoverOpen: false    
    };

    togglePopover = this.togglePopover.bind(this);


    togglePopover() {    
        this.setState({ popoverOpen: !this.state.popoverOpen })  
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
                                                    id="mypopover">
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
                        
                        <Button variant="contained" color="primary"> Hahahahhhhhhhhhhhhh</Button>
                        <Button variant="contained" color="primary"> cool</Button>

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

                {/* For Dialog: */}
                {/* <FriendSearchPopup
                open={friendSearchIsOpen}
                onClose={this.toggleFriendSearchPopup}>
            
                </FriendSearchPopup> */}

                {/* RS Popover: */}
                <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="mypopover"
                toggle={this.togglePopover}
                >
                    <PopoverHeader>This is popover title</PopoverHeader>
                    <PopoverBody>
                        This is simple popover content
                    </PopoverBody>
                </Popover>

                {/* For Popover w/ helper */}
                {/* <FriendSearchPopup
                popoverState={this.popoverState}>
                </FriendSearchPopup> */}
            </div>
        )}
}

export default withRouter(ChatCenter);