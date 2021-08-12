import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({
    isAuthenticated, 
    component: Component,
    //We rename component to Component because we want to be clear that the Component
    //is a user defined React component, which should be named in Pascal
    ...routeProps
}) => {
    if (isAuthenticated) {
        //If the user exists, navigate to the component that was passed as props
        //We also want to pass all the routeProps so that they
        //will be available. routeProps is going to be an object that has:
        // path, exact, etc...
        return <Route {...routeProps} component={Component} />
    } else {
        //redirects to the sign in page
        return <Redirect to='/sign_in' />
    }
}

export default AuthRoute
