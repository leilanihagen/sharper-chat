import React, { useContext, createContext, useState } from "react";
import fakeAuth from './fakeAuth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
  
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}




  // const AuthButton = withRouter(({ history }) => (
  //   fakeAuth.isAuthenticated
  //     ? <p>
  //         Welcome! <button onClick={() => {
  //           fakeAuth.signout(() => history.push('/'))
  //         }}>Sign out</button>
  //       </p>
  //     : <p>You are not logged in.</p>
  // ))

  // export default useAuth;