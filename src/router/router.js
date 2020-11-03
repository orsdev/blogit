import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login';
import Signup from '../components/signup';
import SinglePost from '../views/singlePost';
import Home from '../views/home';
import Page404 from '../views/404';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Signup} />
        <Route exact path="/post/:title" component={SinglePost} />
        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default Router;
