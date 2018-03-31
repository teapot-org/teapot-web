import {replace} from 'react-router-redux'

import axios from '../http-common'

export const signUp = (email, name, password, firstName, lastName, description) => async (dispatch) => {
  try {
    const signUpResp = await axios({
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