import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { SigninPage } from '../SigninPage';
import { SignupPage } from '../SignupPage';
import { ProfilePage } from '../ProfilePage';
import { Error404 } from '../errors/Error404';

const IndexPage = () => (
  <main>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/signin" exact component={SigninPage}/>
      <Route path="/signup" exact component={SignupPage}/>
      <Route path="/profile/:username" exact component={ProfilePage}/>
      <Route component={Error404}/>
    </Switch>
  </main>
);

export default IndexPage;
