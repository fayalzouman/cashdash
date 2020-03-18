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

  //   fetchSubjectByID = async subjectID => {
  //     try {
  //       const res = await instance.get(`subjectdetail/${subjectID}/`);
  //       this.subject = res.data;
  //     } catch (error) {
  //       console.error(error.response.data);
  //     }
  //   };

  fetchProducts = async () => {
    try {
      const res = await instance.get(`productlist/`);
      const products = res.data;
      this.products = products;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  //   fetchSubjects = async categoryID => {
  //     try {
  //       const res = await instance.get(`subjectlist/${categoryID}/`);
  //       const subjects = res.data;
  //       this.subjects = subjects;
  //       console.log("SUBJJJECTS IN STORE", this.subjects);
  //       this.loading = false;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
}

decorate(ProductsStore, {
  loading: observable,
  products: observable
});

const productsStore = new ProductsStore();

export default productsStore;
