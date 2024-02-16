// screens/TicketListScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import useStyles from './StyleTicketListScreen';
import TicketStatus from '../components/TicketStatus/TicketStatus';

const TicketListScreen = ({ navigation }) => {
  const styles = useStyles;
  const tickets = useSelector((state) => state.tickets);

  const onPressTicket = (ticketID) => {
      navigation.navigate('Ticket Details', {id: ticketID});
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
