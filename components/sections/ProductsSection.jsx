import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../models/Categories.jsx';
import UProducts from '../../models/UProducts.jsx';

class ProductsSection extends React.Component {
  constructor(props) {
    super(props);

    var cats = new Categories();
    this.categories = cats.getCategories();

    this.uproducts = new UProducts();
    this.username = localStorage.getItem('username');
    if (this.username !== undefined) {
      this.user_products = this.uproducts.getProductsperUser(this.username);
    }
  }

  render() {
    return (
      <div className="productsSection">
        <ul>
          {
            this.categories.map(function (category) {
              return <li key={category.id}><Link to={`/products/category/${category.id}`}>
                {category.name} - {this.uproducts.getUProductsPerCategory(this.username, category).length}
              </Link></li>;
            }, this)
          }
        </ul>
      </div>
    );
  }
}

export default ProductsSection;