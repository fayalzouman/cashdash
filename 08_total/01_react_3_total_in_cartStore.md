# Showcasing the total in the Cart

Now, so the total can be rendered on the screen, go to your `index.js` in your `Cart` folder.

In the render, let `total` equal to `totalPrice`. Keep in mind that you will be calling it from `cartStore`.

It should look like this:
```sh
    let total = cartStore.totalPrice;
```
Then, after the `return` call the total. 

Your final code should look like this:
```sh
import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Text, Button } from "reactstrap";

// Component

//Store
import cartStore from "../store/cartStore";
import CartItem from "./CartItem";

class Cart extends Component {
  state = {
    cartItems: []
  };

  componentDidMount() {
    const { products } = cartStore;
    this.setState({ cartItems: products });
  }
  render() {
    let cartItems = this.state.cartItems.map(item => <CartItem item={item} />);
    let total = cartStore.totalPrice;
    return (
      <div className="container mt-5">
        <div class="row">{cartItems}</div>
        {cartStore.products.length !== 0 && (
          <div>
            <p className="card-text">Total:{total}</p>
            <button onClick={() => cartStore.checkoutCart(this.props.history)}>
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default observer(Cart);
```

Awesome work!

Now, whenever you add or delete an item to your cart, the total amount will be updated on the screen!
