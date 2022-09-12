const router = require('express').Router();
// import controllers
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  cancelReservation,
} = require('../../controllers/userControllers');

// ROUTES

// GET all users
// CREATE new user
// /api/users
router.route('/').get(getUsers).post(createUser);

// GET, UPDATE, DELETE user by ID
// /api/users/:userId
router.route('/:Id').get(getSingleUser).put(updateUser).delete(deleteUser);

// DELETE, UPDATE user reservation
// /api/users/:userId/reservations/:reservationId
router
  .route('/:id/reservations/:reservationId')
  .put(updateUser)
  .delete(cancelReservation);

module.exports = router;
