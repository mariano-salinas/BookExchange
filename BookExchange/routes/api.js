var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Account = mongoose.model('Account');


router.post('/post/create', function(req,res){
    User.findOne({login: req.session.passport.user}, function(err, user, count){
      var img = user.user_img === undefined ? 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png' : user.user_img;
      var post = new Post({
        title: req.body.postTitle,
        description: req.body.postDescription,
        class_number: req.body.classNumber,
        username: user.username,
        login: req.session.passport.user,
        user_img: img,
        created_at: new Date()
      });
      post.save(function(err, saved_message, count) {
        if (err) { return res.send(500, 'Error occurred: database error.'); }
      });
    });
});

router.post('/post/update', restrict, function(req, res){
  Post.update({ _id: req.body.postId }, { $set: { title: req.body.postTitle, description: req.body.postDescription }}, function(err, post, count){
    console.log('updating post', post);
  });
});

router.delete('/post/delete', restrict, function(req, res){
  Post.remove({ _id: req.body.postId }, function(err, post) {
    console.log('deleting post',post);
  });
});



router.get('/posts', restrict,  function(req, res) {
  Post.find({}, null, {sort: {date: -1}}, function(err, posts,count){
    res.json(posts);
  });
});

router.get('/users', restrict, function(req, res) {
  User.find({},function(err, users,count){
    res.json(users);
  });
});
router.get('/accounts', restrict,  function(req, res) {
  Account.find({},function(err, accounts,count){
    res.json(accounts);
  });
});

function restrict(req, res, next) {
  // if (req.session.passport) {
    next();
  // } else {
    // req.session.error = 'Access denied!';
    // res.redirect('/login');
  // }
}

module.exports = router;



