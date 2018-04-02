import React from 'react'
import {Route, Switch} from "react-router";
import {Container} from 'semantic-ui-react'

import AuthorizedRoute from "../../widgets/AuthorizedRoute";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import ProfilePage from "../../pages/ProfilePage";
import SignUpPage from "../../pages/SignUpPage";
import Error404Page from "../../pages/Error404Page";

export default () => (
  <Container fluid>
    <Switch>
      <AuthorizedRoute path="/" exact component={HomePage}/>
      <Route path="/sign-in" exact component={SignInPage}/>
      <Route path="/sign-up" exact component={SignUpPage}/>
      <Route path="/profile" exact component={ProfilePage}/>
      <Route path="/profile/:username" exact component={ProfilePage}/>
      <Route component={Error404Page}/>
    </Switch>
  </Container>
);