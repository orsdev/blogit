import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login';
import Signup from '../components/signup';
import SinglePost from '../views/singlePost';
import Home from '../views/home';
import Page404 from '../views/404';
import Page500 from '../views/500';
import NewPost from '../views/new-post';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Signup} />
        <Route exact path="/post/:id" component={SinglePost} />
        <Route
          exact
          path="/post/admin/new-post"
          component={NewPost}
        />
        <Route path="/500" component={Page500} />
        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default Router;
