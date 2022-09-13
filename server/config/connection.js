const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
try {
   mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/eventbookerDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (error) {
  console.error('Connection failed');
}

// Export connection
module.exports = mongoose.connection;
