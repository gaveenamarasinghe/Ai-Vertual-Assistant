import mongoose, { Schema, model, models } from 'mongoose';

const reminderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a reminder title']
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Reminder = models.Reminder || model('Reminder', reminderSchema);

export default Reminder;