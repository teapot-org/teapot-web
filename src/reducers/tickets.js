import {GET_TICKETS_FAILURE, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS} from '../constants/actionTypes'

const initialState = {
  tickets: {},
  isError: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      return {
        ...state,
        isError: false
      };
    case GET_TICKETS_SUCCESS:
      let tickets = {};

      action.payload.forEach((ticket) => {
        tickets[ticket.id] = ticket;
      });

      return {
        tickets: {
          ...state.tickets,
          ...tickets
        },
        isError: false,
      };
    case GET_TICKETS_FAILURE:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
}