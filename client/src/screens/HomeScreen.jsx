// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tile } from '@rneui/themed';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.tile}>
        <Tile
          imageSrc={{uri:'https://cdn-icons-png.flaticon.com/512/10729/10729101.png',}}
          title='Tickets'
          titleStyle={{  textAlign: 'center' }}
          onPress={() => navigation.navigate('Ticket List')}
          width={250}
          height={300}
        />
        </View>
        <View style={styles.tile}>
        <Tile
          imageSrc={{ uri:'https://cdn-icons-png.flaticon.com/512/1698/1698587.png',}}
          title='Create Ticket'
          titleStyle={{  textAlign: 'center' }}
          onPress={() => navigation.navigate('New Ticket')}
          width={250}
          height={300}
        />
        </View>
  </View>
  );
};


const styles = StyleSheet.create({
  tile: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'grey'
  },
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    margin:10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default HomeScreen;
