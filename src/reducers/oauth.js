import {SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_OUT} from '../constants/actionTypes'

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  accessToken: null,
  profile: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}