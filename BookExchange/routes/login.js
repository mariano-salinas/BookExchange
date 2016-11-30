var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var User = require('../models/user');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    var user = new User({
        login: req.body.username,
        username: req.body.username
    });
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            user.save(function(err, saved_message, count) {
              if (err) { return res.send(500, 'Error occurred: database error.'); }
              res.redirect('/');
            });
        });
    });

});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/home/posts');
});

router.get('/logout', function(req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
