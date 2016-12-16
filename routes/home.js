var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

router.get('/', ensureLoggedIn, function (req, res) {
    console.log(req.session.token);
    return res.render('home', {title: 'SB2 Assets '});
});

module.exports = router;