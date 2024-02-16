// screens/TicketDetailScreen.js
import { React }from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import useStyles from './StyleTicketDetailScreen';
import TicketStatus from '../components/TicketStatus/TicketStatus';

const findTicket = (tickets, id) => {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i]._id === id) {
      return tickets[i];
    }
  }
}


const TicketDetailScreen = ({route, navigation }) => {

  const tickets = useSelector((state) => state.tickets);
  const styles = useStyles;

  // Grab Selected Ticket
  const { id } = route.params;
  currentTicket = findTicket(tickets, id);

  // Move to Update Ticket Page
  const handleRespond = (ticketID) => {
    navigation.navigate('Update Ticket', {ticketID: ticketID});
  }

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
      <Button
        title="Respond"
        disabled ={currentTicket.status === "Closed"? true : false}
        onPress={() => handleRespond(currentTicket._id)}
      />
    </View>

  )
};

export default TicketDetailScreen;
