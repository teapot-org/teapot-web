import {SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS} from '../constants/actionTypes'

const initialState = {
  authenticating: false,
  user: {
    token: null,
    profile: null
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...initialState,
        authenticating: true
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        user: action.payload
      };
    case SIGN_IN_FAILURE:
      return initialState;
    default:
      return state;
  }
}