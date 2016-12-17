var express = require('express');
var passport = require("passport");
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

var env = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

/* GET home page. */
// Get the user profile
router.get('/', ensureLoggedIn, function (req, res, next) {
    res.redirect('home');
});

router.get('/login', function (req, res) {
    return res.render('login', {title: 'SB2 Assets', env: env, login: true});
});

// Perform session logout and redirect to homepage
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

// Perform the final stage of authentication and redirect
router.get('/callback', passport.authenticate('auth0', {failureRedirect: '/login'}), function (req, res) {
    req.session.token = "test token";
    res.redirect(req.session.returnTo || '/home');
});

module.exports = router;
