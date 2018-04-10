import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import oauth from './oauth'
import users from './users'
import kanbans from './kanbans'

export default combineReducers({
  router,
  oauth,
  users,
  kanbans
});