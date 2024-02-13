// screens/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
      <Button
        title="Tickets"
        onPress={() => navigation.navigate('Ticket List')}
      />
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
      <Button
        title="New Ticket"
        onPress={() => navigation.navigate('New Ticket')}
      />
      </View>
  </View>
  );
};

export default HomeScreen;
