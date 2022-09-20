const { User } = require('../models');
const { v4: uuidv4 } = require('uuid');

// const tempUserData = require('../utils/userData.json');

module.exports = {
  // GET all users
  getUsers: (req, res) => {
    User.find({}, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Failed to load data records' });
      }
      res.status(200).json(result);
    });
  },
  //   const getUsers = async (req, res) => {
  //     const users = User
  //   }

  // GET single user by ID
  // and populate with their associated reservations
  //   getSingleUser: (req, res) => {
  //      tempUserData.findOne({ _id: req.params.id }, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).json({ message: 'Failed to load data records' });
  //       }
  //       res.status(200).json(result);
  //     });
  //   },
  getSingleUser: async (req, res) => {
    const userId = req.params.id;
    let user;
    try {
      user = await User.findById(userId);
    } catch (err) {
      console.error(err, { message: 'No User found with that ID' });
    }
    res.json({ user });
  },

  // CREATE new user
  // createUser: (req, res) => {
  //   const newUser = new User({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //   });
  //   newUser.save();

  //   if (newUser) {
  //     res.json(newUser);
  //   } else {
  //     console.log('Failed to save credentials');
  //     res.status(500).json('Failed to save credentials');
  //   }
  // },

  //   createUser: (req, res) => {
  //     const { firstName, lastName, email, password } = req.body;

  //     const newUser = {
  //       id: uuidv4(),
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     };
  //     tempUserData.push(newUser);
  //     res.status(200).json({ user: newUser });
  //   },

  createUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    let existingUser;
    // Check if email is already in database
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      console.error(err, { message: 'Sign up failed, try again' });
    }
    // if email in db, throw error
    if (existingUser) {
      console.error(
        'This email is already associated with an account, try another email'
      );
    }
    // else create the new user and save to db
    const newUser = new User({
      id: uuidv4(),
      firstName,
      lastName,
      email,
      password,
    });
    try {
      await newUser.save();
    } catch (err) {
      console.log(err);
    }

    res.status(201).json({ user: newUser });
  },

  //   loginUser: (req, res) => {
  //     const { email, password } = req.body;

  //     const existingUser = tempUserData.find((u) => u.email === email);
  //     if (!existingEmail || existingUser.password !== password) {
  //       console.error('Could not find user credentials in the database.');
  //     }
  //     res.json({ message: 'Logged in!' });
  //   },

  // UPDATE user by ID
  // update bookings array if they book a new one

  // DELETE user by ID
  // and their associated bookings
};
