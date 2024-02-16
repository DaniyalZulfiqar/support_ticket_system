import axios from 'axios';

//const url = 'http://localhost:5000/tickets';
//const url = 'http://192.168.0.13:5000/tickets';
const url = 'http://192.168.0.141:5000/tickets'; // Library URL


//All the actions needs to be done using redux!

export const fetchTickets = () => axios.get(url);
export const createTicket = (newTicket) => axios.post(url, newTicket);
export const updatedTicket = (updatedTicket) => axios.patch(`${url}/${updatedTicket._id}`, updatedTicket);