import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "../Css/home.css";
import Nav from "../Components/nav";

function home() {
  return (
    <div class="container-fluid">
      <div className="background"></div>
      <div className="info">
        <div id="profile"></div> | Full Stack Developer | Pro Sarcasm
      </div>
      <div className="row">
        <div className="list">
          <ul className="homelist">
            <li>A</li>
            <li>Developer with</li>
            <li>Heart, Dedication, passion</li>
            <li>(....and acne)</li>
          </ul>
        </div>
      </div>
      <div className="row" id="nav">
        <Nav></Nav>
      </div>
    </div>
  );
}
export default home;
