var express = require('express');
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var request = require('request');
var qs = require('querystring');


var User = require('../models/user.js');


// *** login required *** //
function ensureAuthenticated(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
        return res.status(400).send({
            message: 'You did not provide a JSON Web Token in the authorization header.'
        });
    }

    // decode the token
    var header = req.headers.authorization.split(' ');
    var token = header[1];
    var payload = jwt.decode(token, process.env.TOKEN_SECRET);
    var now = moment().unix();

    // check if the token has expired
    if (now > payload.exp) {
        return res.status(401).send({
            message: 'Token has expired. '
        });
    }

    // check if the user still exists in the db
    User.findById(payload.sub, function (err, user) {
        if (!user) {
            return res.status(400).send({
                message: 'User no longer exists. '
            });
        }
        req.user = user;
        next();
    });
}

// *** generate token *** //
function createToken(user) {
    var payload = {
        exp: moment().add(14, 'days').unix(),
        iat: moment().unix(),
        sub: user._id
    };
    return jwt.encode(payload, process.env.TOKEN_SECRET);
}

// *** register route (email and password) *** //
router.post('/signup', function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, existingUser) {
        if (existingUser) {
            return res.status(409).send({
                message: 'Email is already taken'
            });
        }
        console.log(req.body);
        var user = new User({
            email: req.body.email,
            password: req.body.password,
            first: req.body.first,
            last: req.body.last,
            phone: req.body.phone,
            role: req.body.role,
            patient: req.body.patient,
            firstLogin: true
        });

        user.save(function (err) {
            if (err) {
                res.send(err)
            }
            var token = createToken(user);
            res.send({
                token: token,
                user: user
            });
        });
    });
});

// *** login route (email and password) *** //
router.post('/login', function (req, res) {
    console.log(req.body.email)
    User.findOne({
        email: req.body.email
    }, '+password', function (err, user) {
        if (!user) {
            return res.status(401).send({
                message: {
                    email: 'Incorrect email'
                }
            });
        }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({
                    message: 'Wrong email address and/or password'
                });
            }
            user = user.toObject();
            delete user.password;
            var token = createToken(user);
            res.send({
                token: token,
                user: user
            });
        });
    });
});


//Google Login
router.post('/google', function (req, res) {
    var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
    var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
    var params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: process.env.GOOGLE_SECRET,
        redirect_uri: req.body.redirectUri,
        grant_type: 'authorization_code'
    };

    // Step 1. Exchange authorization code for access token.
    request.post(accessTokenUrl, {
        json: true,
        form: params
    }, function (err, response, token) {
        var accessToken = token.access_token;
        var headers = {
            Authorization: 'Bearer ' + accessToken
        };

        // Step 2. Retrieve profile information about the current user.
        request.get({
            url: peopleApiUrl,
            headers: headers,
            json: true
        }, function (err, response, profile) {
            console.log(profile);
            if (profile.error) {
                return res.status(500).send({
                    message: profile.error.message
                });
            }
            // Step 3a. Link user accounts.
            if (req.headers.authorization) {
                User.findOne({
                    googleProfileID: profile.sub
                }, function (err, existingUser) {
                    if (existingUser) {
                        return res.status(409).send({
                            message: 'There is already a Google account that belongs to you'
                        });
                    }
                    var token = req.headers.authorization.split(' ')[1];
                    var payload = jwt.decode(token, process.env.TOKEN_SECRET);
                    User.findById(payload.sub, function (err, user) {
                        if (!user) {
                            return res.status(400).send({
                                message: 'User not found'
                            });
                        }
                        user.googleProfileID = profile.sub;
                        user.email = profile.email;
                        console.log(user)
                        user.save(function () {
                            var token = createToken(user);
                            res.send({
                                token: token,
                                user: user
                            });
                        });
                    });
                });
            } else {
                // Step 3b. Create a new user account or return an existing one.
                User.findOne({
                    googleProfileID: profile.sub
                }, function (err, existingUser) {
                    if (existingUser) {
                        return res.send({
                            token: createToken(existingUser),
                            user: existingUser
                        });
                    }
                    var user = new User();
                    user.googleProfileID = profile.sub;
                    user.email = profile.email;
                    user.firstLogin = true;
                    user.first = profile.given_name;
                    user.last = profile.family_name;
                    user.face = profile.picture;
                    user.save(function (err) {
                        var token = createToken(user);
                        res.send({
                            token: token,
                            user: user
                        });
                    });
                });
            }
        });
    });
});

router.put('/update', function (req, res) {
    console.log(req.body)
    var query = {
        email: req.body.email
    };
    var update = {
        phone: req.body.phone,
        role: req.body.role,
        patient: req.body.patient || '',
        firstLogin: false
    };
    var options = {
        new: true
    };
    User.findOneAndUpdate(query, update, options, function (err, user) {
        if (err) {
            res.send({
                error: err,
                message: 'There seems to be a problem updating you account.'
            })
        };
        res.send({
            user: user
        })
    })
})
module.exports = router;