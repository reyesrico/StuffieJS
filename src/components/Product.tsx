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
    categories: any[],
    productName: string,
    productDescription: string,
    tags: string,
    mail: string,
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCategoriesDB = this.getCategoriesDB.bind(this);

        this.state = {
            name: '',
            productName: '',
            productDescription: '',
            category: '',
            categories: [],
            tags: '',
            mail: this.username,
            redirectToNewPage: false
        }

        this.getCategoriesDB();        
    }

    getCategoriesDB(){
        event.preventDefault();
        var url = 'http://localhost:3001/api/categories';

        var productPage = this;

        fetch(url)
            .then(function (res: any) {
                return res.json();
            })
            .then(function (data: any) {
                console.log("data: " + data);
                alert("Categories Successful using DB");
                productPage.setState({categories: data});
            })
            .catch(function (err: any) {
                console.error("err: " + err);
            });
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        var url = 'http://localhost:3001/api/products?id=1&name=Harry Potter&description=description product 1&category=1&tags=Harry Potter&mail=reyesrico@hotmail.com';
        var product = {
            params: {
                id: 3,
                name: this.state.name,
                description: this.state.productDescription,
                category: 1,
                tags: this.state.tags,
                mail: this.state.mail
            }
        };

        var productpage = this;

        // axios.post(url, product)
        //     .then(function (res: any) {
        //         console.log("res: " + res);
        //         alert("Product Successful Registerd using DB");
        //     }, productpage)
        //     .catch(function (err: any) {
        //         console.error("err: " + err);
        //         productpage.setState({ redirectToNewPage: true });
        //     }, productpage);
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.getCategoriesDB();
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
        alert(`cats length: ${this.state.categories.length}`);
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
                    <TextField
                        type='text'
                        name='tags'
                        value={this.state.tags}
                        hintText="Enter tags separated by spaces"
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