import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TicketListScreen from './src/screens/TicketListScreen';
import TicketDetailScreen from './src/screens/TicketDetailScreen';
import NewTicketScreen from './src/screens/NewTicket';
import UpdateTicketScreen from './src/screens/UpdateTicketScreen.jsx';
import 'react-native-gesture-handler';

import { getTickets } from './src/actions/tickets.js';

import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();


const MainComponent = () => {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(getTickets()); }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ticket List" component={TicketListScreen} />
        <Stack.Screen name="Ticket Details" component={TicketDetailScreen} />
        <Stack.Screen name="New Ticket" component={NewTicketScreen} />
        <Stack.Screen name="Update Ticket" component={UpdateTicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;