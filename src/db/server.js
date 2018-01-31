'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;

var User = require('./Users');

//db config
mongoose.connect('mongodb://stuffie_admin:r5adxpq1@ds046867.mlab.com:46867/stuffiedb');

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent users
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//now we can set the route path & initialize the API
router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

router.route('/users')
    .get(function (req, res) {
        //call them as params, read them as query 
        if (req.query.mail) {
            User.findOne({ "mail": req.query.mail }, function (err, user) {
                if (err)
                    res.send(err);
                res.json(user);
                res.body = user;
                console.log("res" + res);
                console.log("res" + res.body);
            });
        }
        else {
            //looks at our User Schema
            User.find(function (err, users) {
                if (err)
                    res.send(err);
                //responds with a json object of our database users.
                res.json(users)
            });
        }
    })

    .post(function (req, res) {
        var user = new User();
        //body parser lets us use the req.body

        user.mail = req.body.mail;
        user.pass = req.body.pass;
        user.name = req.body.name;

        user.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'User successfully added!' });
        });
    })

    .delete(function (req, res) {
        //req.query for Postman // req.body for HTML 
        if (req.body.mail) {
            User.findOneAndRemove({ "mail": req.body.mail }, (err, user) => {
                let response = {
                    message: "User successfully deleted",
                    mail: user.mail
                };
                res.status(200).send(response);
            });
        }
        if (req.body.id) {
            User.findByIdAndRemove(req.body.id, (err, user) => {
                let response = {
                    message: "User successfully deleted",
                };
                res.status(200).send(response);
            });
        }
    });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function () {
    console.log(`api running on port ${port}`);
});
