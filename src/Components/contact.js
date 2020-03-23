import React, { Component } from "react";
import "../Css/contact.css";
import Nav from "./nav";
function contact(props) {
  return (
    <div>
      <div className="background"></div>
      <div className="info">
        <img
          src="https://lh3.googleusercontent.com/suAaZQMbgVZgcHyV0O-IElkh8P6QQfKK3kNfpBjfQYBpmLaLKdrYEDlPfIvSHDA78eRYPVjh88UarDZApvL_jl04nUvK8alp6JHIUfR4NHVVLOc1G0Dpf2RLX2A3HHpcR9FXwQ3s3lg=w2400"
          alt="profile"
          className="profile"
        />
        | Full Stack Developer | Pro Sarcasm
      </div>
      <div className="row">
        <div className="col-4">
          <ul className="ablist">
            <li className="listi">
              <i class="fas fa-at icons"></i>Mekhi19132@gmail.com
            </li>
            <li>
              <i class="fab fa-github icons"></i>
              <a href="https://github.com/Mekhib">GitHub =></a>
            </li>
            <li>
              <i class="fab fa-linkedin icons"></i>
              <a href="https://www.linkedin.com/in/mekhithedev/">Linkedin =></a>
            </li>
            <li>
              <i class="fas fa-phone-square-alt icons"></i>267-506-0545 (Text Me
              anytime!*)
            </li>
            <li>
              <i class="fas fa-file-alt icons"></i>{" "}
              <a href="https://drive.google.com/file/d/1fdslUdLC4gaBEtq0NjmeLwjBFujr8XQq/view">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <div class="accordion">
            <section class="accordion-item">
              <h1>Section 1</h1>
              <div class="accordion-item-content">
                <p>Content for section 1</p>
              </div>
            </section>
            <section class="accordion-item">
              <h1>Section 2</h1>
              <div class="accordion-item-content">
                <p>Content for section 2</p>
              </div>
            </section>
            <section class="accordion-item accordion-item--default">
              <h1>Section 3</h1>
              <div class="accordion-item-content">
                <p>Content for section 3</p>
                <p>This is my default state.</p>
              </div>
            </section>
            <section class="accordion-item">
              <h1>Section 4</h1>
              <div class="accordion-item-content">
                <p>Content for section 4</p>
              </div>
            </section>
          </div>
        </div>

        <div className="row">
          <Nav switch={props.switch}></Nav>
        </div>
      </div>
    </div>
  );
}
export default contact;
