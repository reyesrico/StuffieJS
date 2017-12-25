import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MyProducts from './MyProducts.jsx';
import ProductsCategory from './ProductsCategory.jsx';
import Product from './Product.jsx';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/products' component={MyProducts} />
                    <Route path='/products/category/:number' component={ProductsCategory} />
                    <Route path='/products/add' component={Product} />
                </Switch>

            </div>
        );
    }
}

export default Products;