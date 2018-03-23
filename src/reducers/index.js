import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import oauth from './oauth'

export default combineReducers({
  router,
  oauth
});