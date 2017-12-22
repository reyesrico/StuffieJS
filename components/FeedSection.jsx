import React from 'react';
import UProducts from '../objects/UProducts.jsx';

class FeedSection extends React.Component {
  constructor(props) {
    super(props);
    var uproducts = new UProducts();
    var username = localStorage.getItem('username');
    if (username !== undefined) {
      this.user_products = uproducts.getProductsperUser(username);
    }
    else {
      this.user_products = uproducts.getProductsperUser('reyesrico@hotmail.com');
    }
  }

  render() {
    if (!(this.user_products && this.user_products.length)) {
      return (
        <div className="feed">
          <div id="feed-title">Products</div>
          No Products Registered.
        </div>
      );
    }
    return (
      <div className="feed">
        <div id="feed-title">Products</div>
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

export default FeedSection;