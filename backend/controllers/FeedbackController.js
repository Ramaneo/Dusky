const Feedback = require("../models/FeedbackModel");

exports.submitFeedback = async (req,res) => {
    try {
        const feedback = new Feedback({
          user: req.body.user,
          business: req.body.business,
          feedbackContent: req.body.feedbackContent,
          score: req.body.score
        });
        const savedFeedback = await feedback.save();
        console.log("Feedback Registered: ", savedFeedback);
        res.send("Feedback Submitted.");
    }
    catch(error) {
        console.log(error);
        res.send("Feedback Submit Failed.");
    }
}

exports.reviewFeedback = async (req,res) => {
    try {
        const feedbackList = await Feedback.find({user: req.body.user});
        res.send(feedbackList);
    }
    catch(error) {
        console.log(error);
        res.send("No Feedback found");
    }
}

exports.analyzeFeedback = async (req,res) => {
    try {
        const feedbackList = await Feedback.find({business: req.body.business});
        res.send(feedbackList);
    }
    catch(error) {
        console.log(error);
        res.send("No Feedback found");
    }
}