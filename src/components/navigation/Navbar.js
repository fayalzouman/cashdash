import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components

const Navbar = () => {
  return (
    // <Navbar bg="primary" variant="dark">
    //   <Navbar.Brand to="#home">Navbar</Navbar.Brand>
    //   <Nav classNameName="mr-auto">
    //     <NavLink to="/cart">Cash Dash</NavLink>
    //   </Nav>
    // </Navbar>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        Cash Dash
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <a className="nav-link" to="/">
              Home
            </a>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
