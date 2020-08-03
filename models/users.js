const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  contact: String,
  name: String,
  username: String,
  avatar: String,
  password: String
})

module.exports = mongoose.model('users', userSchema)
