import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  ticketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  ticketDetails: {
    marginLeft: 10,
  },
  ticketName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ticketTitle: {
    fontSize: 14,
  },
});

export default styles;