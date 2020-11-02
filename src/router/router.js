import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/login';
import Home from '../views/home';

function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </>
  );
}

export default Router;
