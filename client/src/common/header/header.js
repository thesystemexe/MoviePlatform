import React from "react";
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
          <input type="text" className="search-input" />
        </div>
        <div className="header-second-link">
          <ul>
            <li>
              <a href="/">Another</a>
            </li>
            <li>
              <a href="/">Anotherthi</a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <div className="login-btn">
            <button>Login</button>
          </div>
          <div className="register-btn">
            <button>Register</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
