import React, { Component } from "react";
import cartStore from "../store/cartStore";
import { observer } from "mobx-react";

class CartItem extends Component {
  state = {
    newQuantity: 0
  };
  // componentDidMount() {
  //   cartStore.findProduct(this.props.itemNo);
  //   this.setState({ item: cartStore.item.quantity });
  // }
  //   componentDidMount() {
  //     this.setState({newQuantity: this.props.quantity});
  //  }
  //  handleChange = (e) => {
  //    this.setState({inputValue: e.target.value});
  //  }
  //  <input value={this.state.inputValue} onChange={this.handlechange} onBlur={() => this.props.actions.updateInput(this.state.inputValue)} />

  render() {
    const item = cartStore.products;
    return (
      <div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-4">
              {/* <img src="..." className="card-img" alt="..." /> */}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name: {this.props.item.name}</h5>
                <p className="card-text">Price: {this.props.item.price} KD</p>
                <p className="card-text">
                  Quantity: {this.props.item.quantity}
                </p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    {/* <span class="input-group-text">$</span> */}
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    // value={this.props.item.quantity}
                  />

                  <button
                    onClick={() =>
                      cartStore.updateQuantity(this.props.item.quantity)
                    }
                  >
                    Update quantity
                  </button>
                </div>

                <button
                  onClick={() => cartStore.removeItemFromCart(this.props.item)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(CartItem);
