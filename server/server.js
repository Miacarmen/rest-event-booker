const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const db = require('./config/connection');
const { User, Event } = require('./models');
const userRoutes = require('./routes/api/userRoutes');
const eventRoutes = require('./routes/api/eventRoutes');


const app = express();
const PORT = process.env.PORT || 4000;


// Middleware for parsing json data
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

const connectionString = 'mongodb+srv://carmen:FnXbYkMftDSle4A2@cluster0.emupinl.mongodb.net/eventbookerdb?retryWrites=true&w=majority';

// Wrap Mongoose around local connection 
mongoose.connect(connectionString).then(() => {
  // Start Node + Express server on Port 4000
  console.log('Mongoose connection successful!');
  app.listen(PORT, () => {
    console.log(`App running on localhost: ${PORT}`);
  });
}).catch(err => {
  console.log(err, { message: 'Connection Failed'});
});

  

