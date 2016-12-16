var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

// Get the user profile
router.get('/', ensureLoggedIn, function (req, res, next) {
    return res.render('assets', {title: 'SB2 Assets', controller: 'assetsController'});
});

module.exports = router;