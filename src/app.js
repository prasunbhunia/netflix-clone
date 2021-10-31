import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import Home from './pages/home';


function app() {
    return(
    <Router>
        <Route exact path = {Routes.Home} component={Home} />
    </Router>
    );
}

export default app;
