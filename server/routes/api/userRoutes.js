const router = require('express').Router();
// import controllers
const {
  getUsers,
  getSingleUser,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  cancelReservation,
} = require('../../controllers/userControllers');

// ROUTES

// GET all users
// /api/users
router.route('/').get(getUsers);

// GET user by ID
// /api/users/:userId
router.route('/:id').get(getSingleUser);

// LOGIN user
// /api/users/login
// router.route('/login').post(loginUser);

// CREATE new user
// /api/users/signup
router.route('/signup').post(createUser);

// UPDATE user by ID
// router.route('/:id').put(updateUser)

// DELETE user by ID
// /api/users/:id
router.route('/:id').delete(deleteUser);

module.exports = router;
