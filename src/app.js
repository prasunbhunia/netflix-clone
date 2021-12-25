import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Browser, Signin, Signup } from './pages';


function app() {
    return(
    <Router>
        <Route exact path = {Routes.Home} component={Home} />
        <Route exact path = {Routes.Browser} component={Browser} />
        <Route exact path = {Routes.SignIn} component={Signin} />
        <Route exact path = {Routes.SignUp} component={Signup} />
    </Router>
    );
}   

export default app;
