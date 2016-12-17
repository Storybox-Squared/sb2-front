var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

// render assets page
router.get('/', ensureLoggedIn, function (req, res, next) {
    return res.render('assets', {title: 'SB2 Assets', controller: 'assetsController'});
});

// render asset page
router.get('/:id', ensureLoggedIn, function (req, res, next) {
    return res.render('asset', {title: 'SB2 Assets', controller: 'assetController'});
});

module.exports = router;