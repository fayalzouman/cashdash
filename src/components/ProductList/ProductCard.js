import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import Modal from "react-responsive-modal";

//Store
import cartStore from "../store/cartStore";

class ProductCard extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  addToCart = () => {
    cartStore.addItemToCart({ ...this.props.product, quantity: 1 });
  };
  render() {
    const { open } = this.state;
    const { product } = cartStore;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.product.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.props.product.price} KD</p>

          <button
            onClick={() => {
              this.addToCart(this.props.newProduct);
              this.onOpenModal();
            }}
          >
            Add to cart
          </button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h4>Item added to cart!</h4>
          </Modal>
          <Link to={`/productdetail/${this.props.product.id}`}>Details </Link>
        </div>
      </div>
    );
  }
}

export default observer(ProductCard);
