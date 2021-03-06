import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import products from "./data";

// Components
import Navbar from "./components/navigation/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductList/ProductDetail";

function App() {
  return (
    <div>
      <Navbar />
      <div id="app" className="container-fluid">
        <div className="row">
          <Switch>
            <Redirect exact from="/" to="/productlist" />
            <Route path="/productlist" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route
              path="/productdetail/:productdetailID?"
              component={ProductDetail}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default withRouter(observer(App));
