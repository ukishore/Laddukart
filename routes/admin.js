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
        res.render('admin/home', {layout:'adminLayout', csrfToken: req.csrfToken(), orders: orders, users: users, laddus: laddus});
      });
    });
  });
});

router.get('/dispatch/:id', isLoggedIn, function(req, res, next) {
  let id = req.params.id;
  Order.findByIdAndUpdate(id, {$set : {isDispatched: true}}, function(err , out) {
    if (err) {
      return res.write('Unable to update shit!');
    }
    res.redirect('/admin/')
  })
});

router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/admin/signin');
});

router.get('/signin', isNotLoggedIn, function (req, res, next) {
    var messages = req.flash('error');
    res.render('admin/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});


router.post('/addLaddu', isLoggedIn, function(req, res, next) {
  uploadImage(req, res);
  let product = new Product({
    title: req.body.ladduNameInput,
    ingredients: req.body.ingredientsInput,
    howTo: req.body.recipyInput,
    price: req.body.priceInput,
    imagePath: '/images/'+req.body.ladduNameInput+'.jpg'
  })
  product.save(function(err, laddu) {
    if (err) {
      res.write('Unable to add laddu');
    }
    res.redirect('/admin/')
  })
});

function uploadImage(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let ladduFile = req.files.imageInput;
  ladduFile.mv('public/images/'+req.body.ladduNameInput+'.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
  });
}

router.post('/signin', passport.authenticate('admin.local.signin', {
    failureRedirect: '/admin/signin',
    failureFlash: true
}), function (req, res, next) {
  res.redirect('/admin/');
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