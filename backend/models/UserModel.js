const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  user_type: {type: String, required:true},
  password: { type: String, required: true },
  salt: { type: String, required: true }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;