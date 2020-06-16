import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="nav">
    <span className="w3-left">
      <i className="ion ion-navicon-round w3-margin-top" />
    </span>

    <Link to="/">
      <img
        src={require("../assets/images/logowhite.png")}
        alt="Filmdrive Logo"
      />
    </Link>

    <Link to="/" className="w3-right">
      <i className="ion ion-android-cart w3-margin-top" />
      <sup className="cart">Cart</sup>
    </Link>

    <span className="w3-right w3-margin-right">
      <i className="ion ion-search w3-margin-top" />
    </span>
  </nav>
);

export default Header;
