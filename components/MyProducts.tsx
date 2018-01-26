import * as React from 'react';
import { Link } from 'react-router-dom';
import UProducts from '../models/UProducts';

class MyProducts extends React.Component {
    
    user_products: any;
    
    constructor(props: any) {
        super(props);
        var uproducts = new UProducts();
        var username = localStorage.getItem('username');
        if (username !== undefined) {
            this.user_products = uproducts.getProductsperUser(username);
        }
    }

    render() {
        if (!(this.user_products && this.user_products.length)) {
            return (
                <div className='products'>                
                    <div className='sectionTitle'>Products</div>
                    No Products Registered. <br />
                    Register your first product <Link to='/products/add'>here.</Link>
                </div>
            );
        }
        return (
            <div className='products'>
                <div className='sectionTitle'>Products - <Link to='/products/add'>Add Product</Link></div>
                <ul>
                    {
                        this.user_products.map(function (product: any) {
                            return <li key={product.id}>{product.name}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MyProducts;