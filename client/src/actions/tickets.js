import * as api from '../api';


export const getTickets = () => async (dispatch) => {
  try {
    //console.log("Fetching Tickets from Server");
    const { data } = await api.fetchTickets();
    const action = { type: 'FETCH_ALL', payload: data }
    dispatch(action);
  } catch (error) {
    console.log(error.message)
  }

}

export const createTicket = (ticket) => async (dispatch) => {
  try {
    const { data } = await api.createTicket(ticket);
    const action = { type: 'CREATE', payload: data };
    dispatch(action);
  } catch (error) {
    // console.log("Action Create Ticket");
    console.log(error.message);
  }
};

export const updatedTicket = (ticket) => async (dispatch) => {
  try {
    const { data } = await api.updatedTicket(ticket);
    const action = { type: 'UPDATE', payload: data };
    dispatch(action);
  } catch (error) {
    //console.log("Error in UpdatedTicket")
    console.log(error.message);
  }
};

