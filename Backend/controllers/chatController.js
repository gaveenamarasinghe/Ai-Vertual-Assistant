const Chat = require('../models/Chat');

// @desc    Send a message and get AI response
// @route   POST /api/chat/message
// @access  Private
exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.id;

    // Find or create chat session
    let chat = await Chat.findOne({ user: userId });

    if (!chat) {
      chat = new Chat({ user: userId, messages: [] });
    }

    // Add user message
    chat.messages.push({
      role: 'user',
      content: message
    });

    // TODO: Integrate with AI service (e.g., OpenAI, Vapi, etc.)
    // For now, return a placeholder response
    const aiResponse = "I'm your AI assistant. My integration is coming soon!";

    // Add AI response
    chat.messages.push({
      role: 'assistant',
      content: aiResponse
    });

    await chat.save();

    res.status(200).json({
      success: true,
      data: {
        message: aiResponse,
        role: 'assistant'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get chat history
// @route   GET /api/chat/history
// @access  Private
exports.getChatHistory = async (req, res) => {
  try {
    const chat = await Chat.findOne({ user: req.user.id });

    res.status(200).json({
      success: true,
      data: chat ? chat.messages : []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Clear chat history
// @route   DELETE /api/chat/clear
// @access  Private
exports.clearChat = async (req, res) => {
  try {
    await Chat.findOneAndDelete({ user: req.user.id });

    res.status(200).json({
      success: true,
      message: 'Chat history cleared'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};