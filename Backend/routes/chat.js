const chatController = require('../controllers/chatController');
const { protect } = require('../middleware/auth');

const router = require('express').Router();

router.post('/message', protect, chatController.sendMessage);
router.get('/history', protect, chatController.getChatHistory);
router.delete('/clear', protect, chatController.clearChat);

module.exports = router;