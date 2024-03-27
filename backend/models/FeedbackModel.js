const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true},
  store: {type: mongoose.Schema.Types.ObjectId, required: true},
  date: { type: Date, default: Date.now},
  feedbackContent: {type: String, required:true},
  score: { type: Number, required: true },
}, { collection: 'feedback' });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;