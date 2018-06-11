export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const signInRequest = () => ({type: SIGN_IN_REQUEST});
export const signInSuccess = (user) => ({type: SIGN_IN_SUCCESS, payload: user});
export const signInFailure = () => ({type: SIGN_IN_FAILURE});
export const signOut = () => ({type: SIGN_OUT});

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUserRequest = () => ({type: GET_USER_REQUEST});
export const getUserSuccess = (user) => ({type: GET_USER_SUCCESS, payload: user});
export const getUserFailure = () => ({type: GET_USER_FAILURE});

export const GET_KANBAN_REQUEST = 'GET_KANBAN_REQUEST';
export const GET_KANBAN_SUCCESS = 'GET_KANBAN_SUCCESS';
export const GET_KANBAN_FAILURE = 'GET_KANBAN_FAILURE';

export const getKanbanRequest = () => ({type: GET_KANBAN_REQUEST});
export const getKanbanSuccess = (kanban) => ({type: GET_KANBAN_SUCCESS, payload: kanban});
export const getKanbanFailure = () => ({type: GET_KANBAN_FAILURE});

export const GET_TICKET_LISTS_REQUEST = 'GET_TICKET_LISTS_REQUEST';
export const GET_TICKET_LISTS_SUCCESS = 'GET_TICKET_LISTS_SUCCESS';
export const GET_TICKET_LISTS_FAILURE = 'GET_TICKET_LISTS_FAILURE';

export const getTicketListsRequest = () => ({type: GET_TICKET_LISTS_REQUEST});
export const getTicketListsSuccess = (ticketLists) => ({type: GET_TICKET_LISTS_SUCCESS, payload: ticketLists});
export const getTicketListsFailure = () => ({type: GET_TICKET_LISTS_FAILURE});

export const GET_TICKET_LIST_REQUEST = 'GET_TICKET_LIST_REQUEST';
export const GET_TICKET_LIST_SUCCESS = 'GET_TICKET_LIST_SUCCESS';
export const GET_TICKET_LIST_FAILURE = 'GET_TICKET_LIST_FAILURE';

export const getTicketListRequest = () => ({type: GET_TICKET_LIST_REQUEST});
export const getTicketListSuccess = (ticketList) => ({type: GET_TICKET_LIST_SUCCESS, payload: ticketList});
export const getTicketListFailure = () => ({type: GET_TICKET_LIST_FAILURE});

export const SHIFT_TICKET_LIST_REQUEST = 'SHIFT_TICKET_LIST_REQUEST';
export const SHIFT_TICKET_LIST_SUCCESS = 'SHIFT_TICKET_LIST_SUCCESS';
export const SHIFT_TICKET_LIST_FAILURE = 'SHIFT_TICKET_LIST_FAILURE';

export const shiftTicketListRequest = () => ({type: SHIFT_TICKET_LIST_REQUEST});
export const shiftTicketListSuccess = (payload) => ({type: SHIFT_TICKET_LIST_SUCCESS, payload});
export const shiftTicketListFailure = () => ({type: SHIFT_TICKET_LIST_FAILURE});

export const GET_TICKETS_REQUEST = 'GET_TICKETS_REQUEST';
export const GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS';
export const GET_TICKETS_FAILURE = 'GET_TICKETS_FAILURE';

export const getTicketsRequest = () => ({type: GET_TICKETS_REQUEST});
export const getTicketsSuccess = (tickets) => ({type: GET_TICKETS_SUCCESS, payload: tickets});
export const getTicketsFailure = () => ({type: GET_TICKETS_FAILURE});

export const SHIFT_TICKET_REQUEST = 'SHIFT_TICKET_REQUEST';
export const SHIFT_TICKET_SUCCESS = 'SHIFT_TICKET_SUCCESS';
export const SHIFT_TICKET_FAILURE = 'SHIFT_TICKET_FAILURE';

export const shiftTicketRequest = () => ({type: SHIFT_TICKET_REQUEST});
export const shiftTicketSuccess = (payload) => ({type: SHIFT_TICKET_SUCCESS, payload});
export const shiftTicketFailure = () => ({type: SHIFT_TICKET_FAILURE});

export const MOVE_TICKET_REQUEST = 'MOVE_TICKET_REQUEST';
export const MOVE_TICKET_SUCCESS = 'MOVE_TICKET_SUCCESS';
export const MOVE_TICKET_FAILURE = 'MOVE_TICKET_FAILURE';

export const moveTicketRequest = () => ({type: MOVE_TICKET_REQUEST});
export const moveTicketSuccess = (payload) => ({type: MOVE_TICKET_SUCCESS, payload});
export const moveTicketFailure = () => ({type: MOVE_TICKET_FAILURE});