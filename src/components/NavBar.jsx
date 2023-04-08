import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkButton from "./DarkButton";

import { useGlobalStatesContext } from "../context/DataContext";
import { FaHome, FaThumbtack, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const { theme, dispatchTheme } = useGlobalStatesContext();

  const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav className={`${theme.color} navbar`}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <FaHome className="navbar-icon" />
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacto" className="navbar-link">
            <FaEnvelope className="navbar-icon" />
            Contacto
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorites" className="navbar-link">
            <FaThumbtack className="navbar-icon" />
            Favoritos
          </Link>
        </li>
      </ul>
      <DarkButton onClick={handleTheme} />
    </nav>
  );
}

export default Navbar;
