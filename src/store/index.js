import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/index'

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(thunk)
);

export default store;