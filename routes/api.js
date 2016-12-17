var express = require('express');
var http = require('http');
var jwt = require('jsonwebtoken');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

// create options for http request to sb2-x-api
function buildOptions(route, method, token) {
    return {
        host: 'localhost',
        port: 3001,
        path: route,
        method: method,
        headers: {
            'x-access-token': token
        }
    }
}

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
            var options = buildOptions('/assets', 'GET', token);

            // make the request to the sb2-x-api server
            var request = http.request(options, function (response) {
                var str = "";
                response.on('data', function (data) {
                    str += data;
                });
                response.on('end', function () {
                    return res.json(JSON.parse(str));
                })
            });

            request.end();
        }
    });
});

// post asset
router.get('/assets', ensureLoggedIn, function (req, res, next) {

    // gets the session from the request
    var session = req.session;

    // creates a json web token for authentication on sb2-x-api servers
    jwt.sign(session, 'secret', {expiresIn: getExpiresIn(session.cookie._expires)}, function (err, token) {

        if (err) {
            return res.json({success: false});
        } else {
            var options = buildOptions('/assets', 'GET', token);

            // make the request to the sb2-x-api server
            var request = http.request(options, function (response) {
                var str = "";
                response.on('data', function (data) {
                    str += data;
                });
                response.on('end', function () {
                    return res.json(JSON.parse(str));
                })
            });

            request.end();
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
            var options = buildOptions('/assets/' + req.params.id, 'GET', token);

            // make the request to the sb2-x-api server
            var request = http.request(options, function (response) {
                var str = "";
                response.on('data', function (data) {
                    str += data;
                });
                response.on('end', function () {
                    return res.json(JSON.parse(str));
                })
            });

            request.end();
        }
    });
});

module.exports = router;