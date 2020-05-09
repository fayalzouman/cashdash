import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

//Store
import cartStore from "../store/cartStore";

const drawerWidth = 330;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [quantity, setQuantity] = useState([]);
  const item = cartStore.products.find(item => item.id === this.props.item.id);
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        {/* { <Divider />
   <Divider /> } */}
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card-body">
                {/* <h3 className="card-title">
                  Name: {this.item.name.toUpperCase()}
                </h3> */}
                {/* <p className="card-text">Price: {item.price} KD</p>
                <p className="card-text">Quantity: {item.quantity}</p> */}
                {/* <div className="input-group mb-3">
                  <div className="input-group-prepend"></div> */}
                <input
                  name="quantity"
                  value={setQuantity}
                  type="text"
                  class="form-control"
                  // onChange={this.handleChange}
                  aria-label="Amount (to the nearest dollar)"
                />

                <button
                  onClick={() =>
                    cartStore.updateQuantity({
                      ...item,
                      quantity: setQuantity
                    })
                  }
                >
                  Update quantity
                </button>
              </div>
              <button onClick={() => cartStore.removeItemFromCart(item.id)}>
                Remove Item
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Drawer>
    </div>
  );
}
// ------------------------------------------------------------------------------------------------------------------------
// import React, { Component } from "react";
// import { observer } from "mobx-react";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
// //Store
// import cartStore from "../store/cartStore";
// import CartItem from "../Cart/CartItem";

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0
//   },
//   drawerPaper: {
//     width: drawerWidth
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3)
//   }
// }));

// // export default function PermanentDrawerLeft() {
// class PermanentDrawer extends Component {
//   state = {
//     cartItems: []
//   };
//   componentDidMount() {
//     const { products } = cartStore;
//     this.setState({ cartItems: products });
//   }
//   render() {
//     const classes = useStyles();
//     let cartItems = this.state.cartItems.map(item => <CartItem item={item} />);
//     let total = cartStore.totalPrice;
//     return (
//       <div className={classes.root}>
//         <CssBaseline />

//         <Drawer
//           className={classes.drawer}
//           variant="permanent"
//           classes={{
//             paper: classes.drawerPaper
//           }}
//           anchor="right"
//         >
//           <div className={classes.toolbar} />
//           <Divider />

//           <Divider />
//         </Drawer>
//       </div>
//     );
//   }
// }
// export default observer(PermanentDrawer);
