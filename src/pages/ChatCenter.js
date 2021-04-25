import { CardContent, Container, Grid, Icon } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { IconButton } from '@material-ui/core';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchField from "react-search-field";
import { Table, TableBody } from '@material-ui/core';
import { Card } from 'react';

// protected
class ChatCenter extends Component {
    render() {
        const listCardStyle = {
            display : 'inline-block',
            height : '50%',
            width : '50%',
        }
        return(
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            >
                <Grid container direction="column">
                    {/* Conversation navigator/friend manager */}
                    <Grid container direction="row">
                        <IconButton>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <PeopleAltRoundedIcon></PeopleAltRoundedIcon>
                                Friends
                            </Grid>
                        </IconButton>
                        <IconButton>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <PersonAddIcon></PersonAddIcon>
                                Add Friend
                            </Grid>
                        </IconButton>
                    </Grid>
                    <SearchField>
                            placeholder="Search..."
                            {/* onChange={onChange} */}
                            searchText="This is initial search text"
                            classNames="test-class"
                    </SearchField>
                    <TableBody>
                        {/* Insert based on friends */}
                    </TableBody>
                </Grid>
                <Grid container direction="column">
                    {/* English tools and Conversation */}
                </Grid>
            </Grid>
        )}
}

export default withRouter(ChatCenter);