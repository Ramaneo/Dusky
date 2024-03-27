const express = require('express');
const router = express.Router();
const {getLocalStores,getStoreData, getSubscribedStores} = require ('../controllers/StoreController')

router.post('/get_local_stores', getLocalStores); // get stores 'name' and 'store_id' within your area.
router.post('/get_subscribed_stores', getSubscribedStores); // get stores with an array of 'store_id's.
router.post('/get_store_data', getStoreData); // get info about a specific store  Returns every information except 'owner'.

module.exports = router;