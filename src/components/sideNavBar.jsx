import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // <-- NavLink imported
import "./sideNavBar.css";
import { FaBars } from "react-icons/fa";

function SideNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false); // closes menu on click

  return (
    <div className="sidenavbar">
      <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prices"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Prices
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
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
