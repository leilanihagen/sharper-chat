import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import Greet from './components/Greet';
import Login from './components/Login'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Login/>

        {/* <Box display="flex" justifyContent="center">

          <Container>
            <h1>English Learning Tools</h1>

            <h1>Conversation</h1>
          </Container>

          <Box display="flex" flexDirection="column">
          <List>
            <ListItem button>
            </ListItem>
            <ListItem button>
            </ListItem>
          </List>
          </Box>

        </Box> */}
      </div>
    );
  }
}


export default App;
