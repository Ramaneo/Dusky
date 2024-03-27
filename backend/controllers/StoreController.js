const Store = require('../models/StoreModel');
const Feedback = require('../models/FeedbackModel')

exports.getLocalStores = async (req,res) => {
    // req.loc -> location of the user to find the stores in.
    try {
      const localStores = await Store.find({location : req.body.loc}).select('store_id name');
      res.json({
        local_stores: localStores
      })
    }
    catch(error) {
      console.log(error)
      res.send("No stores found in your local area.")
    }
}
  
exports.getStoreData = async (req, res) => {
    // req.store_id -> id of that specific store.
    const store = await Store.findById(req.body.store_id, { owner: 0 });
    if(store) {
        const feedback_list = await Feedback.findById(req.body.store_id, { user: 0 });
        if(feedback_list) {
          var total_score = 0
          for (let i = 0; i < feedback_list.length; i++) {
            total_score = total_score + feedback_list[i].score
          }
          res.json({
            store: store,
            feedback_list: feedback_list,
            total_score: total_score
          })
        }
        else {
          res.json({
            store: store,
            feedback_list: 0,
            total_score: 0
          })
        }
    } else {
      res.send("Invalid StoreId.")
    }
};

exports.getSubscribedStores = async (req, res) => {
  // req.subscribed_stores -> list of UUIDs
  let storesArray = []
  for (let i = 0; i < req.body.subscribed_stores.length; i++) {
    var found_store = await Store.findById(req.body.subscribed_stores[i]).select('store_id name');
    if(found_store) {
      storesArray.push(found_store);
    }
  }
  if (storesArray.length == 0) {
    res.send("No subscribed stores.")
  }
  else {
    res.json({
      stores_list: storesArray
    })
  }
};


const DiscountCode = require('../models/DiscountCodeModel');

exports.verifyDiscountCode = async (req, res) => {
  const { code } = req.body;

  try {
    const discountCode = await DiscountCode.findOne({ code }).populate('user');
    if (!discountCode) {
      return res.status(404).send('Discount code not found.');
    }
    res.json({ message: 'Discount code verified successfully', discountPercent: discountCode.discountPercent });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error verifying discount code');
  }
};
