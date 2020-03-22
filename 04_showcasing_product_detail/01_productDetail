Trello card: As a user I can see the details of the products.

In the product list, we want to link a page showing the details of each product in the card.
To do that, we will need to go to the cartStore again and create the function.

We will need to loop over the array of products to fetch a specific product using their ID’s.

Call the function fetchProductByID and make sure it’s asynchronous.
Call the value that we’re trying to fetch productID.
Use .find to loop over the array of products and call the product’s ID using product.id
Use await to get the the instance, and call the URL that we created in App.js

The array should look like this:

fetchProductByID = async productID => {
    this.product = this.products.find(product => +product.id === +productID);
    const res = await instance.get(`productlist/`);
  };

Your productStore file should now look like this:

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


Now, back in the ProductDetail.js file, import the necessary. Make sure to import { Container } from “react-bootstrap” to organize your page.

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

//Store
import productsStore from "../store/productsStore";


Name your component ProductDetail and call an async componentDidMount. Like so:

  async componentDidMount() {
}

componentDidMount is a method that triggers right after the component renders on the screen. It only triggers once in the component's lifecycle. This is why it is recommended to make your API requests here since it only triggers a request call once so it doesn't overload your website or the server.

Inside the function, name a variable called productID and link it to productdetailID using props. We will be calling productdetailID in the App.js

Next, call the fetchProductsByID function that we created in the Product Store. Make sure you don’t forget to include  await since the function is async. 
Your code should look like this:
class ProductDetail extends Component {
  async componentDidMount() {
    const productID = this.props.match.params.productdetailID;
    await productsStore.fetchProductByID(productID);
  }
We include productID in the parenthesis when calling fetchProductByID so the system can identify which variable we want.

Then, we need to call the product that we defined from the productStore like so:
    const product = productsStore.product;

Then we list the features that we want to showcase on the browser side a container:
•	name
•	imageURL
•	color
•	material
•	itemNumber

Your code should look like this:
    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <h5 style={{ color: "blue", textAlign: "center" }}>{product.name}</h5>
          <img src={product.imageUrl} className="card-img-top" alt="..." />
          <br />
          <br /> <br />
          <h6 style={{ color: "black", textAlign: "left" }}>
            Color: {product.color}
          </h6>
          <h6 style={{ color: "black", textAlign: "left" }}>
            Material: {product.material}
          </h6>
          <h6 style={{ color: "black", textAlign: "left" }}>
            Item Number: {product.itemNumber}
          </h6>
          <div style={{ textAlign: "center" }}></div>
        </div>
      </Container>
    );

We also want to add a feature called Redirect where the user gets redirected to the list page if there is no product available:
    if (!productsStore.product) {
      return <Redirect to="/" />;
    }

Your final code should look like this:

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

//Store
import productsStore from "../store/productsStore";

class ProductDetail extends Component {
  async componentDidMount() {
    const productID = this.props.match.params.productdetailID;
    await productsStore.fetchProductByID(productID);
  }

  render() {
    if (!productsStore.product) {
      return <Redirect to="/" />;
    }
    const product = productsStore.product;

    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <h5 style={{ color: "blue", textAlign: "center" }}>{product.name}</h5>
          <img src={product.imageUrl} className="card-img-top" alt="..." />
          <br />
          <br /> <br />
          <h6 style={{ color: "black", textAlign: "left" }}>
            Color: {product.color}
          </h6>
          <h6 style={{ color: "black", textAlign: "left" }}>
            Material: {product.material}
          </h6>
          <h6 style={{ color: "black", textAlign: "left" }}>
            Item Number: {product.itemNumber}
          </h6>
          <div style={{ textAlign: "center" }}></div>
        </div>
      </Container>
    );
  }
}

export default ProductDetail;
