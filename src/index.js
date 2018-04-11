import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react';

import {persistor, store} from './store'
import history from './history'
import Application from './components/Application';
import Loading from './components/widgets/Loading';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Application/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();