import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/login';
import Signup from '../components/signup';
import SinglePost from '../components/singlePost';
import Home from '../views/home';

function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/join" component={Signup} />
      <Route exact path="/post/:title" component={SinglePost} />
    </>
  );
}

export default Router;
