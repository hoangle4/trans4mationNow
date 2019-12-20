const router = require('express').Router();

const eventRoutes = require('./events.js');
const apiAuth = require('./auth');
const apiBlog = require('./blog');
// const apiProfile = require('./profile');
const apiUsers = require('./users');

// API Routes
router.use('/auth', apiAuth);
router.use('/blog', apiBlog);
// router.use('/profile', apiProfile);
router.use('/users', apiUsers);
router.use('/events', eventRoutes);
module.exports = router;
