const mongoose = require('../db.js');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
  });

  module.exports = mongoose.model('User', userSchema);