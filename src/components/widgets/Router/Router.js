import React from 'react'
import {Route, Switch} from "react-router";
import AuthorizedRoute from "../../widgets/AuthorizedRoute";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import Error404Page from "../../pages/Error404Page";

class Router extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <AuthorizedRoute path="/" exact component={HomePage}/>
          <Route path="/sign-in" exact component={SignInPage}/>
          <Route path="/sign-up" exact component={SignUpPage}/>
          <Route component={Error404Page}/>
        </Switch>
      </main>
    );
  }
}

export default Router;

