import {GET_KANBAN_FAILURE, GET_KANBAN_REQUEST, GET_KANBAN_SUCCESS} from '../constants/actionTypes'

const initialState = {
  kanbans: {},
  isError: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_KANBAN_REQUEST:
      return {
        ...state,
        isError: false
      };
    case GET_KANBAN_SUCCESS:
      let ticketLists = [];
      if (state.kanbans[action.payload.id]) {
        ticketLists = state.kanbans[action.payload.id].ticketLists;
      }

      if (action.payload.hasOwnProperty('ticketLists')) {
        ticketLists = action.payload.ticketLists;
      }

      return {
        kanbans: {
          ...state.kanbans,
          [action.payload.id]: {
            ...action.payload,
            ticketLists
          }
        },
        isError: false
      };
    case GET_KANBAN_FAILURE:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
}