var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Order = require('../models/order');
var User = require('../models/user');
var Cart = require('../models/cart');
var Product = require('../models/product')
var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/',isLoggedIn ,function (req, res, next) {

  Order.find({}, function(err, orders) {
    if (err) {
        return res.write('Error getting orders!');
    }
    User.find({}, function(err, users) {
      if (err) {
        return res.write('Error getting users!');
      }
      Product.find({}, function (err, laddus) {
        if (err) {
          return res.write('Error getting Laddus!');
        }
        res.render('admin/home', {layout:'adminLayout', orders: orders, users: users, laddus: laddus});
      });
      
    });
   
  });
});

router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/admin/signin');
});

router.get('/signin', isNotLoggedIn, function (req, res, next) {
    var messages = req.flash('error');
    res.render('admin/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});



router.post('/signin', passport.authenticate('admin.local.signin', {
    failureRedirect: '/admin/signin',
    failureFlash: true
}), function (req, res, next) {
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
        console.log(req.session.oldUrl)
    } else {
        res.redirect('/admin/');
    }
});


module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() && req.user.type === 'admin') {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/admin/signin');
}

function isNotLoggedIn(req, res, next) {
  if (!req.isAuthenticated() || req.user.type !== 'admin') {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/admin');
}