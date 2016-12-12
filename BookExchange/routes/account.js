var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

/* GET posts listings. */
router.get('/settings', restrict, function(req, res, next) {
  res.render('settings');
});

router.get('/posts', restrict, function(req,res, next){
    User.findOne({login: req.session.passport.user}, function(err, user, count){
      Post.find({username:user.username}, function(err, posts, count){
        console.log(posts);
        res.render('edit', {'posts': posts, 'user': user});
      });
    });
});

router.post('/settings', restrict, function(req,res){
  User.update({login: req.session.passport.user}, {
      username: req.body.newUsername,
      phone_number: req.body.phonenumber,
      school: req.body.schoolname
  }, function(err, numberAffected, rawResponse) {
    console.log(err,numberAffected, rawResponse);
     res.redirect('/home/posts');
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