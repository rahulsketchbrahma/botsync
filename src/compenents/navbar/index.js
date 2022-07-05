import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/navbar/botsyncLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showNav = () => {
    setShowLinks(true);
  };

  const hideNav = () => {
    setShowLinks(false);
  };
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbarContainer">
          <a href="/">
            <img src={Logo} />
          </a>
          <ul id={showLinks ? "hidden" : ""}>
            <a href="/">Industrial Automation</a>
            <a href="/">Botsync Labs</a>
            <a href="/">Company</a>
            <a href="/">Blog</a>
            <a href="/">Contacts</a>
            <button className="navClose" onClick={hideNav}>
              <FaTimes />
            </button>
          </ul>
          <button className="navButton " onClick={showNav}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
