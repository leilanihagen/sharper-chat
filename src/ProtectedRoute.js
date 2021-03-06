import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({isAuth: isAuth, component: Component, changeIsAuth: changeIsAuth, ...rest}) {
    return <Route {...rest} render={(props)=> {
        if (isAuth) {
            return <Component/>
        }
        else{
            return <Redirect to={{pathname: '/', state: {from: props.location}}} /> // Return info abt. where being redirected from
        }
    }
    } />;
}

export default ProtectedRoute;