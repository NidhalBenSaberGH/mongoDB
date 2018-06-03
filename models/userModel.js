const mongoose = require('../db.js');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    photos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo'
    }]
  });

  module.exports = mongoose.model('User', userSchema);