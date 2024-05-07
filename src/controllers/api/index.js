// dependencies

const router = require('express').Router();

// import routes from api
const categoryRoutes = require('./Category');
const userRoutes = require('./User');
const eventRoutes = require('./Event');
const userBetRoutes = require('./UserBets');

// call routes
router.use('/category', categoryRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/tags', userBetRoutes);

module.exports = router;