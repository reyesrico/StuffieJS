'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;

//models 
var User = require('./Users');
var Product = require('./Products');
var Category = require('./Categories');

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

/*
** Routing Users
*/
router.route('/users')
    .get(function (req, res) {
        var request = null;

        //HTML call        
        if (req.body && req.body.mail) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.mail) {
            request = req.query;
        }
        
        User.findOne({ "mail": request.mail }, function (err, user) {
                if (err)
                    res.send(err);
                res.json(user);
                res.body = user;
                console.log("res" + res);
                console.log("res" + res.body);
        });
    })

    .post(function (req, res) {
        var user = new User();
        var request = null;

        //HTML call        
        if (req.body && req.body.mail) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.mail) {
            request = req.query;
        }

        user.mail = request.mail;
        user.pass = request.pass;
        user.name = request.name;

        user.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'User successfully added!' });
        });
    })

    .delete(function (req, res) {
        var request = null;

        //HTML call        
        if (req.body && req.body.mail) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.mail) {
            request = req.query;
        }
        
        User.findOneAndRemove({ "mail": request.mail }, (err, user) => {
            if (err) 
                res.send(err);
            
            let response = {
                message: "User successfully deleted",
                mail: user.mail
            };
            res.status(200).send(response);
        });
    });

/*
** Routing Products
*/
router.route('/products')
    .get(function (req, res) {
        var request = null;

        //HTML call        
        if (req.body && req.body.id) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.id) {
            request = req.query;
        }

        Product.find()
            .exec(function (err, list_products) {
                if (err)
                    res.send(err);
                res.json(list_products);
                res.body = list_products;
            });
    })

    .post(function (req, res) {
        var product = new Product();
        var user = new User();
        var request = null;

        //HTML call        
        if (req.body && req.body.id) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.id) {
            request = req.query;
        }

        //Setting product info
        product.id = request.id;
        product.name = request.name;
        product.description = request.description;
        product.tags = request.tags;
        user.mail = request.mail;

        //Adding category
        Category.findOne({ "id": request.id }, function (err, category) {
            if (err)
                res.send(err);

            product.category = category;
            product.save(function (err) {
                if (err)
                    res.send(`Product Save Error: ${err}`);

                //Finding user to add product
                User.findOne({"mail": request.mail}, function(err, user) {
                    if (err)
                        res.send(`Query Save Error: ${err}`);

                    user.products.push(product._id);
                    user.save(function (err) {
                        if (err)
                            res.send(`User Save Error: ${err}`);

                        let response = {
                            message: "Product added to user successfully!",
                            user: user
                        };
                        res.status(200).send(response);
                    });
                });
            });
        });
    })

    .delete(function (req, res) {
        var request = null;

        //HTML call        
        if (req.body && req.body.id) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.id) {
            request = req.query;
        }

        Product.findOneAndRemove({ "id": request.id }, (err, product) => {
            let response = {
                message: "Product successfully deleted",
                id: product.id
            };
            res.status(200).send(response);
        });
    });

/*
** Routing Categories
*/
router.route('/categories')
    .get(function (req, res) {
        var request = null;

        //HTML call        
        if (req.body && req.body.id) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.id) {
            request = req.query;
        }

        Category.find()
            .exec(function (err, list_categories) {
                if (err)
                    res.send(err);
                res.json(list_categories);
                res.body = list_categories;
            });
    })

    .post(function (req, res) {
        var category = new Category();
        var request = null;

        //HTML call        
        if (req.body && req.body.id) {
            request = req.body;
        }
        //Postman call        
        else if (req.query && req.query.id) {
            request = req.query;
        }

        category.id = request.id;
        category.name = request.name;
        category.description = request.description;

        category.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Category successfully added!' });
        });
    });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function () {
    console.log(`api running on port ${port}`);
});
