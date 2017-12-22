import React from 'react';
import UProducts from '../models/UProducts.jsx';
import Categories from '../models/Categories.jsx';
import TextField from './web_objects/TextField.jsx';
import DropDown from './web_objects/DropDown.jsx';

class Product extends React.Component {
    constructor(props) {
        super(props);

        var cats = new Categories();
        this.categories = cats.getCategories();
        //this.catnames = this.categories.map(c => c.name);

        var uproducts = new UProducts();
        var username = localStorage.getItem('username');
        if (username !== undefined) {
            this.user_products = uproducts.getProductsperUser(username);
        }
        else {
            this.user_products = uproducts.getProductsperUser('reyesrico@hotmail.com');
        }

        this.state = {
            productName: '',
            category: ''
        }
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    render() {
        if (this.props.name !== undefined) {
            return (
                <div>
                    Show Product.
                </div>
            );
        }
        return (
            <div className="product">
                <h1>New Product</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type='text'
                        name='productName'
                        value={this.state.productName}
                        hintText="Enter product name"
                        onChange={this.handleChange} />
                    <DropDown
                        values={this.categories} />
                    <input type="submit" value="AddProduct" />
                </form>
            </div>
        );
    }
}

export default Product;