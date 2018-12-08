var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Order = require('../models/order');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/',isLoggedIn ,function (req, res, next) {
  res.render('admin/home', {layout:'adminLayout'});
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