import React from 'react';
import { render } from 'react-dom';
import UProducts from '../models/UProducts.jsx';
import Categories from '../models/Categories.jsx';

class Report extends React.Component {
    constructor(props) {
        super(props);

        var cats = new Categories();
        this.categories = cats.getCategories();

        this.uproducts = new UProducts();
        this.username = localStorage.getItem('username');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("finished");
    }


    render() {
        let rows = [];
        this.categories.forEach(function (category) {
            let rowID = `r${category.id}`;
            let cellID = `c${category.id}`;
            var prods = this.uproducts.getUProductsPerCategory(this.username, category);

            if (prods.length > 0) {
                rows.push(<tr key={rowID} id={rowID} className="reportCategory"><td key={cellID} id={cellID}>{category.name}</td></tr>);

                prods.forEach(function (prod) {
                    rowID += `_${prod.id}`;
                    cellID += `_${prod.id}`;
                    rows.push(<tr key={rowID} id={rowID} className="reportProduct"><td key={cellID} id={cellID}>{prod.name}</td></tr>);
                }, rows, rowID, cellID);
            }

        }, this);

        return (
            <div className="report">
                <h1>Report</h1>
                <table id="report">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Generate" />
                </form>
            </div>
        );
    }
}

export default Report;