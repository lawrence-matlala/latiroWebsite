import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // <-- NavLink imported
import "./sideNavBar.css";
import { FaBars } from "react-icons/fa";

function SideNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sidenavbar">
      <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prices"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Prices
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNavBar;
