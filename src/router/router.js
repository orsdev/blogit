import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/home';

function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}

export default Router;
