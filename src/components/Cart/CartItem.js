import React, { Component } from "react";
import { observer } from "mobx-react";

//Store
import cartStore from "../store/cartStore";

class CartItem extends Component {
  state = {
    quantity: cartStore.products.find(item => item.id === this.props.item.id)
      .quantity
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const item = cartStore.products.find(
      item => item.id === this.props.item.id
    );
    return (
      <div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">Name: {item.name.toUpperCase()}</h6>
                <p className="card-text">Price: {item.price} KD</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"></div>
                  <input
                    name="quantity"
                    value={this.state.quantity}
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    aria-label="Amount (to the nearest dollar)"
                  />

                  <button
                    onClick={() =>
                      cartStore.updateQuantity({
                        ...item,
                        quantity: this.state.quantity
                      })
                    }
                  >
                    Update quantity
                  </button>
                </div>
                <button onClick={() => cartStore.removeItemFromCart(item.id)}>
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default observer(CartItem);
