import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/navbar/botsyncLogo.png";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbarContainer">
          <img src={Logo} />

          <ul className="menu">
            <a href="/">Industrial Automation</a>
            <a href="/">Botsync Labs</a>
            <a href="/">Company</a>
            <a href="/">Blog</a>
            <a href="/">Contacts</a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
