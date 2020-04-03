# Total

Now, for the final touch!
```sh 
Trello card: As a user I can see the total price in the cart 
```

We're going to showcase the total price of the cart so the user knows how much they're going to be paying for the items.

In your `cartStore.js` create a function called `totalPrice` using `get`.

In that function create a variable called `totalPrice` and have it equal to 0. We do this so the system understands that the value is a number.

Then, create another variable called `cartPrice`that maps over `products`. 

During that loop, we need to multiply the `price` and the `quantity` of each product and add it to the `totalPrice`.

Then, return `totalPrice`.

Your code should look like this:
```sh 
 get totalPrice() {
    let totalPrice = 0;
    let cartPrice = this.products.map(
      product => (totalPrice += product.price * product.quantity)
    );
    return totalPrice;
```
  Note that after `totalPrice` we added a `+=`.
  ```sh
        product => (totalPrice += product.price * product.quantity)
```
This allows the system to add the product of the `product.price * product.quantity` automatically.

Try it with just an equal sign.

You would notice that the numbers would just be placed next to each other and would not be added.

