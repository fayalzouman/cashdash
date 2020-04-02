# App

```sh
Trello card: As a user I can see the list of products.
```

Before we begin, move the current Trello card from the `Backlog`  to `Doing` so we can keep track of which component we're working on.

After cloning the project and installing the packages you can see that there’s some code written for you as a starter.
You will also have a src/data.js file. This file contains information on the products that we want to showcase on the system.

In your terminal, type these:
```sh
yarn add react-router
yarn add react-navigation
yarn add react-router-dom
```
These will allow you to use Routes, Redirects etc to switch between different webpages.

You will also need to add:
```sh
yarn add mobx
yarn add mobx-react
```
This will allow you to create stores. Stores will hold all of our functions which will be easily accessible to the different components.
```sh
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import products from "./data";
```

```sh
// Components
import ProductList from "./components/ProductList";

function App() {
  return (
      <div id="app" className="container-fluid">
        <div className="row">
          <Switch>
            <Redirect exact from="/" to="/productlist" />
            <Route path="/productlist" component={ProductList} />
            />
          </Switch>
        </div>
      </div>
  );
}

export default withRouter(observer(App));
```
```sh
</Switch>
```
This is used to be able to switch between different web pages

```sh
<Route path="/productlist" component={ProductList} />
```
This indicates a web page. The path identifies the url. The component identifies which component that will be rendering on the screen.
```sh
export default withRouter(observer(App));
```
As you can see, the App file is wrapped with an observer and withRouter. 
If a component is using react-router, the observer will block the component and the router will break. 
To solve this problem, we wrap the component with withRouter which will give the component access to the router again!


Now we will have to create a folder that will hold the code to render our product list.
 
