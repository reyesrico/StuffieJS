import FileConnection from '../connection/FileConnection';
import Products from './Products';

class UProducts {
    
    uproducts: any;
    allproducts: any;

    constructor() {
        var conn = new FileConnection('uproducts');
        this.uproducts = conn.UProducts();
        this.allproducts = new Products();
    }

    getUProduct(mail: string) {
        var uproduct;

        if (this.uproducts) {
            this.uproducts.forEach(function (up: any) {
                if (up.mail === mail) {
                    uproduct = up;
                }
            });
        }
        return uproduct;
    }

    getProductsperUser(mail: string) {
        var products = new Array();
        var uproduct: any;
        uproduct = this.getUProduct(mail);
        var prs = this.allproducts;

        if (uproduct) {
            uproduct.products.forEach(function (usp: any) {
                products.push(prs.getProduct(usp.id));
            });
        }

        return products;
    }

    getUProductsPerCategory(mail: string, category: any) {
        var products = new Array();
        var user_products = this.getProductsperUser(mail);
        user_products.forEach(function (prod: any) {
            if (prod.category === category.id) {
                products.push(prod);
            }
        }, category);
        return products;
    }

    isUProductRegistered(mail: string, productId: number) {
        this.uproducts.forEach(function (up: any, mail: string, productId: number) {
            if (up.mail === mail && up.products.include({ "id": productId })) {
                return true;
            }
        });
        return false;
    }
}

export default UProducts;