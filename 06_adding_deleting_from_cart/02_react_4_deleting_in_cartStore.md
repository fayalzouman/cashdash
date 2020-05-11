# RemoveItem Function in CartStore

Now we’re going to define a new function called `removeItemFromCart` so we can, as the name suggests, delete an item from our cart!

After defining the function, pass it a variable called `productToDelete` and `loop` over `this.products` and use `.filter`. We’re then going to connect the `product.id`, to the `productToDelete.id`.

Your code should look like this:
```sh
    this.products = this.products.filter(
      product => product.id !== productToDelete.id
    );
```
We’ll then create a `try/catch` method and, just like the add function, define `cartItem` and assign `product` to it’s new value. We then use `"app/product/delete/"` to delete the new value using `axios.delete`.

Why do we use axios and not instance? Because it’s not an async function.

Your final function should now look like this:
```sh
  removeItemFromCart = productToDelete => {
    this.products = this.products.filter(
      product => product.id !== productToDelete.id
    );
    try {
      const cartItem = {
        product: productToDelete.id
      };
      const res = axios.delete("app/product/delete/", productToDelete.id);
      this.statusMessage = "Success";
      console.log("RESPONSE", this.statusMessage);
    } catch (err) {
      this.statusMessage = err.response;
      console.log("ERROR", err);
    }
  };

