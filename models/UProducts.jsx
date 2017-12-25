import FileConnection from '../connection/FileConnection.jsx';
import Products from './Products.jsx';

class UProducts {
    constructor() {
        var conn = new FileConnection('uproducts');
        this.uproducts = conn.UProducts();
        this.allproducts = new Products();
    }

    getUProduct(mail) {
        var uproduct;

        if (this.uproducts) {
            this.uproducts.forEach(function (up) {
                if (up.mail === mail) {
                    uproduct = up;
                }
            });
        }
        return uproduct;
    }

    getProductsperUser(mail) {
        var products = [];
        var uproduct = this.getUProduct(mail);
        var prs = this.allproducts;

        if (uproduct) {
            uproduct.products.forEach(function (usp) {
                products.push(prs.getProduct(usp.id));
            });
        }

        return products;
    }

    getUProductsPerCategory(mail, category) {
        var products = 0;
        var user_products = this.getProductsperUser(mail);
        user_products.forEach(function (prod) {
            if (prod.category === category.id) {
                products++;
            }
        }, category);
        return products;
    }

    isUProductRegistered(mail, productId) {
        this.uproducts.forEach(function (up, mail, productId) {
            if (up.mail === mail && up.products.include({ "id": productId })) {
                return true;
            }
        });
        return false;
    }
}

export default UProducts;