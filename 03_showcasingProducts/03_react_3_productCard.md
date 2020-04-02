# ProductCard

Since we now have the formula to showcase our products, go back to the ProductList folder and create another file called ProductCard.js

Import the React, observer and the store into the file like so:
```sh
import React from "react";
import { observer } from "mobx-react";

// Store
import cartStore from "../store/cartStore";
```

In your terminal download bootstrap like so:
```sh
yarn add react-bootstrap bootstrap
```
We will be using the code that Bootstrap provides to organize the information of our products into cards. This way, the products will be listed neatly.

In the card, we will include the product’s

•	imageURL

•	name

•	price

Firstly, we will need to get the list of products from cartStore.
We will call the list like so
```sh
    const { product } = cartStore;
```
We use the `{ }` around the product to call in the information using props. 
You can find more information about props here.

This is the link to the cards:
https://getbootstrap.com/docs/4.0/components/card/

Copy-paste the code into your command line and incorporate the list of items that we want to showcase for each item:

•	imageURL

•	name

•	price

Then export the component and wrap it in an observer.

Your code should look like this:
```sh
class ProductCard extends Component {

  render() {
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

        </div>
      </div>
    );
  }
}

export default observer(ProductCard);
```

We use `this.props.` because we used `{ }` to call in the product from the cartStore.


Congrats! That’s the first thing we can check off the list!
You can now move the Trello card from `Doing` to `Done`! 

Make sure you you add, commit and push your code to your repository. 
