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
          <div class="container">
            <section class="accordion">
              <input
                type="radio"
                name="accordion"
                id="handle1"
                checked="checked"
              />
              <h2 class="handle">
                <label for="handle1">
                  <i class="fas fa-question-circle"></i>What are Your Short term
                  goals?
                </label>
              </h2>
              <div class="content">
                <p>
                  <strong>My</strong> Overall goal is to learn not only web
                  Develoment, but to be well educated in mobile development as
                  well, aquiring knowledge about Go, Java, Swift and c. Learning
                  advanced Javascript and adjacent libaries (React, Vue,
                  Angulur) are on the queue as well!
                </p>
              </div>
            </section>
            <section class="accordion">
              <input type="radio" name="accordion" id="handle2" />
              <h2 class="handle">
                <label for="handle2">
                  <i class="fas fa-question-circle"></i>What are your long term
                  goals?
                </label>
              </h2>
              <div class="content">
                <p>
                  Ultimately, My goal is to learn and Develop high quality code
                  on a team that continues to elevate and inspire. I want to be
                  on a team that creates meaningful code thats makes a real
                  impact. I would also love to get my drivers License
                </p>
              </div>
            </section>
            <section class="accordion">
              <input
                type="radio"
                name="accordion"
                id="handle1"
                checked="checked"
              />
              <h2 class="handle">
                <label for="handle1">
                  <i class="fas fa-question-circle"></i>Describe your dream job.
                </label>
              </h2>
              <div class="content">
                <p>
                  My dream job is to be CEO of Microsoft cooperation. Their new
                  found passion in cloud computing intrest me, and I have a
                  vision for merging and syncing github and windows directly to
                  aid developers.
                </p>
              </div>
            </section>
            <section class="accordion">
              <input
                type="radio"
                name="accordion"
                id="handle1"
                checked="checked"
              />
              <h2 class="handle">
                <label for="handle1">
                  <i class="fas fa-question-circle"></i>What kind of work
                  environment do you like best?
                </label>
              </h2>
              <div class="content">
                <p>
                  I love a working with a team. It allows me to bounce Ideas off
                  of people and to keep ideas flowing easy. Any problems could
                  be solved on the team and adding new features would be faster.
                </p>
              </div>
            </section>
            <section class="accordion">
              <input
                type="radio"
                name="accordion"
                id="handle1"
                checked="checked"
              />
              <h2 class="handle">
                <label for="handle1">
                  <i class="fas fa-question-circle"></i>Is fight club a
                  Christmas Movie?
                </label>
              </h2>
              <div class="content">
                <p>It takes place on Christmas, bro.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="row">
        <Nav switch={props.switch}></Nav>
      </div>
    </div>
  );
}
export default contact;
