import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

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
        <Divider />

        <Divider />
      </Drawer>
    </div>
  );
}

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
