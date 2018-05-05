import {
  getKanbanSuccess,
  getTicketListsFailure,
  getTicketListsRequest,
  getTicketListsSuccess,
  shiftTicketListFailure,
  shiftTicketListRequest,
  shiftTicketListSuccess
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

export const shiftTicketList = (kanbanId, listId, position) => async (dispatch) => {
  try {
    dispatch(shiftTicketListRequest());
    await axios({
      method: 'PATCH',
      url: 'ticket-lists/shift',
      params: {
        list: listId,
        position
      }
    });
    dispatch(getKanbanTicketLists(kanbanId));
    dispatch(shiftTicketListSuccess({kanbanId, listId, position}))
  } catch (e) {
    dispatch(shiftTicketListFailure());
  }
};
