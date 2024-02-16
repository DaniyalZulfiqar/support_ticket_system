import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TicketStatus = ({ status }) => {
  let statusColor, statusText;

  // Set status color and text based on the status
  switch (status) {
    case 'Open':
      statusColor = '#008000'; // Base Green //'#FFA500'; // Orange
      break;
    case 'In Progress':
      statusColor = '#4682B4'; // Steel Blue
      break;
    case 'Closed':
      statusColor = '#FF0000';// Base Red //'#008000'; // Green
      break;
    default:
      statusColor = '#000000'; // Default color
      break;
  }

  return (
    <Text style={[styles.status, { backgroundColor: statusColor }]}>
      {status}
    </Text>
  );
};

const styles = StyleSheet.create({
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: 'flex-start', // Align the status to the start (left)
    color: '#ffffff', // Text color
  },
});

export default TicketStatus;
