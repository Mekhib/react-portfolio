import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "../Css/home.css";
import Nav from "../Components/nav";

function home(props) {
  console.log(props);
  return (
    <div>
      <div className="background" id="hbg"></div>
      <div className="container-fluid">
        <div className="info">
          <img
            src="https://lh3.googleusercontent.com/suAaZQMbgVZgcHyV0O-IElkh8P6QQfKK3kNfpBjfQYBpmLaLKdrYEDlPfIvSHDA78eRYPVjh88UarDZApvL_jl04nUvK8alp6JHIUfR4NHVVLOc1G0Dpf2RLX2A3HHpcR9FXwQ3s3lg=w2400"
            alt="profile"
            className="profile"
          />
          | Full Stack Developer | Pro Sarcasm
        </div>
        <div className="row">
          <div className="list">
            <ul className="homelist">
              <li className="Hlist">A</li>
              <li className="Hlist">Developer with</li>
              <li className="Hlist">Heart, Dedication, passion</li>
              <li className="Hlist">(....and acne)</li>
            </ul>
          </div>
        </div>
        <div className="row" id="nav">
          <Nav switch={props.switch} />
        </div>
      </div>
    </div>
  );
}
export default home;
