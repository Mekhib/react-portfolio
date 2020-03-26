import React, { Component } from "react";
import "../Css/nav.css";

function Nav(props) {
  console.log(props);
  return (
    <div className="container-fluid">
      <div className="align">
        <ul className="nav">
          <li className="navList" onClick={() => props.switch("home")}>
            <a className="hover">
              <i class="fas fa-home"></i>
              Home
            </a>
          </li>
          <li className="navList" onClick={() => props.switch("about")}>
            <a className="hover">
              <i class="fas fa-info-circle"></i>About
            </a>
          </li>
          <li className="navList" onClick={() => props.switch("portfolio")}>
            <a className="hover">
              <i className="fas fa-star"></i>Starred
            </a>
          </li>
          <li className="navList" onClick={() => props.switch("contact")}>
            <a className="hover">
              <i className="fas fa-id-card"></i>Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
