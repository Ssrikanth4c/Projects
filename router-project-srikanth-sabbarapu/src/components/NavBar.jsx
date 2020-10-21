import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faCartPlus, fas } from "@fortawesome/free-solid-svg-icons";
import "./fontawesome/fontawesome";

// *******stateless function component*****
const NavBar = props => {
  const {userName, isAuth, cartCount}= props
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          <p id="logo">Big Brother</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse  navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul className="nav nav-pills navbar-nav ">
            {/* ******************************** HOME Page************************************* */}
            <li className="nav-item active btn">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            {/* ******************************** products Page ************************************* */}
            <li className="nav-item active btn">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {/* ******************************** About Page ************************************* */}
            <li className="nav-item active btn">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>

            {/* ******************************** Login Page ************************************* */}
            <li className="nav-item active btn">
              <Link className="nav-link " to="/login">
                {isAuth?'Logout':'Login'}
              </Link>
            </li>
            {/* ******************************** cart Page ************************************* */}
            <li className="nav-item active btn">
              <Link className="nav-link " to="/cart">
                <FontAwesomeIcon
                  // icon={faCartPlus}
                  icon="cart-plus"
                  className="text-danger"
                  size="2x"
                />
              </Link>
              <div className="cartCount px-2  text-right">
                {
                  cartCount?cartCount :'0'
                }
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
