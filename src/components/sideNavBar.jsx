import React, { useState } from "react";
import "./sideNavBar.css";
import { FaBars } from "react-icons/fa";

function SideNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sidenavbar">
      <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
      <ul className={menuOpen ? "open" : ""}>
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Prices</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default SideNavBar;
