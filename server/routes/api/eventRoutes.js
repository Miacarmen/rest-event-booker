// Event has multiple user reservations
const router = require('express').Router();
// import controllers
const {
    getEvents,
    getSingleEvent,
    createEvent,
    // updateEvent,
    // deleteEvent,
} = require('../../controllers/eventControllers');

// ROUTES

// GET all events
// CREATE event
// /api/events
router.route('/').get(getEvents);
router.route('/').post(createEvent);

// GET, UPDATE, DELETE event by ID
// /api/events/:eventId
router.route('/:eventId').get(getSingleEvent)
// .put(updateEvent).delete(deleteEvent);

module.exports = router;