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
} 

export default Products;