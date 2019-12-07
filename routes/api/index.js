const router = require('express').Router();

const eventRoutes = require('./events.js');
const apiAuth = require('./auth');
// const apiPosts = require('./posts');
// const apiProfile = require('./profile');
const apiUsers = require('./users');

// API Routes
router.use('/auth', apiAuth);
// router.use('/posts', apiPosts);
// router.use('/profile', apiProfile);
router.use('/users', apiUsers);
router.use('/events', eventRoutes);
module.exports = router;
