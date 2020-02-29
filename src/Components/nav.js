import React, { Component } from "react";
import "../Css/nav.css";

function Nav(props) {
  console.log(props);
  return (
    <div className="container-fluid">
      <div className="align">
        <ul className="nav">
          <li onClick={() => props.switch("home")}>
            <a className="hover">
              <i class="fas fa-home"></i>
              Home
            </a>
          </li>
          <li onClick={() => props.switch("about")}>
            <a className="hover">
              <i class="fas fa-info-circle"></i>About
            </a>
          </li>
          <li onClick={() => props.switch("portfolio")}>
            <a className="hover">
              <i class="fas fa-star"></i>Starred
            </a>
          </li>
          <li onClick={() => props.switch("contact")}>
            <a className="hover">
              <i class="fas fa-id-card"></i>Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
