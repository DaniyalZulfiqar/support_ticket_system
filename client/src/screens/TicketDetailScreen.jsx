// screens/TicketDetailScreen.js
import {React, useEffect }from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/tickets';
import useStyles from './StyleTicketDetailScreen';
import TicketStatus from './TicketStatus';

const findTicket= (tickets, id) => {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i]._id === id) {
      return tickets[i];
    }
  }
}


const TicketDetailScreen = ({route, navigation }) => {
  const styles = useStyles;
  const { ticket } = route.params;
  const tickets = useSelector((state) => state.tickets);



  const handleRespond = (ticketID) => {
    navigation.navigate('Update Ticket', {ticketID: ticketID});
  }
  currentTicket = findTicket(tickets, ticket);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.label}>Name: {currentTicket.name}</Text>
      <View style={styles.textGroup}>
        <Text style={styles.label}>Status: </Text>
        <TicketStatus status={currentTicket.status}/>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.emailLabel}>Email: </Text>
        <Text style={styles.text}>{currentTicket.email}</Text>
      </View>
      <Text style={styles.label}>Description: </Text>
      <Text style={styles.textIssue}>{currentTicket.description}</Text>
      {currentTicket.photo && <Image source={{ uri: currentTicket.photo }} style={styles.image} />}
      <Button title="Respond" onPress={() => handleRespond(currentTicket._id)} />
    </View>
  )
};

export default TicketDetailScreen;
