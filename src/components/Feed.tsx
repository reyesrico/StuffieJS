import * as React from 'react';
import UProducts from '../models/UProducts';
import FriendsModel from '../models/Friends';
import Users from '../models/Users';

class Feed extends React.Component {
  
  friends: any;

  constructor(props: any) {
    super(props);
    var uproducts = new UProducts();
    var username = localStorage.getItem('username');
    if (username !== undefined) {
      var fmodel = new FriendsModel(username);
      this.friends = fmodel.getFriends();
    }

    this.getProductsFromFriend = this.getProductsFromFriend.bind(this);
  }

  getProductsFromFriend(friend: any) {
    var uproducts = new UProducts();
    var user_products = uproducts.getProductsperUser(friend.mail);

    return user_products.map(function (product: any) {
      return <li key={product.id}>{product.name}</li>;
    });
  }

  render() {
    if (!(this.friends && this.friends.length)) {
      return (
        <div className="feed">
          <div className="sectionTitle">Feed</div>
          No Friends Registered.
        </div>
      );
    }
    return (
      <div className="feed">
        <div className="sectionTitle">Feed</div>
        <div className="feedInfo">
          {
            this.friends.map(function (friend: any) {
              return (
                <div className="feedPiece" key={friend.mail}>
                  <h3>{friend.mail}</h3>
                  <ul>
                    {this.getProductsFromFriend(friend)}
                  </ul>
                </div>
              )
            }, this)
          }
        </div>
      </div>
    );
  }
}

export default Feed;