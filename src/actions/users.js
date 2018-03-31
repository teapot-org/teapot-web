import {replace} from 'react-router-redux'

import {getUserFailure, getUserRequest, getUserSuccess} from "../constants/actionTypes";
import axios from '../http-common';

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

export const signUp = (email, name, password, firstName, lastName, description) => async (dispatch) => {
  try {
    await axios({
      method: 'POST',
      url: '/users',
      data: {
        email: email,
        name: name,
        password: password,
        firstName: firstName,
        lastName: lastName,
        description: description
      }
    });

    dispatch(replace('/sign-in'));
  } catch (e) {
    console.log("SignUp failed");
  }
};