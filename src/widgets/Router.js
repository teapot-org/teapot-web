import React from 'react'
import {Route, Switch} from "react-router-dom";

import HomePage from "../pages/HomePage";
import Error404Page from "../pages/Error404Page";

class Router extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route component={Error404Page}/>
        </Switch>
      </main>
    );
  }
}

export default Router;

