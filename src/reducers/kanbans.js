import {GET_KANBAN_FAILURE, GET_KANBAN_REQUEST, GET_KANBAN_SUCCESS} from '../constants/actionTypes'

const initialState = {
  isLoading: false,
  kanban: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_KANBAN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_KANBAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kanban: action.payload
      };
    case GET_KANBAN_FAILURE:
      return initialState;
    default:
      return state;
  }
}