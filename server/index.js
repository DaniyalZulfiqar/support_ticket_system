import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import ticketRoutes from './routes/tickets.js';

const app = express();




app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// Connecting to express middleware
app.use('/tickets', ticketRoutes);

const CONNECTION_URL = "mongodb+srv://dandatabase:Daniyal3471@dandbcluster.krdkvso.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Runnning on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
