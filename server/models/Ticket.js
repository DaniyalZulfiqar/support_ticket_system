import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
  title: String,
  name: String,
  email: String,
  photo: String,
  base64: String,
  description: String,
  status: String
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;