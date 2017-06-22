import './styles.scss';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProfilePage } from './pages/ProfilePage';
import { Error404 } from './pages/errors/Error404';

import { Panel } from './widgets/Panel';

const Application = () => (
  <main className="Application">
    <Panel/>

    <hr/>

    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/registration" component={RegistrationPage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route component={Error404}/>
    </Switch>
  </main>
);

export default Application;
