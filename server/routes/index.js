const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const incidentRoutes = require('./incident-routes');
const priorityRoutes = require('./priority-routes');
const statusRoutes = require('./status-routes');
const userRoutes = require('./user-routes');

router.use('/comment', commentRoutes);
router.use('/incident', incidentRoutes);
router.use('/priority', priorityRoutes);
router.use('/status', statusRoutes);
router.use('/user', userRoutes);

module.exports = router;