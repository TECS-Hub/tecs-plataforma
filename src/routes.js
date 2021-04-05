import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect }  from 'react-router-dom';
import Home from './pages/home';

const Routes = () => (
    <Router>
        <Route exact path="/" component={Home}/>
    </Router>
);

export default Routes;