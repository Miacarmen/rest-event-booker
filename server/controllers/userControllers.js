const { User } = require('../models');
const { v4: uuidv4 } = require('uuid');

const tempUserData = [
    {
      id: "1",
      firstName: 'Some',
      lastName: 'One',
      username: 'Someone',
      email: 'someone@email.com',
      password: 'password',
      eventsBooked: [],
    },
    {
      id: "2",
      firstName: 'Someone',
      lastName: 'Else',
      username: 'SomeoneElse',
      email: 'someoneelse@email.com',
      password: 'password',
      eventsBooked: ['Surfing'],
    },
  ];

module.exports = {
  // GET all users
//   getUsers: (req, res) => {
//     User.find({}, (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ message: 'Failed to load data records' });
//       }
//       res.status(200).json(result);
//     });
//   },
getUsers: (req, res) => {
    res.json({ users: tempUserData });
},

  // GET single user by ID
  // and populate with their associated reservations
//   getSingleUser: (req, res) => {
//     User.find({ _id: req.params.id }, (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ message: 'Failed to load data records' });
//       }
//       res.status(200).json(result);
//     });
//   },
getSingleUser: (req, res) =>  {
    const userId = req.params.id;
    const user = tempUserData.find(u => {
        return u.id === userId;
    })
    res.json({ user })
},


  // CREATE new user
//   createUser: (req, res) => {
//     const newUser = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       username: req.body.username,
//       email: req.body.email,
//     });
//     newUser.save();

//     if (newUser) {
//       res.json(newUser);
//     } else {
//       console.log('Failed to save credentials');
//       res.status(500).json('Failed to save credentials');
//     }
//   },

createUser: (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;

    const newUser = {
        id: uuidv4(),
        firstName,
        lastName,
        username,
        email,
        password
    };
    tempUserData.push(newUser);
    res.status(200).json({user: newUser})
},

  loginUser: (req, res) => {
    const { email, password } = req.body;

    const existingUser = tempUserData.find(u => u.email === email );
    if(!existingEmail || existingUser.password !== password) {
            console.error('Could not find user credentials in the database.');
    } 
    res.json({message: 'Logged in!'});
  },

  // UPDATE user by ID
  // update bookings array if they book a new one

  // DELETE user by ID
  // and their associated bookings
};
