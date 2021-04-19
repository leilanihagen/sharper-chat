import { Grid } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';

// protected
class ChatCenter extends Component {
    render() {
        return
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            >

            </Grid>;
    }
}

export default withRouter(ChatCenter);