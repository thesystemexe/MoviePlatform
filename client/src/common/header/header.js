import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./header.css";

function Header() {
  return (
    <section>
      <div className="head-container">
        <div className="logo">
          <h1>TExt</h1>
        </div>
        <div className="header-first-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="search-input-div">
          <input type="text" className="search-input" placeholder="Search" />
        </div>
        <div className="header-second-link">
          <ul>
            <li className="mail-li">
              <a href="/" className="mail-icon">
                <MailIcon />
              </a>
            </li>
            <li className="alarm-li">
              <a href="/" className="alarm-icon">
                <NotificationsActiveIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <div className="login-div">
            <button className="login-btn">Login</button>
          </div>
          <div className="register-div">
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
