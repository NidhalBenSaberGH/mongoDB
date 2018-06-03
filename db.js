var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstMongoDB');

module.exports = mongoose;