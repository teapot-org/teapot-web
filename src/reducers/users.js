import {GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS} from '../constants/actionTypes'

const initialState = {
  isLoading: false,
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case GET_USER_FAILURE:
      return initialState;
    default:
      return state;
  }
}