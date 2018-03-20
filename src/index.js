import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import Application from './widgets/Application';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Application/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();