import { Avatar, Grid, Paper, TextField, Button, Box } from '@material-ui/core'
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
                <TextField label='Username' placeHolder='Enter username' fullWidth required/>
                <TextField label='Password' placeHolder='Enter password' type='password' fullWidth required/>
                <Box mt={5}>
                    <Button variant='contained' type='submit' color='primary' margin={'20px 30px'} fullWidth>Sign in</Button>
                </Box>
                <Box display='flex' mt={4}>
                    <Box flexGrow={1} mt={2, 1}>Not a user yet?</Box>
                    <Button variant='contained' color='secondary'>Sign up!</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Login