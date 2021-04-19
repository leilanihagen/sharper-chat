import { Container } from '@material-ui/core';
// import { Router } from 'express';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import ChatCenter from './pages/ChatCenter';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      isAuth: false,
      setIsAuth: false,  
    }
  }

  render() {

    return (
      <Router>
        <Route path="/" exact>
          <Login></Login>
        </Route>

         {/* Create a new ProtectedRoute for chat-center page: */}
        <ProtectedRoute path="/chat-center" component={ChatCenter} isAuth={this.state.isAuth} />
      </Router>
    );
  }
}


export default App;
