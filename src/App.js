import { Container } from '@material-ui/core';
// import { Router } from 'express';
import React, { Component } from 'react';
import { Router, withRouter, Link, Route, Switch, History } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import ChatCenter from './pages/ChatCenter';
import SignUp from './components/SignUp';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      isAuth: true,  //!!!
      setIsAuth: false,  
    }
  }

  changeIsAuth = (val) => {
    this.setState({
      isAuth: val
    })
  }

  printIsAuth = () => {
    console.log(this.isAuth)
  }

  render() {
    return (
      <div>
        {/* <Switch> */}
        {/* <ul>
          <li><Link to='/'>Login Page</Link></li>
          <li><Link to='/chat-center'>Chat Center Page</Link></li>
          <li><button onClick={this.printIsAuth}>print inAuth</button></li>
        </ul> */}
          {/* <Route path='/' exact> */}
            {/* Dont use function notation */}
            {/* <Login changeIsAuth={this.changeIsAuth}></Login>
          </Route> */}
          {/* <Route exact path='/' component={Login} /> */}
          <Route path='/login' component={Login}></Route>
          {/* <Route path='/login' component={Login}></Route> */}
          <Route path='/signup' component={SignUp}></Route>
          {/* By default render ProtectedRoute for chat-center page: */}
          {/* <ProtectedRoute path='/chat-center' component={ChatCenter} isAuth={this.state.isAuth} changeIsAuth={this.changeIsAuth}/> */}
          <Route path='/chat-center' component={ChatCenter} isAuth={this.state.isAuth} changeIsAuth={this.changeIsAuth}/>
          {/* Else render login */}
        {/* </Switch> */}
      </div>
    );
  }
}


export default withRouter(App);
