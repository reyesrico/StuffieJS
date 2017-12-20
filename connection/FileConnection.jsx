var usersFile = require('../data/users.json');
var uproductsFile = require('../data/uproducts.json');
var productsFile = require('../data/products.json');
var categoriesFile = require('../data/categories.json');
//var MongoClient = require('mongodb').MongoClient;

class FileConnection {

    constructor(object_name) {
        if (object_name === 'users') {
            this.file = usersFile;
        }
        else if (object_name === 'uproducts') {
            this.file = uproductsFile;
        }
        else if (object_name === 'products') {
            this.file = productsFile;
        }
        else if (object_name === 'categories') {
            this.file = categoriesFile;
        }
        else {
            this.file = null;
        }


    }

    // ConnectDB () {
    //     var uri = "mongodb://chiquitonet:r5adxpq1@cluster0-wpeiv.mongodb.net/test";
    //     MongoClient.connect(uri, function(err, db) {
    //       db.close();
    //     });        
    // }

    Users() {
        return this.file.users;
    }

    UProducts() {
        return this.file.uproducts;
    }

    Products() {
        return this.file.products;
    }

    Categories() {
        return this.file.categories;
    }
}

export default FileConnection;