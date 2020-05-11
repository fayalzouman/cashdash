# AddItem Function in ProductCard

So no we’re going to give the users a button to click on, in the product card, so they can add the product to their cart. 
We’re going to be using `<button>` and an `onClick` function.
`onClick` will allow us to activate the function once the user clicks on the button.

First, we’re going to define the function that we want to activate once the user clicks on it. Name that function `addToCart`.
Then, call the `addItemToCart` function from the `cartStore` and send the product, using props, with a quantity of 1.
```sh
Your code should look like this:
  addToCart = () => {
    cartStore.addItemToCart({ ...this.props.product, quantity: 1 });
  };
```
Now, create a button and call the `onClick` function. Using `this.addToCart`, pass the value `newProduct` (the variable we defined in the cartStore) using `props`.
You can also add a name to the button, like “Add to cart”.
```sh
Your code should look like this:
          <button
            onClick={() => {
              this.addToCart(this.props.newProduct);
            }}
          >
            Add to cart
          </button>
```
Now, we want to create a pop up so that when people add the item to the cart, a message comes up notifying them that the action was successful.

This popup is called a `Modal`.

Type this command into your terminal to download the modal:
```sh
yarn add react-responsive-modal
```
Using [this link](https://www.npmjs.com/package/react-responsive-modal) to copy-paste the code into your file and have the popup say “Item added to cart!”


Your code should now look like this:
```sh
import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import Modal from "react-responsive-modal";

//Store
import cartStore from "../store/cartStore";

class ProductCard extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  addToCart = () => {
    cartStore.addItemToCart({ ...this.props.product, quantity: 1 });
  };
  render() {
    const { open } = this.state;
    const { product } = cartStore;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.product.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.props.product.price} KD</p>

          <button
            onClick={() => {
              this.addToCart(this.props.newProduct);
              this.onOpenModal();
            }}
          >
            Add to cart
          </button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h4>Item added to cart!</h4>
          </Modal>
          <Link to={`/productdetail/${this.props.product.id}`}>Details </Link>
        </div>
      </div>
    );
  }
}

export default observer(ProductCard);
