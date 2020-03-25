CartItem

Now, create a folder in components folder called Cart.

In it, create a file called CartItem.js

Import the necessary methods.

Then, using the same idea as the ProductCard, create a card for the item in your cart from Bootstrap.

Include the item’s name and price.

Call the product that’s being identified from the cartStore as item.

Your code should look like this:

 import React, { Component } from "react";
import cartStore from "../store/cartStore";
import { observer } from "mobx-react";

class CartItem extends Component {
  render() {
    const item = cartStore.products;
    return (
      <div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name: {this.props.item.name}</h5>
                <p className="card-text">Price: {this.props.item.price} KD</p>
                <p className="card-text">Quantity: {item.quantity}</p>

        </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(CartItem);

 
