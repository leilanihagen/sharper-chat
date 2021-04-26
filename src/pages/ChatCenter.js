import { CardContent, Container, Grid, Icon } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { IconButton } from '@material-ui/core';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchField from "react-search-field";
import { Table, TableBody, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
                    {/* Main 2 compartments: Convo nav / Eng tools + convo box */}
                    
                <Grid container item>
                {/* Conversation navigator/friend manager */}
                    <Grid container
                    direction="column"
                    justify="center"
                    alignItems="flex-start">

                        <Grid container item diretion="row">
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
                    
                
                        <SearchField>
                                placeholder="Search..."
                                {/* onChange={onChange} */}
                                searchText="This is initial search text"
                                classNames="test-class"
                        </SearchField>

                        <TableBody>
                            {/* Insert based on friends and/or filtered search */}

                            <TableRow>Melinda</TableRow>
                            <TableRow>Jack</TableRow>
                            <TableRow>Elias</TableRow>
                        </TableBody>
                    </Grid>
                </Grid>

                <Grid container item>
                    
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
        )}
}

export default withRouter(ChatCenter);