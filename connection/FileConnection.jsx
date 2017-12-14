var usersFile = require('../data/users.json');
var uproductsFile = require('../data/uproducts.json');
var productsFile = require('../data/products.json');
var categoriesFile = require('../data/categories.json');

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