// const router = require('express').Router();
const router = require('express').Router();

// import routes
// const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');
// endpoints
// router.use('/events', eventRoutes);
router.use('/users', userRoutes);

module.exports = router;