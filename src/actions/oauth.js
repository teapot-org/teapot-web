import axios from 'axios'
import {replace} from 'react-router-redux'

import {CLIENT_ID, CLIENT_SECRET, HOST} from '../constants/app'
import {signInFailure, signInRequest, signInSuccess} from '../constants/actionTypes'

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch(signInRequest());
    const tokenResponse = await axios({
      method: 'POST',
      url: HOST + '/oauth/token',
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'password',
        username: email,
        password: password
      }
    });
    const profileResponse = await axios({
      method: 'GET',
      url: HOST + '/users/search/find-by-email',
      params: {email}
    });

    const user = {
      token: tokenResponse.data.access_token,
      profile: profileResponse.data
    };
    dispatch(signInSuccess(user));
    dispatch(replace('/'));
  } catch (e) {
    dispatch(signInFailure());
  }
};

export const signOut = () => (dispatch) => {

};
