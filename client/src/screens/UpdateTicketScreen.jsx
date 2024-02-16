import React from 'react';
import { SafeAreaView, View, Text, Button, Image, TextInput, ScrollView } from 'react-native';
import {RadioButton} from 'react-native-paper';
import {updatedTicket} from '../actions/tickets';
import useStyles from './StyleUpdateTicket';

import { useDispatch, useSelector } from 'react-redux';

const findTicket= (tickets, id) => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i]._id === id) {
        return tickets[i];
      }
    }
  }

const UpdateTicketScreen = ({route, navigation}) => {

    const dispatch = useDispatch();
    const styles = useStyles;
    var ResponseEmail = "";

    // Fetching Tickets Data
    const tickets = useSelector((state) => state.tickets);

    // Grab the selected ticket
    const { ticketID } = route.params;
    currentTicket = findTicket(tickets, ticketID);

    // Update Ticket Status, Send Response to Ticket Creater, Go Back to List Screen
    const handleRespond = (ticket) => {
        console.log(ResponseEmail);
        navigation.navigate('Ticket List');

    }

    // Update Backend DB with status change
    const handleRadioButtonPress = (currentTicket, input) => {

        currentTicket.status = input;
        dispatch(updatedTicket(currentTicket));

    }

  return (

    <SafeAreaView>
        <ScrollView>
            <View style={{ flex: 1, padding: 20 }}>
                <RadioButton.Group
                    style = {styles.radioGroup}
                    onValueChange={(value) => handleRadioButtonPress(currentTicket, value)}
                    value={currentTicket.status}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.status}>Status:   </Text>
                        <View style={styles.radioItem}>
                            <Text>Open</Text>
                        <RadioButton value="Open" status="checked" color="green"  />

                        </View>
                        <View style={styles.radioItem}>
                        <Text>In Progress</Text>
                        <RadioButton value="In Progress" color="blue" />

                        </View>
                        <View style={styles.radioItem}>
                        <Text>Closed</Text>
                        <RadioButton value="Closed" color="red" />
                        </View>
                    </View>
                </RadioButton.Group>
                <Text style={styles.status}>Issue: </Text>
                <Text style={styles.textIssue}>{currentTicket.description}</Text>
                {currentTicket.photo && <Image source={{ uri: currentTicket.photo }} style={ styles.image} />}
                <Text style={styles.label}>Email: {currentTicket.name}, {currentTicket.email}</Text>
                <TextInput
                    style={styles.text}
                    onChangeText={(text) => { ResponseEmail = text;}}
                    placeholder="Please Share Your Updates with the Ticket Creator"
                    multiline
                />
                <Button title="Update" onPress={() => handleRespond({currentTicket})} />
            </View>
        </ScrollView>
    </SafeAreaView>

  )
};

export default UpdateTicketScreen;