const express = require('express');
const cors = require('cors');
const app = express();
const connectToMongo = require('./database/db');
const seatsRoutes = require('./routes/seats');
const authRoutes = require('./routes/auth');


const port = 5000

app.use(express.json());
app.use(cors());

// database
connectToMongo();

// routes
app.use('/api/seats', seatsRoutes);
app.use('/api/auth', authRoutes);

// Port
app.listen(port, () => {
  console.log(`BOOK MY SCREEN backend is  listening at http://localhost:${port}`);
});
