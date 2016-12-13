var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

router.get('/posts', restrict, function(req,res, next){
  Post.find({})
    .sort({'created_at': 'desc'})
    .exec(function(err, posts){
        datedPosts = posts;
        if (posts.length !== 0){
          datedPosts = posts.filter(function(post){
            return post.class_number.length >= 3;
          });
        }
        datedPosts.forEach(function(post){
          post.users_viewed += 1;
        });
      res.render('posts', {'posts': datedPosts});
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