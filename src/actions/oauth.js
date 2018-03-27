import axios from '../http-common'

import {CLIENT_ID, CLIENT_SECRET} from '../constants/app'
import {signInFailure, signInRequest, signInSuccess} from '../constants/actionTypes'

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch(signInRequest());
    const tokenResponse = await axios({
      method: 'POST',
      url: '/oauth/token',
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
      url: '/users/search/find-by-email',
      params: {email}
    });

    dispatch(signInSuccess({
      accessToken: tokenResponse.data.access_token,
      profile: profileResponse.data
    }));
  } catch (e) {
    dispatch(signInFailure());
  }
};