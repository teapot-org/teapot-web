import React from 'react'
import {Switch, Route} from "react-router";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import Error404Page from "../../pages/Error404Page";

class Router extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/sign-in" exact component={SignInPage}/>
          <Route component={Error404Page}/>
        </Switch>
      </main>
    );
  }
}

export default Router;

