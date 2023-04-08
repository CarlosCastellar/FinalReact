import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "../styles/DarkButton.css";
const DarkButton = ({ onClick }) => {
  return (
    <div className="toggleDark">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={onClick}
      />
      <label htmlFor="checkbox" className="label">
        <span className="moon">
          <FaMoon />
        </span>
        <span className="sun">
          <FaSun />
        </span>
        <div className="ball" />
      </label>
    </div>
  );
};

export default DarkButton;
