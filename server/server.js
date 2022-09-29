const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const db = require('./config/connection');

const userRoutes = require('./routes/api/userRoutes');
const eventRoutes = require('./routes/api/eventRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for parsing json data
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

// MongoDB Atlas connection string
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/harpDB';

// Wrap Mongoose around local connection
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start Node + Express server on Port 4000
    console.log('Mongoose connection successful!');
    app.listen(PORT, () => {
      console.log(`App running on localhost: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err, { message: 'Connection Failed' });
  });


