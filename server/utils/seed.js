// Establish db connection
const connection = require('../config/connection');
const { User, Event } = require('../models');

const { eventData, userData } = require('./data');
// const userData = require('./userData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Clean database
  // Drop existing events and users
  // await User.deleteMany({});
  await Event.deleteMany({});

  // collection() creates or selects instance of collection. Takes in collection name
  // insertOne() inserts single document into collection. Takes in object.
  // bulk create each model
  // const users = await User.collection.insertMany(userData);
  // console.log(users)
  const events = await Event.insertMany(eventData);

  // Log out seed data to indicate what should appear in the database
  // console.table(users);
  console.table(events);
  
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
