import React from 'react';
import { Link } from 'react-router-dom';
import UProducts from '../models/UProducts.jsx';
import Categories from '../models/Categories.jsx';

class ProductsCategory extends React.Component {
    constructor(props) {
        super(props);
        
        var categoryId = parseInt(props.match.params.number);
        var cat = new Categories();
        this.category = cat.getCategory(categoryId);

        var uproducts = new UProducts();
        var username = localStorage.getItem('username');
        if (username !== undefined) {
            this.user_products = uproducts.getUProductsPerCategory(username, this.category);
        }
    }

    render() {
        if (!(this.user_products && this.user_products.length)) {
            return (
                <div className='products'>
                    <div className='sectionTitle'>{this.category.name}</div>
                    No Products Registered. <br />
                    Register your first product <Link to='/products/add'>here.</Link>
                </div>
            );
        }
        return (
            <div className='products'>
                <div className='sectionTitle'>{this.category.name} - <Link to='/products/add'>Add Product</Link></div>
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

export default ProductsCategory;