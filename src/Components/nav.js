import React, { Component } from "react";
import "../Css/nav.css";

function Nav() {
  return (
    <div className="container-fluid">
      <div className="align">
        <ul className="nav">
          <li>
            <a className="hover">
              <i class="fas fa-home"></i>
              Home
            </a>
          </li>
          <li>
            <a className="hover">
              <i class="fas fa-info-circle"></i>About
            </a>
          </li>
          <li>
            <a className="hover">
              <i class="fas fa-star"></i>Starred
            </a>
          </li>
          <li>
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
