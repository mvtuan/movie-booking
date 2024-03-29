import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="search-box">
        <input type="text" placeholder="What do you want to watch?" />
      </div>

      <div className="nav">
        <a className="nav-link" href="#">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Navbar;
