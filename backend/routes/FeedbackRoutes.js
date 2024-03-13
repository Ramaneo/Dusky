const express = require('express');
const router = express.Router();
const {submitFeedback,reviewFeedback,analyzeFeedback} = require ('../controllers/FeedbackController')

router.post('/submit_feedback', submitFeedback);
router.post('/review_feedback',reviewFeedback); // for users
router.post('/analyze_feedback', analyzeFeedback); // for businesses

module.exports = router;