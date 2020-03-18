import React, { Component } from "react";
import { Container } from "react-bootstrap";
import productsStore from "../store/productsStore";
import { Link, Redirect } from "react-router-dom";

class ProductDetail extends Component {
  async componentDidMount() {
    const productID = this.props.match.params.productdetailID;
    await productsStore.fetchProductByID(productID);
    console.log(productsStore.product);
  }

  render() {
    if (!productsStore.product) {
      return <Redirect to="/" />;
    }
    const product = productsStore.product;
    // let description = productsStore.product.description.split("...");
    // let viewedDescription = description.map(des => <div>{des}</div>);

    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <h5 style={{ color: "blue", textAlign: "center" }}>{product.name}</h5>
          <img src={product.imageUrl} className="card-img-top" alt="..." />
          {/* <h5 style={{ color: "blue", textAlign: "left" }}>
            {product.description}
          </h5> */}
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
