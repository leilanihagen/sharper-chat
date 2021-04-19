// import { Router } from 'express';
import React from 'react';
import { Router, Link, Route, Switch } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = document.getElementById('App')

ReactDOM.render(
  // <Router>
  //   <Route path="/" exact>
  //     <button>Login</button>
  //   </Route>
  // </Router>,
  // app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
