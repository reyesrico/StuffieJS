import React from 'react';
import Categories from '../objects/Categories.jsx';
import UProducts from '../objects/UProducts.jsx';

class MenuSection extends React.Component {
  constructor(props) {
    super(props);
    var cats = new Categories();
    this.categories = cats.getCategories();
    this.uproducts = new UProducts();
  }

  render() {
    return (
      <div className="menu">
        <ul>
          {
            this.categories.map(function (category) {
              return <li key={category.id}>
                {category.name} (number)
                </li>;
            }, this.uproducts)
          }
        </ul>
      </div>
    );
  }
}

export default MenuSection;