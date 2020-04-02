# UpdateQuantity Function in CartStore
```sh
Trello card: As a user I can add update the quantity in the cart.
```

Now we’re going to be working on updating the quantity of the products in the cart!

In your `cartStore.js`, create a new function called `updateQuantity` and assign it a value called `updatedProduct`.
Use `.find` on the products array to connect `product.id` to `updatedProduct.id`
Your code should look like this:
```sh
  updateQuantity = updatedProduct => {
    const foundProduct = this.products.find(
      product => product.id === updatedProduct.id
    );
```
Now, create an if statement where if the `foundProduct` exists and its quantity is greater than 0, connect the `foundProduct`’s quantity to the `updatedProduct`’s quantity.

Then, post `foundProduct` to the link `"app/product/modify/"`.
```sh
Your code should look like this:
  updateQuantity = updatedProduct => {
    const foundProduct = this.products.find(
      product => product.id === updatedProduct.id
    );
    if (foundProduct && foundProduct.quantity > 0) {
      foundProduct.quantity = updatedProduct.quantity;
      try {
        const res = axios.post("app/product/modify/", foundProduct);
      } catch (err) {
        console.error(err);
      }
    }
  };

 

