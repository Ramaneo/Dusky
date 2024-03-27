const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  owner: { type: String, required: true, unique: true },
  sub_count: { type: Number, required: true, default: 0},
  total_score: {type: Number, required: false, default: 0},
  location: { type: String, required: true },
  menu: { type: Map, of: Number, required: false }
}, { collection: 'stores' });

const StoreSchema = mongoose.model('Store', storeSchema);

module.exports = StoreSchema;