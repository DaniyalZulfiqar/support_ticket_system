// screens/TicketListScreen.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const TicketListScreen = ({ navigation }) => {

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
          <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>Title: {item.title} </Text>
            <Text>Name: {item.name}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        </TouchableOpacity>
      )}
        />
    </View>
  );
};

export default TicketListScreen;
