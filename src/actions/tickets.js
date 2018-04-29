import {getTicketListSuccess, getTicketsFailure, getTicketsRequest, getTicketsSuccess} from "../constants/actionTypes";
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