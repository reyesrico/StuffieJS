import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MyProducts from './MyProducts';
import ProductsCategory from './ProductsCategory';
import Product from './Product';

class Products extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="productsSwitch">
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