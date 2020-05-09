import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";

class CartStore {
  //   cartProduct = [];
  products = [];
  // item = null;

  // fetchCartProductByID = async cartProductID => {
  //   this.cartProduct = this.cartProduct.find(
  //     cartProduct => +cartProduct.id === +cartProductID
  //   );
  //   const res = await instance.get(`productlist/`);
  // };

  // findProduct = async itemNo => {
  //   this.item = cartStore.products.find(product => product.id === itemNo);
  // };

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

  addItemToCart = async newProduct => {
    const foundProduct = this.products.find(
      product => newProduct.id === product.id
    );
    console.log("FOUND PRODUCT", foundProduct);
    if (foundProduct) {
      foundProduct.quantity += newProduct.quantity;
      //try catch axios.put
    } else {
      console.log("NEW PRODUCT", newProduct);
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

  checkoutCart = history => {
    this.products = [];
    history.replace("ProductList");
    try {
      const res = axios.get("app/cart/");
    } catch (err) {
      console.error(err);
    }
  };

  removeItemFromCart = productToDelete => {
    this.products = this.products.filter(
      product => product.id !== productToDelete.id
    );
    try {
      const cartItem = {
        product: productToDelete.id
      };
      console.log("Deleting item: " + cartItem);
      const res = instance.delete("app/product/delete/", cartItem);
      console.log("Result: ", res);
    } catch (err) {
      this.statusMessage = err.response;
      console.log("ERROR", err);
    }
  };

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

  // get quantity() {
  //   let total = 0;
  //   this.products.forEach(product => (total += product.quantity));
  //   return total;
  // }

  get totalPrice() {
    let totalPrice = 0;
    let cartPrice = this.products.map(
      product => (totalPrice += product.price * product.quantity)
    );
    return totalPrice;
  }
}

decorate(CartStore, {
  products: observable,
  // item: observable,
  totalPrice: computed
});

const cartStore = new CartStore();

export default cartStore;
