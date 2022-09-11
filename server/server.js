const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/index.html')));
}

app.use(routes);

// // Routes
// // send the index.html file always
// // app.get("/*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// //   });

// Start Node + Express server on Port 5000
db.once('open', () => {
    app.listen(PORT, () => console.log(`App running on localhost: ${PORT}`));
});