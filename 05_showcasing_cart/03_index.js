Index.js
Now that we have our cards, we need to render them on the browser.

Again, like the ProductList.js, we need to list them.

Make sure to import the needed functions, included the cartStore and CartItem file.

The thing that’s different this time, however, is that we’re using state.

Since the cart items are always changing, we will need to use state to keep the information updated.

Create a class called Cart and define a state called cartItems.
Assign cartItems an empty array.

Just like in our ProductDetails.js, we will be using componentDidMount to call the products from the cartStore and connect it to the cartItems array that we defined.

This way, the cart items are rendered on the screen, the moment we click on the cart link.
  componentDidMount() {
    const { products } = cartStore;
    this.setState({ cartItems: products });
  }

Next map over the array and call the CartItem file and send the item (this is why we used this.props).

Call the CartItems in the render.

Your code should look like this:
import React, { Component } from "react";
import { observer } from "mobx-react";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../store/cartStore";

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
    return (
      <div className="container mt-5">
        <div class="row">{cartItems}</div>

        {cartStore.products.length !== 0 && (
          <div>
          </div>
        )}
      </div>
    );
  }
}

export default observer(Cart);



As you can see, we included:
        {cartStore.products.length !== 0 && (
          <div>
          </div>
        )}

Take  a moment to read over and figure out the meaning.

This means that if the array of products shouldn’t equal to 0. It helps us organize the cards on the screen.

Now for the last step!
 
