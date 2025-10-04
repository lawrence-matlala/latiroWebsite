import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="divider">|</span>
        <span className="contact">
          <BsFillTelephoneFill /> +27 82 714 2399
        </span>

        <span className="contact">
          <MdOutlineEmail /> latiroswimmingacademy@gmail.com
        </span>
      </div>
      <button className="enroll-btn">ENROL NOW</button>
    </div>
  );
}

export default TopBar;
