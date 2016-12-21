import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Post from './components/Posts';
const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="posts/:id" component={Post} />
    </Route>
  </Router>
);

export default renderRoutes;
