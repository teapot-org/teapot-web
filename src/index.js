import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import store from './store'
import history from './history'
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();