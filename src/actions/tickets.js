import {
  getTicketListSuccess,
  getTicketsFailure,
  getTicketsRequest,
  getTicketsSuccess,
  shiftTicketFailure,
  shiftTicketRequest,
  shiftTicketSuccess,
  moveTicketSuccess,
  moveTicketRequest,
  moveTicketFailure
} from "../constants/actionTypes";
import axios from '../http-common';

export const getTicketListTickets = (id) => async (dispatch, getState) => {
  try {
    dispatch(getTicketsRequest());
    const ticketList = getState().ticketLists.ticketLists[id];
    const response = await axios.get(ticketList._links.tickets.href);
    const tickets = response.data._embedded.tickets;
    dispatch(getTicketsSuccess(tickets));

    ticketList.tickets = tickets.map((ticket) => ticket.id);
    dispatch(getTicketListSuccess(ticketList));
  } catch (e) {
    dispatch(getTicketsFailure());
  }
};

export const shiftTicket = (listId, ticketId, position) => async (dispatch, getState) => {
  try {
    dispatch(shiftTicketRequest());
    await axios({
      method: 'PATCH',
      url: 'tickets/shift',
      params: {
        ticket: ticketId,
        position
      },
      headers: {
        'Authorization': `Bearer ${getState().oauth.accessToken}`
      }
    });
    dispatch(getTicketListTickets(listId));
    dispatch(shiftTicketSuccess({listId, ticketId, position}))
  } catch (e) {
    dispatch(shiftTicketFailure());
  }
};

export const moveTicketToAnotherList = (sourceListId, destinationListId, ticketId, position) => async (dispatch, getState) => {
  try {
    dispatch(moveTicketRequest());
    await axios({
      method: 'PATCH',
      url: 'tickets/move',
      params: {
        ticket: ticketId,
        list: destinationListId,
        position
      },
      headers: {
        'Authorization': `Bearer ${getState().oauth.accessToken}`
      }
    });
    dispatch(getTicketListTickets(sourceListId));
    dispatch(getTicketListTickets(destinationListId));
    dispatch(moveTicketSuccess({sourceListId, destinationListId, ticketId, position}))
  } catch (e) {
    dispatch(moveTicketFailure());
  }
};