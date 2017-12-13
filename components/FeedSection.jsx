import React from 'react';
import UProducts from '../objects/UProducts.jsx';

class FeedSection extends React.Component {
  constructor(props) {
    super(props);
    var uproducts = new UProducts();
    this.user_products = uproducts.getProductsperUser('reyesrico@hotmail.com');
  }

  render() {
    return (
      <div className="main">
        <div id="feed-title">Products</div>
        <ul>
          { this.user_products.map(function (product) {
            return <li>{product.name}</li>;
          }) }
        </ul>
      </div>
    );
  }
}

export default FeedSection;