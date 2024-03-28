const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  user_type: {type: String, required:true},
  password: { type: String, required: true },
  salt: { type: String, required: true },
  followers: { type: Number, required: true, default: 0 },
  followers_list: [{type: mongoose.Schema.Types.ObjectId}],
  following_list: [{type: mongoose.Schema.Types.ObjectId}],
  subscribed_stores_list: [{type: mongoose.Schema.Types.ObjectId}]
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;