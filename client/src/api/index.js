import axios from 'axios';


const url = 'https://helpdesk-tb9n.onrender.com/tickets';

//All the actions needs to be done using redux!

export const fetchTickets = () => axios.get(url);
export const createTicket = (newTicket) => axios.post(url, newTicket);
export const updatedTicket = (updatedTicket) => axios.patch(`${url}/${updatedTicket._id}`, updatedTicket);