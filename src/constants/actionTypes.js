export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const signInRequest = () => ({type: SIGN_IN_REQUEST});
export const signInSuccess = (user) => ({type: SIGN_IN_SUCCESS, payload: user});
export const signInFailure = () => ({type: SIGN_IN_FAILURE});
export const signOut = () => ({type: SIGN_OUT});

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUserRequest = () => ({type: GET_USER_REQUEST});
export const getUserSuccess = (user) => ({type: GET_USER_SUCCESS, payload: user});
export const getUserFailure = () => ({type: GET_USER_FAILURE});