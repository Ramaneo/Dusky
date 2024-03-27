const mongoose = require('mongoose');

const discountCodeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  code: { type: String, required: true, unique: true },
  discountPercent: { type: Number, required: true }
}, { timestamps: true });

const DiscountCode = mongoose.model('DiscountCode', discountCodeSchema);

module.exports = DiscountCode;
