import FileConnection from '../connection/FileConnection.jsx';

class Products {
    constructor(){
        var conn = new FileConnection('products');
        this.products = conn.Products();
    }

    getProduct(id){
        var product;
        this.products.forEach(function(p){
            if(p.id === id){
                product = p;
            }
        });
        return product;
    }

    addProduct(product){
        this.products.push(product);
    }

    isProductRegistered(product){
        this.products.forEach(function(p){
            if(p.name === product.name){
                return true;
            }
        });
        return false;
    }
} 

export default Products;