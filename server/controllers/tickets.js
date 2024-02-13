// All the handlers (logic) etc for our routes goes here to avoid any complex code in routes file
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

import Ticket from "../models/Ticket.js";


export const getTickets = async (req, res) => {
  try {
    console.log("Server Side: Grabbing Ticket");
    const savedTickets = await Ticket.find();
    res.status(200).json(savedTickets);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createTicket = async (req, res) => {
  const ticket = req.body;
  const newTicket = new Ticket(ticket);
  try {
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.log("Create New Ticket Error");
    res.status(409).json({ message: error.message })
  }
}

export const updateTicket = async (req, res) => {
  const { id: _id } = req.params;
  const ticket = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    console.log("Update Ticket Server Side");
    console.log(_id);
    return res.status(404).send('No ticket found with the given ID')
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(_id, ticket, { new: true });
  res.json(updatedTicket);
}

export default router;