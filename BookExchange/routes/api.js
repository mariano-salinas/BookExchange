var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = mongoose.model('Book');
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Account = mongoose.model('Account');


router.post('/book/create', function(req,res){
    var book = new Book({
      title: req.body.bookTitle,
      ISBN: req.body.bookISBN,
      author: req.body.bookAuthor
    });
    book.save(function(err, saved_message, count) {
      if (err) { return res.send(500, 'Error occurred: database error.'); }
      res.redirect('/login');
    });
});

router.get('/books', function(req, res) {
  var author = req.query.author;

  var query = {};
  if (author !== undefined){
    query.author = author;
  }
  Book.find(query,function(err, books,count){
    res.json(books);
  });
});

router.post('/post/create', function(req,res){
    User.findOne({login: req.session.passport.user}, function(err, user, count){
      console.log(user.user_img);
      var img = user.user_img === undefined ? 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png' : user.user_img;
      var post = new Post({
        title: req.body.postTitle,
        description: req.body.postDescription,
        username: user.username,
        user_img: img,
        created_at: new Date()
      });
      post.save(function(err, saved_message, count) {
        if (err) { return res.send(500, 'Error occurred: database error.'); }
      });
    });
});

router.get('/posts', function(req, res) {
  Post.find({}, null, {sort: {date: -1}}, function(err, posts,count){
    res.json(posts);
  });
});

router.get('/users', function(req, res) {
  User.find({},function(err, users,count){
    res.json(users);
  });
});
router.get('/accounts', function(req, res) {
  Account.find({},function(err, accounts,count){
    res.json(accounts);
  });
});

module.exports = router;



