import React from 'react';
import { Link } from 'react-router-dom';
import UProducts from '../objects/UProducts.jsx';
import Product from './Product.jsx';

class Products extends React.Component {
    constructor(props) {
        super(props);
        var uproducts = new UProducts();
        var username = localStorage.getItem('username');
        if (username !== undefined) {
            this.user_products = uproducts.getProductsperUser(username);
        }
        else {
            this.user_products = uproducts.getProductsperUser('reyesrico@hotmail.com');
        }
    }

    render() {
        if (!(this.user_products && this.user_products.length)) {
            return (
                <div className="products">
                    <div id="products-title">Products</div>
                    No Products Registered. <br />
                    Register your first product <Link to='/products/add'>here.</Link>
                </div>
            );
        }
        return (
            <div className="products">
                <div id="products-title">Products - <Link to='/products/add'>Add Product</Link></div>
                <ul>
                    {
                        this.user_products.map(function (product) {
                            return <li key={product.id}>{product.name}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Products;