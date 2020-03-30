RemoveItem Function in CartItem

Now, to create a delete button from the car, we just need to create a button, like we did for the add function and pass the removeItemFromCart function from the cartStore.

Send the  item using props and you’re good to go!
                <button
                  onClick={() => cartStore.removeItemFromCart(this.props.item)}
                >
                  Remove Item
                </button>

Your final code should look like this:
import React, { Component } from "react";
import { observer } from "mobx-react";

//Store
import cartStore from "../store/cartStore";s

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
                <p className="card-text">
                  Quantity: {this.props.item.quantity}
                </p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </div>
                <button
                  onClick={() => cartStore.removeItemFromCart(this.props.item)}
                >
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


Now you can move the trello card from Doing to Done! Congrats!
