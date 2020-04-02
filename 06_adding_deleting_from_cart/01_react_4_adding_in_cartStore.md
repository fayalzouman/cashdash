# AddItem Function in CartStore
```sh
Trello card: As a user I can add + delete an item from the cart.
```

Now we’re going to be working on adding and deleting items from the cart!

In your `cartStore.js` file, create an `async` function called `addItemToCart` and assign it a variable called `newProduct`.

Then we’re going to define a new variable in the function called `foundProduct`. This variable will `loop` over products to find the product ID and connect it to `newProduct.id`.

Your code should look like this:
```sh
addItemToCart = async newProduct => {
    const foundProduct = this.products.find(
      product => newProduct.id === product.id
    );
```
Next, we create an if statement where if the system found the `foundProduct` variable, it adds its quantity. If not, use `.push` to add the `newProduct` to the array.

Your code should look like this:
```sh
    if (foundProduct) {
      foundProduct.quantity += newProduct.quantity;
    } else {
      this.products.push(newProduct);
    }
```
Now, in a try and catch method, define `cartItem` and assign the variables `product` and `quantity` to their values.

Then define the `instance` using `post` to `"app/product/add/”`. Make sure to not forget to send `cartItem` with the link, so the system understands which variable you want to add to the list.

Your function should now look like this:
```sh
addItemToCart = async newProduct => {
    const foundProduct = this.products.find(
      product => newProduct.id === product.id
    );
    if (foundProduct) {
      foundProduct.quantity += newProduct.quantity;
    } else {
      this.products.push(newProduct);
      try {
        const cartItem = {
          product: newProduct.id,
          quantity: newProduct.quantity
        };
        const res = await instance.post("app/product/add/", cartItem);
        this.statusMessage = "Success";
        console.log("RESPONSE", this.statusMessage);
      } catch (err) {
        this.statusMessage = err.response;
        console.log("ERROR", err);
      }
    }
  };
```
 
