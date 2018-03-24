export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const signInRequest = () => ({type: SIGN_IN_REQUEST});
export const signInSuccess = (user) => ({type: SIGN_IN_SUCCESS, payload: user});
export const signInFailure = () => ({type: SIGN_IN_FAILURE});
export const signOut = () => ({type: SIGN_OUT});