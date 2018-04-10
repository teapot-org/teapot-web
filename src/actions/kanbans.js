import {getKanbanFailure, getKanbanRequest, getKanbanSuccess} from "../constants/actionTypes";
import axios from '../http-common';

export const getKanbanById = (id) => async (dispatch) => {
  try {
    dispatch(getKanbanRequest());
    const response = await axios.get(`/kanbans/${id}`);
    dispatch(getKanbanSuccess(response.data));
  } catch (e) {
    dispatch(getKanbanFailure());
  }
};