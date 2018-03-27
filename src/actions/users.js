import axios from '../http-common';

import {getUserFailure, getUserRequest, getUserSuccess} from "../constants/actionTypes";

export const getUserByUsername = (username) => (dispatch) => {
  dispatch(getUserRequest());
  axios({
    method: 'GET',
    url: '/users/search/find-by-name',
    params: {
      name: username
    }
  }).then(response => {
    dispatch(getUserSuccess(response.data));
  }).catch(e => {
    dispatch(getUserFailure());
  });
};