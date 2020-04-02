# UpdateQuantity Function in CartItem

Now, in your `CartItem.js` file, we need to add a state called `quantity`.
In that quantity, we’re going to use `.find` to go over the `products` and assign the `item.id` to `this.props.item.id`.
Right outside the parenthesis we’re going to add `.quantity` to show that we specifically want the quantity.

Your code should look like this:
```sh
  state = {
    quantity: cartStore.products.find(item => item.id === this.props.item.id)
      .quantity
  };
```
Next we will create another function called `handleChange` that will take `e` as a variable.

This function will call `setState` and call `({ [e.target.name]: e.target.value })`

Your code should look like this:
```sh
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
```
We use `e.target.name` to dynamically update an object’s property. It retrieves the value of your input, so whatever you insert in your input can be accessed through `e.target.value`.

Then, we’re going continue this code:
```sh
    const item = cartStore.products;
```
`.find `over products and connect the `item`’s `id` to `this.props.item`’s id.
We do this so the quantity can be updated through the cartStore.

Your code should look like this:
```sh
const item = cartStore.products.find(
      item => item.id === this.props.item.id
    );
```
Lastly, create a button using the `onClick` function and pass `…item` and `quantity`.
We pass `…item` because we want to send the whole item, and we use quantity to call `this.state.quantity `so it can be updated on our screens.

Your code should look like this:
```sh
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
```
Your final `CartItem.js` file should now look like this:
```sh
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
                <h5 className="card-title">Name: {item.name}</h5>
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
                <button onClick={() => cartStore.removeItemFromCart(item)}>
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

```
Congrats!

Now your quantity is successfully updated!

You can now move your Trello card from `Doing` to` Done`!
