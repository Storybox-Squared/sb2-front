var express = require('express');
var request = require('request');
var jwt = require('jsonwebtoken');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

// gets the time until session expiry
function getExpiresIn(datetime) {
    var expiration = new Date(datetime).getTime() - Date.now();
    return (new Date(expiration).getMinutes() * 60) + new Date(expiration).getSeconds();
}

// get assets
router.get('/assets', ensureLoggedIn, function (req, res, next) {

    // gets the session from the request
    var session = req.session;

    // creates a json web token for authentication on sb2-x-api servers
    jwt.sign(session, 'secret', {expiresIn: getExpiresIn(session.cookie._expires)}, function (err, token) {

        if (err) {
            return res.json({success: false});
        } else {
            request(process.env.ASSETS_API_SERVER + '/assets?token=' + token, function (err, response, body) {
                return res.json(JSON.parse(body));
            });
        }
    });
});

// post asset
router.post('/assets', ensureLoggedIn, function (req, res, next) {

    // gets the session from the request
    var session = req.session;

    // creates a json web token for authentication on sb2-x-api servers
    jwt.sign(session, 'secret', {expiresIn: getExpiresIn(session.cookie._expires)}, function (err, token) {

        if (err) {
            return res.json({success: false});
        } else {
            delete req.body._id;
            request.post({
                url: process.env.ASSETS_API_SERVER + '/assets?token=' + token,
                form: req.body
            }, function (err, response, body) {
                return res.json(JSON.parse(body));
            });
        }
    });
});

// put asset
router.put('/assets', ensureLoggedIn, function (req, res, next) {

    // gets the session from the request
    var session = req.session;

    // creates a json web token for authentication on sb2-x-api servers
    jwt.sign(session, 'secret', {expiresIn: getExpiresIn(session.cookie._expires)}, function (err, token) {

        if (err) {
            return res.json({success: false});
        } else {
            request.put({
                url: process.env.ASSETS_API_SERVER + '/assets?token=' + token,
                form: req.body
            }, function (err, response, body) {
                return res.json(JSON.parse(body));
            });
        }
    });
});

// get asset by id
router.get('/assets/:id', ensureLoggedIn, function (req, res, next) {

    // gets the session from the request
    var session = req.session;

    // creates a json web token for authentication on sb2-x-api servers
    jwt.sign(session, 'secret', {expiresIn: getExpiresIn(session.cookie._expires)}, function (err, token) {

        if (err) {
            return res.json({success: false});
        } else {
            request(process.env.ASSETS_API_SERVER + '/assets/' + req.params.id + '?token=' + token, function (err, response, body) {
                return res.json(JSON.parse(body));
            });
        }
    });
});

module.exports = router;