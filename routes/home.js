var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

// render home page
router.get('/', ensureLoggedIn, function (req, res) {
    return res.render('home', {title: 'SB2 Assets '});
});

module.exports = router;