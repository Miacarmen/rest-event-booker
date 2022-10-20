const { User } = require('../models');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// * TO-DO: populate users with associated reservations on query
// * TO-DO: hash user passwords

module.exports = {
  // GET all users
  getUsers: async (req, res) => {
    let users;
    try {
      users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Failed to load data records' });
    }
  },

  // GET single user by ID
  // and populate with their associated reservations
  getSingleUser: async (req, res) => {
    // const userId = req.params.id;
    let user;
    try {
      user = await User.findById({ _id: req.params.id });
    } catch (err) {
      res.status(500).json({ message: 'No User found with that ID' });
    }
    res.status(200).json({ user });
  },

  // CREATE new user
  createUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    let existingUser;
    // Check if email is already in database
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      return res.status(500).json({ message: 'Sign up failed, try again' });
    }
    // if email in db, throw error
    if (existingUser) {
      return res
        .status(500)
        .json({
          message:
            'This email is already associated with an account, try another email',
        });
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
      return res.status(500).json(err);
    }
    return res.status(200).json({ user: newUser });
  },

  // LOGIN user by ID
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    let existingUser;
    // Check if email is already in database
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      return res.status(500).json({ message: 'Login failed, try again' });
    }
    // if email not found in db OR entered password is incorrect
    if (!existingUser || existingUser.password !== password) {
      return res.status(4000).json({ message: 'Invalid credentials, please try again' });
    }
    return res.status(200).json({ token: jwt.sign({ email: existingUser.email, _id: existingUser._id }, 'Logged in!') });
  },

  // UPDATE user by ID
  // update bookings array if they book a new one

  // DELETE user by ID
  // and their associated bookings
  deleteUser: async (req, res) => {
    let user;
    try {
      user = await User.findOne({ _id: req.params.id });
      user.delete();
    } catch (err) {
      res.status(500).json({
        message: 'Failed to delete user',
      });
    }
    res.status(200).json({ message: 'User successfully deleted' });
  },
};
