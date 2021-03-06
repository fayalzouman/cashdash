import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container } from "react-bootstrap";

// Components
import ProductCard from "./ProductCard";
import Drawer from "../Drawer/";
// Store
import productsStore from "../store/productsStore";

class ProductList extends Component {
  render() {
    const productCards = productsStore.products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));

    return (
      <div>
        <Container style={{ backgroundColor: "white", padding: "50px" }}>
          <div>
            <h3 style={{ color: "green", textAlign: "center" }}>Products</h3>
            <div className="row">{productCards}</div>
          </div>
        </Container>
        {/* <Drawer /> */}
      </div>
    );
  }
}

export default observer(ProductList);
