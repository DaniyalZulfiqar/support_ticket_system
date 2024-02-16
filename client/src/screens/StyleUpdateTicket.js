import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  textIssue: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }, shadowOpacity: 0.1,
    shadowRadius: 4,
    alignSelf: 'auto', // Center the ticket description horizontally
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignSelf: 'auto', // Center the ticket description horizontally
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 16,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  }
});

export default styles;


