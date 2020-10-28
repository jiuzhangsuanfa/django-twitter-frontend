import { CircularProgress } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));

const Router = () => (
  <Suspense
    fallback={<CircularProgress />}
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/register" component={Register} /> */}
      {/* <Route exact path="/test" component={Test} /> */}
    </Switch>
  </Suspense>
);

export default Router;
