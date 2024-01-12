import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookQuran } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      const menuElement = document.querySelector(".menu-animation");
      menuElement.classList.add("closing");

      setTimeout(() => {
        setMenuOpen(false);
        menuElement.classList.remove("closing");
      }, 1500);
    } else {
      setMenuOpen(true);
    }
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={isFixed ? "header-section fixed-position" : "header-section"}
    >
      <div className="header-logo">
        <FontAwesomeIcon className="logo" icon={faBookQuran} />
        <span>MORPHEUS</span>
      </div>
      <ul className="header-right-component">
        <li>
          <span className="header-home" onClick={() => navigate("/")}>
            Home
          </span>
        </li>
        <li>
          <span className="header-about" onClick={() => navigate("/about")}>
            About
          </span>
        </li>
        <li>
          <span className="header-login" onClick={() => navigate("/login")}>
            Login
          </span>
        </li>
        <button
          className="header-try-morpheus"
          onClick={() => navigate("/data-control")}
        >
          Try morpheus
        </button>
        <FontAwesomeIcon
          className="menu-icon"
          icon={faBars}
          onClick={toggleMenu}
        />
      </ul>
      {menuOpen && (
        <MenuAnimation menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

const MenuAnimation = ({ menuOpen, toggleMenu }) => {
  const [menuItemsVisible, setMenuItemsVisible] = useState(true);

  const handleCloseButton = () => {
    setMenuItemsVisible(false);
    toggleMenu();
  };

  let navigate = useNavigate();

  return (
    <div className={"menu-animation " + (menuOpen ? "open" : "close")}>
      <div className="menu-slide" id="slide1"></div>
      <div className="menu-slide" id="slide2"></div>
      <div className="menu-slide" id="slide3"></div>
      <div className="menu-slide" id="slide4"></div>
      {menuItemsVisible && (
        <div className="menu-items">
          <div className="menu-item" onClick={handleCloseButton}>
            Home
          </div>
          <div className="menu-item">Login</div>
          <div className="menu-item" onClick={() => navigate("/character")}>
            Character
          </div>
          <div className="menu-item">Try Morpheus</div>
        </div>
      )}
    </div>
  );
};

export default Header;
