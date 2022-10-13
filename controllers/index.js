const router = require('express').Router();
const path = require('path');

const userRoutes = require('./user');

const homeRoutes = require('./homeRoutes');

const wishRoutes = require('./wishList');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/wishList', wishRoutes);

module.exports = router;