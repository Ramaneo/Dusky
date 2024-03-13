const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  business: {type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true},
  date: { type: Date, default: Date.now},
  feedbackContent: {type: String, required:true},
  score: { type: Int32, required: true },
}, { collection: 'feedback' });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;