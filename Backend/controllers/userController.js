const Reminder = require('../models/Reminder');

// @desc    Get all reminders
// @route   GET /api/user/reminders
// @access  Private
exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({ user: req.user.id }).sort({ date: 1 });

    res.status(200).json({
      success: true,
      data: reminders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create reminder
// @route   POST /api/user/reminders
// @access  Private
exports.createReminder = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const reminder = await Reminder.create({
      user: req.user.id,
      title,
      description,
      date
    });

    res.status(201).json({
      success: true,
      data: reminder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update reminder
// @route   PUT /api/user/reminders/:id
// @access  Private
exports.updateReminder = async (req, res) => {
  try {
    let reminder = await Reminder.findById(req.params.id);

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: 'Reminder not found'
      });
    }

    // Make sure user owns reminder
    if (reminder.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this reminder'
      });
    }

    reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: reminder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete reminder
// @route   DELETE /api/user/reminders/:id
// @access  Private
exports.deleteReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: 'Reminder not found'
      });
    }

    // Make sure user owns reminder
    if (reminder.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this reminder'
      });
    }

    await reminder.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Reminder deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};