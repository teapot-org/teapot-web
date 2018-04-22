import {getKanbanFailure, getKanbanRequest, getKanbanSuccess} from "../constants/actionTypes";
import axios from '../http-common';

export const getKanbanById = (id) => async (dispatch) => {
  try {
    dispatch(getKanbanRequest());
    const kanban = (await axios.get(`/kanbans/${id}`)).data;
    kanban.ticketLists = (await axios.get(kanban._links.ticketLists.href)).data._embedded.ticketLists;
    dispatch(getKanbanSuccess(kanban));
  } catch (e) {
    dispatch(getKanbanFailure());
  }
};