// menentukan endpoint API atau rute aplikasi

const { signup, login, logout } = require('../controllers/authController');
const { authenticate, getProfile } = require('../controllers/profileController');

const router = require('express').Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(logout);

router.route('/profile').get(authenticate, getProfile);

module.exports = router;