import FileConnection from '../connection/FileConnection';

class Products {

    products: any;

    constructor(){
        var conn = new FileConnection('products');
        this.products = conn.Products();
    }

    getProduct(id: number){
        var product;
        this.products.forEach(function(p: any){
            if(p.id === id){
                product = p;
            }
        });
        return product;
    }

    addProduct(product: any){
        this.products.push(product);
    }

    isProductRegistered(product: any){
        this.products.forEach(function(p: any){
            if(p.name === product.name){
                return true;
            }
        });
        return false;
    }
} 

export default Products;