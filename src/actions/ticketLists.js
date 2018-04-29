import {
  getKanbanSuccess,
  getTicketListsFailure,
  getTicketListsRequest,
  getTicketListsSuccess
} from "../constants/actionTypes";
import axios from '../http-common';

export const getKanbanTicketLists = (id) => async (dispatch, getState) => {
  try {
    dispatch(getTicketListsRequest());
    const kanban = getState().kanbans.kanbans[id];
    const response = await axios.get(kanban._links.ticketLists.href);
    const ticketLists = response.data._embedded.ticketLists;
    dispatch(getTicketListsSuccess(ticketLists));

    kanban.ticketLists = ticketLists.map((ticketList) => ticketList.id);
    dispatch(getKanbanSuccess(kanban))
  } catch (e) {
    dispatch(getTicketListsFailure());
  }
};