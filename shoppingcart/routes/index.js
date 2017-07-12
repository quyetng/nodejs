var express = require('express');
var router = express.Router();
var passport = require('passport');
var Product = require('../models/product');
var csrf = require('csurf');
var csrfProtection = csrf();

router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, docs){
	var productChunks = [];
	var chunkSize = 3;
	for(var i = 0; i < docs.length; i += chunkSize)
	{
		productChunks.push(docs.slice(i, i + chunkSize));
	}
	res.render('shop/index', { title: 'Fish Shopping', products: productChunks });
  });
  
});

router.get('/user/sigup', function(req, res, next){
	var messages = req.flash('error');
	res.render('user/sigup', {csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length > 0});
});
/*
router.post('/user/sigup', function(req, res, next){
	res.render('/user/profile');
});
*/

router.post('/user/sigup', passport.authenticate('local.sigup', {
	successRedirect: '/user/profile',
	failureRedirect: '/user/sigup',
	failureFlash: true
}));

router.get('/user/profile', function(req, res, next){
	res.render('user/profile');
});
module.exports = router;
