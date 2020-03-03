import React, { Component } from "react";
import Carousel from "../Components/carousel";
import "../Css/portfolio.css";
import Nav from "../Components/nav";
function portfolio(props) {
  return (
    <div className=".container">
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
        <h1 className="langtit">Languages & Technologies</h1>
        <marquee vspace="1px" width="fit-content">
          <div className="scroll">
            <i class="sicon fab fa-html5"></i>
            HTML
          </div>
          <div className="scroll">
            <i class="sicon fab fa-css3-alt"></i>
            CSS
          </div>
          <div className="scroll">
            <i class="sicon fab fa-js-square"></i>
            Javascript
          </div>
          <div className="scroll">
            <i class="sicon fab fa-react"></i>
            React
          </div>
          <div className="scroll">
            <i class="sicon fas fa-database"></i>
            Mongo/MYSQL
          </div>
          <div className="scroll">
            <i class="sicon fab fa-node"></i>
            Node
          </div>
          <div className="scroll">
            <i class="sicon fab fa-npm"></i>
            Express/npm
          </div>
          <div className="scroll">
            <i class="sicon fab fa-github-square"></i>
            GIT
          </div>
          <div className="scroll">
            <i class="sicon fas fa-language"></i>
            French(oui,oui)
          </div>
        </marquee>
      </div>
      <div className="row" id="picrow">
        <Carousel></Carousel>
      </div>
      <div className="row">
        {props.projects.map(site => {
          return (
            <div>
              <div class="card">
                <img
                  class="card-img-top"
                  src={site.screenshot}
                  alt="Card cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{site.name}</h5>
                  <p class="card-text">{site.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Languages: {site.languages}</li>
                  <li class="list-group-item">
                    <a href={site.link}>Link to site</a>
                  </li>
                  <li class="list-group-item">
                    <a href={site.linkToCode}>View Code</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <Nav switch={props.switch}></Nav>
      </div>
    </div>
  );
}
export default portfolio;
