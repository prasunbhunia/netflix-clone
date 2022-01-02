import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Browser, Signin, Signup } from './pages';
import IsUserRedirect, { ProtectedRoute } from './helpers/route';
import { UseAuthListener } from './hooks';

function app() {
    const { user } = UseAuthListener();

    return(
    <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={Routes.Browser} path = {Routes.SignIn}>
                <Signin />
            </IsUserRedirect>

            <IsUserRedirect user={user} loggedInPath={Routes.Browser} path = {Routes.SignUp}>
                <Signup />
            </IsUserRedirect>

            <ProtectedRoute user={user} path = {Routes.Browser}>
                <Browser />
            </ProtectedRoute>

            <IsUserRedirect user={user} loggedInPath = {Routes.Browser} path = {Routes.Home} exact>
                <Home />
            </IsUserRedirect>
        </Switch>
    </Router>
    );
}   

export default app;
