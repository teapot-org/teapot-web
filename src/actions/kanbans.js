import {getKanbanFailure, getKanbanRequest, getKanbanSuccess} from "../constants/actionTypes";
import axios from '../http-common';

export const getKanbanById = (id) => async (dispatch) => {
  try {
    dispatch(getKanbanRequest());
    const kanban = (await axios.get(`/kanbans/${id}`)).data;
    dispatch(getKanbanSuccess(kanban));
  } catch (e) {
    dispatch(getKanbanFailure());
  }
};