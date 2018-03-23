import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'

import rootReducer from '../reducers'
import history from '../history'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history)
  ))
);

export default store;