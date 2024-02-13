import React from "react";
import Form from "../Form/Form";

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

const Ticket = () => {
  const tickets = useSelector((state) => state.tickets);
  if (tickets.length) {

  }
}

export default Ticket;