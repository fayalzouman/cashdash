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
        {/* <h3>{this.state.cartItems}</list> */}
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
