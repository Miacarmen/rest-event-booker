const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const userRoutes = require('./routes/api/userRoutes');
const eventRoutes = require('./routes/api/eventRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
// Middleware for parsing json data
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

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


