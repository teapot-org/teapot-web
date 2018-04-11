import React from 'react'
import {Route, Switch} from "react-router";

import AuthorizedRoute from "../../widgets/AuthorizedRoute";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import ProfilePage from "../../pages/ProfilePage";
import SignUpPage from "../../pages/SignUpPage";
import KanbanPage from "../../pages/KanbanPage";
import Error404Page from "../../pages/Error404Page";

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/sign-in" exact component={SignInPage}/>
    <Route path="/sign-up" exact component={SignUpPage}/>
    <AuthorizedRoute path="/profile" exact component={ProfilePage}/>
    <Route path="/profile/:username" exact component={ProfilePage}/>
    <Route path="/kanban/:id" exact component={KanbanPage}/>
    <Route component={Error404Page}/>
  </Switch>
);