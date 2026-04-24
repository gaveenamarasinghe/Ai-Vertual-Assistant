const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = require('express').Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', protect, authController.getMe);
router.get('/logout', protect, authController.logout);

module.exports = router;