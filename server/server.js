const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for parsing json data
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start Node + Express server on Port 4000
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on localhost: ${PORT}`);
  });
});


