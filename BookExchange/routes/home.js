var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

router.get('/posts', restrict, function(req,res, next){
  Post.find({})
    .sort({'created_at': 'desc'})
    .exec(function(err, posts){
      res.render('posts', {'posts': posts});
  });
});


function restrict(req, res, next) {
  if (req.session.passport) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

module.exports = router;