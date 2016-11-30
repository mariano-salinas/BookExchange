var mongoose = require('mongoose');

var Book = mongoose.Schema({
  title: String,
  ISBN: String,
  author: String,
  imgUrl: String
});

module.exports = mongoose.model('Book', Book);