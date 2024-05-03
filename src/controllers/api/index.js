// dependencies

const router = require('express').Router();

// import routes from api
const userRoutes = require('./User');
const eventRoutes = require('./Event');
const tagRoutes = require('./EventTag');

// call routes
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/tags', tagRoutes);

module.exports = router;