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
// router.get('/', getUsers);

// CREATE new user
// router.route('/signup').post(createUser);
router.post('/signup', createUser);

// GET user by ID
// /api/users/:userId
// router.route('/:id').get(getSingleUser)
router.get('/:id', getSingleUser);
// LOGIN user
router.post('/login', loginUser);

// UPDATE user by ID
// router.route('/:id').put(updateUser)

// DELETE user by ID
// router.route('/:id').delete(deleteUser);


module.exports = router;
