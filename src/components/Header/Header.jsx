import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "./logo.jpg";
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [header, setHeader] = useState("navbar");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("navbar");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={header}>
      <div className="navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links_container">
        <a className="headertext" href="/">
          Home
        </a>
        <a className="headertext" href="/about">
          About us
        </a>
        <a className="headertext" href="/services">
          Services
        </a>
        <a className="headertext" href="/careers">
          Careers
        </a>
        <a className="headertext" href="/training">
          Training
        </a>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={60}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={80}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a className="headertext" href="/">
                  Home
                </a>
              </p>
              <p>
                <a className="headertext" href="/about">
                  About us
                </a>
              </p>
              <p>
                <a className="headertext" href="/services">
                  Services
                </a>
              </p>
              <p>
                <a className="headertext" href="/careers">
                  Careers
                </a>
              </p>
              <p>
                <a className="headertext" href="/training">
                  Training
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
