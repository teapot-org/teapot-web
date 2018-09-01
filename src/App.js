import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);
export default App;
