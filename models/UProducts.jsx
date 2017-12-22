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
        
        if(this.uproducts){
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

        if(uproduct){
            uproduct.products.forEach(function (usp) {
                products.push(prs.getProduct(usp.id));
            });    
        }

        return products;
    }
}

export default UProducts;