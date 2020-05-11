# CartStore
```sh
Trello card: As a user I can view the cart.
```

Now we’re going to create a cart.

In your store folder, create a file called `cartStore.js`

Make sure to import instance like so:
```sh
import { instance } from "./instance";
```

Call the class `CartStore` and create a variable called products. These products should be in an empty list.

Your cart should look like this
```sh
import { instance } from "./instance";

class CartStore {
  products = [];
}
  
const cartStore = new CartStore();

export default cartStore;
```

Now it’s time to create an async function called `fetchCartItems`.

Using a variable called `res`, get the link to the cart by calling app/cart (don’t forget the `await` since it’s asynchronous).

Then connect the data to the list of products that you defined and put it in a `try/catch`.

Your function should look like this:
```sh
fetchCartItems = async () => {
    try {
      const res = await instance.get(
        `app/cart/`
      );
      this.products = res.data;
    } catch (err) {
      console.error(err);
    }
  };
  catch(err) {
    console.error(err);
  }
```

To turn this class into a store we will use the decorate method from the MobX library.
```sh
Import decorate and observable like so:
import { decorate, observable } from "mobx";
```
At the bottom, right before you export the class include the `decorate`. 

The decorate method takes two arguments:

- The class that will become our store
- An object that defines the status of the store's parameters.

It will look like this:
```sh
decorate(CartStore, {
  products: observable,
});
```
This will allow users to view the products.

Your code should now look like this:
```sh
import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  products = [];

  fetchCartItems = async () => {
    try {
      const res = await instance.get(`app/cart/`);
      this.products = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  catch(err) {
    console.error(err);
  }

const cartStore = new CartStore();

export default cartStore;
```

 
