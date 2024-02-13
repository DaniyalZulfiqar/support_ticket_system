import express from 'express';
import { getTickets, createTicket, updateTicket } from '../controllers/tickets.js';
const router = express.Router();

router.get('/', getTickets);
router.post('/', createTicket);
router.patch('/:id', updateTicket);

export default router;