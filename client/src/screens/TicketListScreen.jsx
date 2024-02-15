// screens/TicketListScreen.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import useStyles from './StyleTicketListScreen';
import TicketStatus from './TicketStatus';

const TicketListScreen = ({ navigation }) => {
  const styles = useStyles;
  const tickets = useSelector((state) => state.tickets);

//  const [tickets, setTickets] = useState([
//    { id: 1, title: 'Issue 1', status: 'Open' },
//    { id: 2, title: 'Issue 2', status: 'Closed' },
    // Add more ticket data as needed
//  ]);

 // const handlePressTicket = (ticketId) => {
 //   navigation.navigate('TicketDetail', { ticketId });
 // };

  const onPressTicket = (ticketID) => {
      navigation.navigate('Ticket Details', {ticket: ticketID});
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
      data={tickets}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressTicket(item._id)}>
          <View style={styles.ticketItem}>
          <TicketStatus status={item.status} />
            <View style={styles.ticketDetails}>
              <Text style={styles.ticketTitle}>Title: {item.title} </Text>
              <Text style={styles.ticketName}>Creator: {item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
        />
    </View>
  );
};

export default TicketListScreen;
