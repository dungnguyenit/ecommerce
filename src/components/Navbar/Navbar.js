import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={require("../image/Logo.png")} alt="logo" className="logo" />
      </div>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>HOME</li>
        </Link>
        <Link to="Shop" className="shop">
          <li>SHOP</li>
        </Link>
        <Link to="Magazine" className="magazine">
          <li> MAGAZINE</li>
        </Link>
      </ul>
      <div className="nav-cart">
        <img
          src={require("../image/Add to Cart Button.png")}
          alt="logo"
          className="logo"
        />
        <Link to="Login" className="Login">
          <li>LOGIN</li>
        </Link>
      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"> </i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
