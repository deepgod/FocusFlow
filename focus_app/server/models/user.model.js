const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true, minLength:6 },
});

const User = mongoose.model('User', userSchema);

module.exports = user = mongoose.model('user', userSchema);
