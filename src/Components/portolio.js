import React, { Component } from "react";
import Carousel from "../Components/carousel";
import "../Css/portfolio.css";
import Nav from "../Components/nav";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function portfolio(props) {
  return (
    <div className=".container">
      <div className="background" id="BgPortpg"></div>
      <div className="info">
        <img
          src="https://lh3.googleusercontent.com/suAaZQMbgVZgcHyV0O-IElkh8P6QQfKK3kNfpBjfQYBpmLaLKdrYEDlPfIvSHDA78eRYPVjh88UarDZApvL_jl04nUvK8alp6JHIUfR4NHVVLOc1G0Dpf2RLX2A3HHpcR9FXwQ3s3lg=w2400"
          alt="profile"
          className="profile"
        />
        | Full Stack Developer | Pro Sarcasm
      </div>
      <div className="row">
        <marquee vspace="1px" width="fit-content" scrolldelay={100}>
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
            <i class="sicon fab fa-language"></i>
            French(oui,oui)
          </div>
        </marquee>
      </div>
      <div className="row" id="picrow">
        <Carousel></Carousel>
      </div>
      <div className="row" id="crow">
        <VerticalTimeline>
          {props.projects.map(site => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={props.icon}
              >
                <h3 className="vertical-timeline-element-title">{site.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {site.languages}
                </h4>
                <p> {site.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        {/* <div className="cdiv">
          {props.projects.map(site => {
            return (
              <div class="card" style={{ width: "17rem" }}>
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
                  </li>{" "}
                </ul>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="row responsiveRow2">
        <Nav switch={props.switch}></Nav>
      </div>
    </div>
  );
}
export default portfolio;
