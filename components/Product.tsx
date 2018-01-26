import * as React from 'react';
import { Redirect } from 'react-router-dom';
import UProducts from '../models/UProducts';
import Products from '../models/Products';
import Categories from '../models/Categories';
import TextField from './web_objects/TextField';
import DropDown from './web_objects/DropDown';

interface IProductProps {
    name: string
}

interface IProductState {
    name: string,
    category: string,
    productName: string,
    productDescription: string,
    redirectToNewPage: boolean
}

class Product extends React.Component<IProductProps, IProductState> {

    categories: any;
    uproducts: any;
    username: string;
    user_products: any;

    constructor(props: any) {
        super(props);

        var cats = new Categories();
        this.categories = cats.getCategories();
        //this.catnames = this.categories.map(c => c.name);

        this.uproducts = new UProducts();
        this.username = localStorage.getItem('username');
        if (this.username !== undefined) {
            this.user_products = this.uproducts.getProductsperUser(this.username);
        }
        else {
            this.user_products = this.uproducts.getProductsperUser('reyesrico@hotmail.com');
        }

        this.state = {
            name: this.state.name,
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            category: this.state.category,
            redirectToNewPage: this.state.redirectToNewPage
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event: any){
        var products = new Products();
        var newproduct = {"id": 1};
        
        if(!products.isProductRegistered(this.state.productName)){
            //Register product
        }                
        if(!this.uproducts.isUProductRegistered(this.username, newproduct.id)){
            //Register product to user
        }
        this.setState({ redirectToNewPage: true });
        event.preventDefault();
    }

    render() {
        if (this.state.redirectToNewPage) {
            return (<Redirect to='/' />);
        }
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
                    <TextField
                        type='text'
                        name='productDescription'
                        value={this.state.productDescription}
                        hintText="Enter product description"
                        onChange={this.handleChange} />                        
                    <DropDown
                        values={this.categories} />
                    <input type="submit" value="AddProduct" disabled />
                </form>
            </div>
        );
    }
}

export default Product;