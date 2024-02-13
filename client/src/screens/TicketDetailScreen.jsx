// screens/TicketDetailScreen.js
import {React, useEffect }from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/tickets';


const findTicket= (tickets, id) => {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i]._id === id) {
      return tickets[i];
    }
  }
}


const TicketDetailScreen = ({route, navigation }) => {

  const { ticket } = route.params;
  const tickets = useSelector((state) => state.tickets);



  const handleRespond = (ticketID) => {
    navigation.navigate('Update Ticket', {ticketID: ticketID});
  }
  currentTicket = findTicket(tickets, ticket);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Name: {currentTicket.name}</Text>
      <Text>Status: {currentTicket.status}</Text>
      <Text>Email: {currentTicket.email}</Text>
      <Text>Description: {currentTicket.description}</Text>
      {currentTicket.photo && <Image source={{ uri: currentTicket.photo }} style={{ width: 300, height: 300 }} />}
      <Button title="Respond" onPress={() => handleRespond(currentTicket._id)} />
    </View>
  )
};

export default TicketDetailScreen;
