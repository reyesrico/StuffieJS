import React from 'react';
import UProducts from '../objects/UProducts.jsx';

class FeedSection extends React.Component {
  constructor(props){
    super(props);
    var uproducts = new UProducts();
    this.user_products = uproducts.getProductsperUser('reyesrico@hotmail.com');
  }

  render() {
    return (
      <div className="main">
          <div id="feed-title">Products</div>
          <div>{JSON.stringify(this.user_products)}</div>
      </div>
    );
  }
}

export default FeedSection;