import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers'
import history from '../history'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['router'],
  stateReconciler: autoMergeLevel2
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history)
  ))
);

export const persistor = persistStore(store);