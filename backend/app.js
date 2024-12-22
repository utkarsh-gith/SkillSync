const express = require('express');
const { connect } = require('./config/db.js');
const userRoutes = require('./routes/userRoute.js');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'  
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connect().catch((err) => {
  console.error('Failed to connect to the database:', err);
  process.exit(1);
});


app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

app.use('/users', userRoutes);

module.exports = app;
