import { decorate, observable } from "mobx";
import products from "../../data";
import { instance } from "./instance";

class ProductsStore {
  name = [];
  products = products;

  fetchProductByID = async productID => {
    this.product = this.products.find(product => +product.id === +productID);
    const res = await instance.get(`productlist/`);
  };

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
