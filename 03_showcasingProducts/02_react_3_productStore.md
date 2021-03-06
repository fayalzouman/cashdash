# ProductStore

In the src folder, create a folder called `components`.

Inside that folder, create another folder called `ProductList`.

Everything in that folder will contain files that have to do with the product list.

Back in the src folder, create a folder called `store`.

Inside that folder, create a file called `productStore.js`.

We will create a function called fetchProducts so we could fetch the products from the data and render them on the screen.

The function is `asynchronous (async)` which means that whenever we're dealing with commands that need to take some time to finish executing, other functions and commands that come after it can be called at the same time which makes it very efficient.

Next we will need to add another line of code that will define the URL.
```sh
const res = await instance.get(`productlist/`);
```
We use `await` whenever the function is asynchronous. It will stop the execution of whatever code is after the asynchronous function which makes the whole command act as if it was synchronous. 

`Instance` is used to call on the browser link. 

Then we wrap that information in a try and catch to handle any errors we might have. The code inside the try block will be executed. If there is an error in the code, the catch block will be called instead.

Then, the products in a decorate statement and export the store.

Your code should look like this:
```sh
import { decorate, observable } from "mobx";
import products from "../../data";
import { instance } from "./instance";

class ProductsStore {
  name = [];
  products = products;

fetchProducts = async () => {
    try {
      const res = await instance.get(`productlist/`);
      const products = res.data;
      this.products = products;
    } catch (error) {
      console.error(error);
    }
  };
 }

decorate(ProductsStore, {
  products: observable
});

const productsStore = new ProductsStore();

export default productsStore;
```
