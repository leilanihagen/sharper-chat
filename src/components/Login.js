import { Avatar, Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'

const Login=()=>{

    const paperStyle={padding : 20, height : '70vh', width : 280, margin : '20px auto'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar>?</Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeHolder='Enter username'/>
                <TextField label='Password' placeHolder='Enter password'/>
            </Paper>
        </Grid>
    )
}

export default Login