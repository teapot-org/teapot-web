import {
  GET_TICKET_LIST_SUCCESS,
  GET_TICKET_LISTS_FAILURE,
  GET_TICKET_LISTS_REQUEST,
  GET_TICKET_LISTS_SUCCESS
} from '../constants/actionTypes'

const initialState = {
  ticketLists: {},
  isError: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TICKET_LISTS_REQUEST:
      return {
        ...state,
        isError: false
      };
    case GET_TICKET_LISTS_SUCCESS:
      let ticketLists = {};

      action.payload.forEach((ticketList) => {
        let tickets = [];
        if (state.ticketLists[ticketList.id]) {
          tickets = state.ticketLists[ticketList.id].tickets;
        }

        if (ticketList.hasOwnProperty('tickets')) {
          tickets = ticketList.tickets;
        }

        ticketLists[ticketList.id] = {
          ...ticketList,
          tickets
        };
      });

      return {
        ticketLists: {
          ...state.ticketLists,
          ...ticketLists
        },
        isError: false,
      };
    case GET_TICKET_LISTS_FAILURE:
      return {
        ...state,
        isError: true
      };
    case GET_TICKET_LIST_SUCCESS:
      let tickets = [];
      if (state.ticketLists[action.payload.id]) {
        tickets = state.ticketLists[action.payload.id].tickets;
      }

      if (action.payload.hasOwnProperty('tickets')) {
        tickets = action.payload.tickets;
      }

      return {
        ticketLists: {
          ...state.ticketLists,
          [action.payload.id]: {
            ...action.payload,
            tickets
          }
        },
        isError: false
      };
    default:
      return state;
  }
}