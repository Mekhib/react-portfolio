import React, { Component } from "react";
import Nav from "./nav";
import "../Css/about.css";
function about(props) {
  return (
    <div class="container-fluid">
      <div className="background responsiveBg1" id="aboutBg"></div>
      <div className="info">
        <img
          src="https://lh3.googleusercontent.com/suAaZQMbgVZgcHyV0O-IElkh8P6QQfKK3kNfpBjfQYBpmLaLKdrYEDlPfIvSHDA78eRYPVjh88UarDZApvL_jl04nUvK8alp6JHIUfR4NHVVLOc1G0Dpf2RLX2A3HHpcR9FXwQ3s3lg=w2400"
          alt="profile"
          className="profile"
        />
        | Full Stack Developer | Pro Sarcasm
      </div>
      <div className="row" id="mRow">
        <div className="col-sm-4">
          <ul className="ablist">
            <li className="listi">
              <i class="fas fa-male icons"></i>Mekhi Brodie
            </li>
            <li>
              <i class="fas fa-map-pin icons"></i>Philadelphia, Pa
            </li>
            <li>
              <i class="fas fa-graduation-cap icons"></i>University of Penn
            </li>
            <li>
              <i class="fas fa-award icons"></i>Full-Stack Certification
            </li>
            <li>
              <i class="fas fa-microchip icons"></i>Mern, JS, MYSQL,HTML,CSS
            </li>
            <li>
              <i class="fas fa-file-alt icons"></i>{" "}
              <a href="https://drive.google.com/file/d/1fdslUdLC4gaBEtq0NjmeLwjBFujr8XQq/view">
                Resume{" "}
              </a>
            </li>
            <li>
              <i class="far fa-file-alt icons"></i>Resume (non-tech)
            </li>
          </ul>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-7">
          <div className="aboutme">
            <h1 className="header">
              <i class="fas fa-info iconh"></i>About me
            </h1>
            <p className="text">
              I software. I love the complex intricacies of code and the
              fluidity of an optimized UI. I have always been fascinated with
              how the hardware of a computer interacts with its software and
              vise versa. I’ve been told on countless occasions that I should
              narrow my area of study from the relatively broad computer science
              to something more refined and specific. To me, however, having a
              degree with such a broad range of applications and knowledge of
              coding languages in a world where technology is rapidly changing
              is more valuable than ever before. I have extremely high ambitions
              for myself. My dream occupation is to be Chief Executive Officer
              of the Microsoft. Bill Gates is someone I look up to, not just
              because of his phenomenal philanthropy work, but because he, along
              with Paul Allen created the best computing operating system on the
              planet with windows, dominated the productivity space with
              Microsoft Office and Powerpoint and helped shaped computing as we
              know it. The other person I look up to is Satya Nadella. His work
              in cloud computing is legendary and I love how he rejuvenated
              Microsoft with new, innovate hardware and software. He managed to
              become CEO of Microsoft with his masters in Computer Science and
              that gives me hope that I could do the same. My friends and family
              support my technology endeavors, yet they do not understand why I
              choose a field in technology, as opposed to something like a
              doctor. I always tell them the same thing: I can save a life with
              a scalpel by creating the technology used to power the surgery.
              It’s not about what you learn, it's about what you do with it that
              makes the difference.
            </p>
          </div>
        </div>
      </div>
      <div className="row responsiveRow1" id="mRow">
        <Nav switch={props.switch}></Nav>
      </div>
    </div>
  );
}
export default about;
