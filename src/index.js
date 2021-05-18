// import { Router } from 'express';
import React from 'react';
import { Router, Link, Route, Switch } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2BcW8PvAoXguJQBPImdhR0HjTohosthE",
  authDomain: "sharper-chat-db.firebaseapp.com",
  projectId: "sharper-chat-db",
  storageBucket: "sharper-chat-db.appspot.com",
  messagingSenderId: "679513931389",
  appId: "1:679513931389:web:ed0d04c0594ccf3bdbfb14"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;

// firebase.initializeApp({
//   apiKey: "AIzaSyC2BcW8PvAoXguJQBPImdhR0HjTohosthE",
//   authDomain: "sharper-chat-db.firebaseapp.com",
//   projectId: "sharper-chat-db",
//   storageBucket: "sharper-chat-db.appspot.com",
//   messagingSenderId: "679513931389",
//   appId: "1:679513931389:web:ed0d04c0594ccf3bdbfb14"
// });

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
