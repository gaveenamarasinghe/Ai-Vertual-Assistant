const userController = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = require('express').Router();

router.get('/reminders', protect, userController.getReminders);
router.post('/reminders', protect, userController.createReminder);
router.put('/reminders/:id', protect, userController.updateReminder);
router.delete('/reminders/:id', protect, userController.deleteReminder);

module.exports = router;