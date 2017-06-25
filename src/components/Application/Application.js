import './styles.scss';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ProfilePage } from '../pages/ProfilePage';
import { Error404 } from '../pages/errors/Error404';

import { TopPanel } from '../widgets/TopPanel';

class Application extends React.Component {

  render() {
    return (
      <main className="Application">
        <TopPanel/>

        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route component={Error404}/>
        </Switch>
      </main>
    );
  }
}

export default Application;
