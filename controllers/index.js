const router = require('express').Router();

const userRoutes = require('./user');

const homeRoutes = require('./homeRoutes');

const wishRoutes = require('./wishList');



router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/wishlist', wishRoutes);
 

module.exports = router;