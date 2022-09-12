const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userControllers');

const { User, Event } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, [
      '_id',
      'firstName',
      'lastName',
      'username',
      'email',
      'password',
    ]);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    if (!req.body.email || req.body.username) {
      res.status(400).json('malformed request body');
      return;
    }
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
    };
    // check if username is already in the database
    const usernameExists = await User.find({ username: newUser.username });
    if (usernameExists.length > 0) {
      res.status(400).json({
        message: 'This username is taken. Please enter a different username.',
        usernameExists,
      });
      return;
    }
    // check if email is already in the database
    const emailExists = await User.find({ email: newUser.email });
    if (emailExists.length > 0) {
      res.status(400).json({
        message:
          'This email is already registered. Please enter a different email',
        emailExists,
      });
      return;
    }
    // otherwise, create the new user
    const newUserData = await User.create({
      ...newUser,
    });
    res.status(200).json(newUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findById(req.params.id, [
      'firstName',
      'lastName',
      'username',
      'email',
    ]);
    if (!userData) {
      res.sendStatus(404);
      return;
    }

    const user = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      username: userData.username,
      email: userData.email,
    };
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a specific user's reservations

// DELETE a user by id
router.delete('/:id', async (req, res) => {
  try {
    const updates = [];

    const user = await User.findById(req.params.id);
    if (!user) {
      res.sendStatus(404);
      return;
    }
    updates.push(user.delete());

    await Promise.all(updates);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;