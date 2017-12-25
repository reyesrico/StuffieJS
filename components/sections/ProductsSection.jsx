import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../models/Categories.jsx';
import UProducts from '../../models/UProducts.jsx';

class ProductsSection extends React.Component {
  constructor(props) {
    super(props);

    var cats = new Categories();
    this.categories = cats.getCategories();

    var uproducts = new UProducts();
    var username = localStorage.getItem('username');
    if (username !== undefined) {
      this.user_products = uproducts.getProductsperUser(username);
    }
    else {
      this.user_products = uproducts.getProductsperUser('reyesrico@hotmail.com');
    }

    this.getUProductsPerCategory = this.getUProductsPerCategory.bind(this);
  }

  getUProductsPerCategory() {
    var ccp = [];
    if (this.categories && this.user_products) {
      for (i = 0; i < this.categories.length; i++) {
        var products = 0;
        var categoryId = this.categories[i].id;
        this.user_products.products.forEach(function (usp, categoryId) {
          if (usp.category === categoryId) {
            products++;
          }
        });
        ccp.push(products);
      }
    }
    return ccp;
  }

  render() {
    return (
      <div className="productsSection">
        <ul>
          {
            this.categories.map(function (category) {
              return <li key={category.id}>
                {category.name} ( )
                </li>;
            }, this.uproducts)
          }
        </ul>
      </div>
    );
  }
}

export default ProductsSection;