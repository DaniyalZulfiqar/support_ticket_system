const ticketReducer = (tickets = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return tickets.map((ticket) => ticket._id === action.payload._id ? action.payload : ticket);
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...tickets, action.payload];
    default:
      return tickets;
  }
}

export default ticketReducer;