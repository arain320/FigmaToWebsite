import React from "react";
import "./Header.scss";
import logo from "../../assets/hero/Logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <header>
        <div className="header__logo">
          <img src={logo} alt="main logo of website" />
        </div>
        <nav className={show ? "active nav" : "nav"}>
          <ul>
            <li>
              <a href="#offer">Today special offers</a>
            </li>
            <li>
              <a href="#service">Why FoodHut</a>
            </li>
            <li>
              <a href="#product">Our Menu</a>
            </li>
            <li>
              <a href="#product">Our Popular food</a>
            </li>
          </ul>
        </nav>
        <div className="header__cta-btn">
          <button className="btn">Download App</button>
        </div>
        <div className="header__icon">
          <MdOutlineMenu onClick={handleToggle} />
        </div>
      </header>
    </>
  );
};

export default Header;
