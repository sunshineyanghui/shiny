import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router';
import App from './components/App';
import Hello1 from './components/Hello1';
import Hello2 from './components/Hello2';
const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/hello1' component={Hello1} />
    <Route path='/hello2' component={Hello2} />
  </Router>
);

export default renderRoutes;
